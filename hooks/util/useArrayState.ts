import { useCallback, useState } from 'react';

export const useArrayState = <T>(initialValue: T[]) => {
  const [arrayState, setArrayState] = useState(initialValue);

  const addArrayState = (newValue: T) => {
    setArrayState([...arrayState, newValue]);
  };

  const removeArrayState = (index: number) => {
    setArrayState(arrayState.filter((_, i) => i !== index));
  };

  const updateArrayState = (index: number, newValue: T) => {
    setArrayState(arrayState.map((item, i) => (i === index ? newValue : item)));
  };

  const sliceArrayState = useCallback((index: number) => {
    setArrayState(arrayState.slice(0, index));
  }, []);

  const duplicateCheck = useCallback((): Boolean => {
    const arraySet = new Set(arrayState);
    return arraySet.size !== arrayState.length;
  }, []);

  return [
    arrayState,
    setArrayState,
    {
      addArrayState,
      removeArrayState,
      updateArrayState,
      sliceArrayState,
      duplicateCheck,
    },
  ] as const;
};
