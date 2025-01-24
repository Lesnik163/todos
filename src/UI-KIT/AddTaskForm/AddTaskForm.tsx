import React, { KeyboardEvent, memo, useCallback, useState } from 'react';

import { Box, Button } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { StyledInput } from './styled';

import type { TaskType } from '../../App/App';
import { generateRandomId } from '../../helpers/generateRandomId';

const PLACE_HOLDER = 'What needs to be done?';

type AddTaskFormProps = {
  addTask: (task: TaskType) => void;
  visibleTasksLength: number;
  hideByInputButton?: () => void;
  showAll?: () => void;
};

export const AddTaskForm = memo(({ addTask, hideByInputButton, showAll, visibleTasksLength }: AddTaskFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const nextMode = visibleTasksLength ? 'hide' : 'show';
  const MAX_LENGTH = 70;

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setInputValue(event.target.value);
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && inputValue.trim() !== '') {
        const id = generateRandomId();
        addTask({
          id,
          name: inputValue,
          isCompleted: false,
          isVisible: true,
        });
        setInputValue('');
      }
    },
    [inputValue, addTask]
  );

  const handleShow = useCallback((typeButton: 'show' | 'hide') => {

    return () => {
      if (typeButton === 'hide') {
        hideByInputButton && hideByInputButton();
      }
      if (typeButton === 'show' && !visibleTasksLength) {
        showAll && showAll();
      };
    };
  }, [hideByInputButton, showAll, visibleTasksLength]);


  return (
    <Box display={'flex'}>
      {<Button sx={{ color: 'grey' }} onClick={handleShow(nextMode)} data-testid='toggle'>
        {visibleTasksLength ? <ExpandMore /> : <ExpandLess />}
      </Button>
      }
      <StyledInput
        type='text'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={PLACE_HOLDER}
      />
    </Box>
  )
});