export type tableDataType = {
  order: number | undefined;
  name: string | undefined;
  cuteNess: number;
  fun: number;
  amazing: number;
  sum: number;
  judge: string | undefined;
};

export const useSortArray = () => {
  const byCuteNess = (array: tableDataType[]) =>
    array.sort((a, b) => b.cuteNess! - a.cuteNess!);
  const byFun = (array: tableDataType[]) =>
    array.sort((a, b) => b.fun! - a.fun!);
  const byAmazing = (array: tableDataType[]) =>
    array.sort((a, b) => b.amazing! - a.amazing!);
  const bySum = (array: tableDataType[]) =>
    array.sort((a, b) => b.sum! - a.sum!);
  const byOrder = (array: tableDataType[]) =>
    array.sort((a, b) => a.order! - b.order!);

  return { sort: { byCuteNess, byFun, byAmazing, bySum, byOrder } };
};
