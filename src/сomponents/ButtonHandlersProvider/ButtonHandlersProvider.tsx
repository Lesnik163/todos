import React, { createContext } from 'react';

type ButtonHandlers = {
  removeAllCompletedTasks?: () => void,
  showAllTasks?: () => void,
  showActiveTasks?: () => void,
  showCompletedTasks?: () => void,
  hideTasksByInputButton?: () => void,
};
export const ButtonHandlersContext = createContext<ButtonHandlers>({});

type ButtonHandlersProviderProps = {
  children: React.ReactNode;
  handlers: Record<string, () => void>;
}
export const ButtonHandlersProvider = ({ children, handlers }: ButtonHandlersProviderProps) => {
  return (
    <ButtonHandlersContext.Provider value={handlers}>
      {children}
    </ButtonHandlersContext.Provider>
  );
};
