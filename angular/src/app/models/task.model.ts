import {Task} from './task';

export class TaskModel implements Task {
  id: string;
  title: string;
  date: Date;
  color: string;
  isFavorite: boolean;
  isArchived: boolean;

  constructor(
    id,
    title,
    date,
    color,
    isFavorite,
    isArchived
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.color = color;
    this.isFavorite = isFavorite;
    this.isArchived = isArchived;
  }
}