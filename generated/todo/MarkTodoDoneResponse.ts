// Original file: a.proto

import type { Todo as _todo_Todo, Todo__Output as _todo_Todo__Output } from '../todo/Todo';

export interface MarkTodoDoneResponse {
  'success'?: (boolean);
  'updatedTodo'?: (_todo_Todo | null);
}

export interface MarkTodoDoneResponse__Output {
  'success': (boolean);
  'updatedTodo': (_todo_Todo__Output | null);
}
