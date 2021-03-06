import {ITask} from './ITask';

export class TaskModel implements ITask {
  id: string;
  title: string;
  date: string;
  color: string;
  isFavorite: boolean;
  isArchived: boolean;

  constructor(
    id: string,
    title: string,
    date: string,
    color: string,
    isFavorite: boolean,
    isArchived: boolean
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.color = color;
    this.isFavorite = isFavorite;
    this.isArchived = isArchived;
  }
}
