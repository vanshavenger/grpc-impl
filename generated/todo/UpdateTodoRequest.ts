// Original file: a.proto

import type { Priority as _todo_Priority, Priority__Output as _todo_Priority__Output } from '../todo/Priority';

export interface UpdateTodoRequest {
  'id'?: (string);
  'title'?: (string);
  'description'?: (string);
  'priority'?: (_todo_Priority);
  '_title'?: "title";
  '_description'?: "description";
  '_priority'?: "priority";
}

export interface UpdateTodoRequest__Output {
  'id': (string);
  'title'?: (string);
  'description'?: (string);
  'priority'?: (_todo_Priority__Output);
  '_title': "title";
  '_description': "description";
  '_priority': "priority";
}
