import React, { memo, useCallback } from 'react';

import { StyledInput, StyledLabel, StyledSpan } from './styled';
import type { TaskType } from '../../App/App';

type CheckBoxProps = {
  task: TaskType,
  toggleTaskCompletion: (taskId: string) => void;
};
export const CheckBox = memo(({ task, toggleTaskCompletion }: CheckBoxProps) => {
  const { id, name, isCompleted } = task;

  const handleCheck = useCallback(() => {
    toggleTaskCompletion(id);
  }, [id, toggleTaskCompletion]);

  return (
    <StyledLabel htmlFor={id} data-test='checkbox:label'>
      <StyledInput type="checkbox" name="checkbox" id={id} data-test='checkbox' onChange={handleCheck} checked={isCompleted} />
      <StyledSpan $checked={isCompleted}>{name}</StyledSpan>
    </StyledLabel>
  );
});