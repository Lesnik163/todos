import { useContext, useEffect, useState } from "react";

import { ButtonHandlersContext } from "../сomponents";

type Mode = 'all' | 'active' | 'completed' | 'hide';

export const useMode = (modeType: Mode) => {
  const [mode, setMode] = useState<Mode>('all');

  useEffect(() => {
    setMode(modeType);
  }, [modeType]);

  return [mode, setMode] as const;
};

export const useButtonHandlers = () => useContext(ButtonHandlersContext);