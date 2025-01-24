import { TaskType } from "../App/App";

export const getSuitableTasks = (mode: string, completedTasks: TaskType[], activeTasks: TaskType[], allTasks: TaskType[]) => {
  switch (mode) {
    case 'all':
      return allTasks;
    case 'active':
      return activeTasks;
    case 'completed':
      return completedTasks;
    case 'hide':
      return [];
    default:
      return allTasks;
  }
};