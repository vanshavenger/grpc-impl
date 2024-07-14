// Original file: a.proto

import type { Priority as _todo_Priority, Priority__Output as _todo_Priority__Output } from '../todo/Priority';

export interface CreateTodoRequest {
  'title'?: (string);
  'description'?: (string);
  'priority'?: (_todo_Priority);
}

export interface CreateTodoRequest__Output {
  'title': (string);
  'description': (string);
  'priority': (_todo_Priority__Output);
}
