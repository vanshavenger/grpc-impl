// Original file: a.proto

import type { Todo as _todo_Todo, Todo__Output as _todo_Todo__Output } from '../todo/Todo';

export interface UpdateTodoResponse {
  'todo'?: (_todo_Todo | null);
  'success'?: (boolean);
}

export interface UpdateTodoResponse__Output {
  'todo': (_todo_Todo__Output | null);
  'success': (boolean);
}
