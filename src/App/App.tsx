import React, { useCallback, useEffect, useState } from 'react';

import { Divider } from '@mui/material';

import { Task, TasksManager, Wrapper } from '../сomponents';
import { useMode } from '../hooks';
import { getSuitableTasks } from '../helpers/getSuitableTasks';
import { StyledBox, StyledAddTaskForm } from './styled';


export type TaskType = {
  id: string;
  name: string;
  isCompleted: boolean;
  isVisible: boolean;
};

export const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [mode, setMode] = useMode('all');
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);
  const [activeTasks, setActiveTasks] = useState<TaskType[]>([]);

  const activeTasksQuantity = activeTasks.length;

  useEffect(() => {
    const alreadyComletedTask = tasks.filter(task => task.isCompleted);
    const notComletedTask = tasks.filter(task => task.isCompleted === false);
    setCompletedTasks(alreadyComletedTask);
    setActiveTasks(notComletedTask);
  }, [tasks, mode]);

  const addTask = useCallback((task: TaskType) => {
    const newTask = {
      id: task.id,
      name: task.name,
      isCompleted: task.isCompleted,
      isVisible: task.isVisible
    };
    setTasks(prevTasks => [...prevTasks, newTask])
  }, []);

  const removeAllCompletedTask = useCallback(() => {
    setTasks(prevTasks => prevTasks.filter(prevTask => !prevTask.isCompleted))
  }, []);

  const showAll = useCallback(() => {
    setMode('all');
  }, [setMode]);

  const showActive = useCallback(() => {
    setMode('active')
  }, [setMode]);

  const showCompleted = useCallback(() => {
    setMode('completed')
  }, [setMode]);

  const toggleTaskCompletion = useCallback(
    (taskId: string) => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        )
      );
    },
    [setTasks]
  );

  const hideByInputButton = useCallback(() => {
    setMode('hide')
  }, [setMode]);

  const actualTasks = getSuitableTasks(mode, completedTasks, activeTasks, tasks);
  const visibleTasksLength = actualTasks.length;
  // reverse() чтоб новые задачи были в верхней части списка
  const reversedTasks = [...actualTasks].reverse();

  return (
    <Wrapper>
      <StyledBox elevation={6}>
        <StyledAddTaskForm addTask={addTask}
          visibleTasksLength={visibleTasksLength}
          hideByInputButton={hideByInputButton}
          showAll={showAll}
        />
        <Divider sx={{ borderWidth: '1.5px' }} />
        {reversedTasks.length
          ? reversedTasks.map(task => (
            <div key={task.id}>
              <Task task={task} toggleTaskCompletion={toggleTaskCompletion} />
              <Divider sx={{ borderWidth: '1.5px' }} />
            </div>
          )) : null}
        <Divider sx={{ borderWidth: '1.5px' }} />
        <TasksManager
          removeAllCompleted={removeAllCompletedTask}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          activeTasksQuantity={activeTasksQuantity}
        />
      </StyledBox>
      <StyledBox elevation={4} />
      <StyledBox elevation={2} />
    </Wrapper>
  );
}

export default App;
