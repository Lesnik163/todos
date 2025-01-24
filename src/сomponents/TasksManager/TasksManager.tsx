import React from 'react';

import { StyledButtonRow, StyledTaskManager } from './styled';

import { Box } from '@mui/material';

import { Button } from '../../UI-KIT';
import { ButtonHandlersProvider } from '../index';


type TasksManagerProps = {
  removeAllCompleted: () => void,
  showAll: () => void,
  showActive: () => void,
  showCompleted: () => void,
  activeTasksQuantity: number,
};

export const TasksManager = ({ removeAllCompleted, showAll, showActive, showCompleted, activeTasksQuantity }: TasksManagerProps) => {
  const handlers = {
    removeAllCompletedTasks: removeAllCompleted,
    showAllTasks: showAll,
    showActiveTasks: showActive,
    showCompletedTasks: showCompleted,
  };

  return (
    <ButtonHandlersProvider handlers={handlers}>
      <StyledTaskManager display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box sx={{ color: 'grey' }}>
          {activeTasksQuantity
            ? <span data-testid='left'>{activeTasksQuantity} items left</span>
            : <span data-testid='done'>all done</span>}
        </Box>
        <StyledButtonRow>
          <Button text='All' />
          <Button text='Active' />
          <Button text='Completed' />
        </StyledButtonRow>
        <Box>
          <Button text='Clear completed' />
        </Box>
      </StyledTaskManager>
    </ButtonHandlersProvider>
  )
};