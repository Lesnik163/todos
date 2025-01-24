import React, { memo } from 'react';

import { StyledTask } from './styled';

import { TaskType } from '../../App/App';
import { CheckBox } from '../../UI-KIT';

type TaskProps = {
  task: TaskType;
  toggleTaskCompletion: (taskId: string) => void;
};

export const Task = memo(({ task, toggleTaskCompletion }: TaskProps) => {
  const { isVisible } = task;
  
  return (
    <StyledTask $isVisible={isVisible}>
      <CheckBox task={task} toggleTaskCompletion={toggleTaskCompletion} />
    </StyledTask>
  )
});