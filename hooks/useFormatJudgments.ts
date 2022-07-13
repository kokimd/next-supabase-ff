import { useEffect, useState } from 'react';
import { useQueryJudgments } from './useQueryjudgments';
import { tableDataType } from './util/useSortArray';

export const useFormatJudgments = () => {
  const { data: judgments } = useQueryJudgments();
  const [tableData, setTableData] = useState<tableDataType[]>();
  const [formatData, setFormatData] = useState<tableDataType[]>();

  useEffect(() => {
    if (judgments) {
      const data = judgments.map((judge, index) => {
        const { participants, cuteNess, fun, amazing, sum, profiles } = judge;
        return {
          order: participants?.order,
          name: participants?.name,
          cuteNess,
          fun,
          amazing,
          sum,
          judge: profiles?.name,
        };
      });
      setFormatData(data);
    }
  }, [judgments]);

  useEffect(() => {
    if (formatData) {
      const result = formatData.reduce(
        (totals, { cuteNess, fun, amazing, sum, order, name, judge }) => {
          const last: any = totals.at(-1);
          // @ts-ignore
          if (last?.order === order) {
            last.cuteNess += cuteNess;
            last.fun += fun;
            last.amazing += amazing;
            last.sum += sum;
          } else {
            // @ts-ignore
            totals.push({ cuteNess, fun, amazing, sum, order, name, judge });
          }
          return totals;
        },
        []
      );
      setTableData(result);
    }
  }, [formatData]);

  return [tableData, setTableData] as const;
};
