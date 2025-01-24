import React from 'react';

import { StyledButton } from './styled';

import { useButtonHandlers } from '../../hooks';

type ButtonType = {
  text: string;
};

export const Button = ({ text }: ButtonType) => {
  const { removeAllCompletedTasks, showAllTasks, showActiveTasks, showCompletedTasks } = useButtonHandlers();
  const onClickHandle = () => {
    switch (text) {
      case 'All':
        showAllTasks && showAllTasks();
        // console.log('all');
        break;
      case 'Active':
        showActiveTasks && showActiveTasks();
        break;
      case 'Completed':
        showCompletedTasks && showCompletedTasks();
        break;
      case 'Clear completed':
        removeAllCompletedTasks && removeAllCompletedTasks();
        break;
    }
  };
  return (
    <StyledButton onClick={onClickHandle} name={text}>{text}</StyledButton>
  )
};