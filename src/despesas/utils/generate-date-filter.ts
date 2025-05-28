export type DateFilter = {
  year: number;
  month: number;
};
export type DateFilterInput = Partial<DateFilter>;

interface DateFilterParams {
  year?: number;
  month?: number;
}

interface DateFilterResult {
  date: {
    gte: Date;
    lt: Date;
  };
}

export function generateDateFilter({
  year,
  month,
}: DateFilterParams): DateFilterResult | null {
  if (!year) return null;

  if (month) {
    const endMonth = month === 12 ? 1 : month + 1;
    const endYear = month === 12 ? year + 1 : year;

    const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
    const endDate = new Date(Date.UTC(endYear, endMonth - 1, 1, 0, 0, 0, 0));

    return {
      date: {
        gte: startDate,
        lt: endDate,
      },
    };
  }

  const startDate = new Date(Date.UTC(year, 0, 1, 0, 0, 0, 0));
  const endDate = new Date(Date.UTC(year + 1, 0, 1, 0, 0, 0, 0));

  return {
    date: {
      gte: startDate,
      lt: endDate,
    },
  };
}
