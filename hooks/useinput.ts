import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnTypes<T> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialDate: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialDate);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
