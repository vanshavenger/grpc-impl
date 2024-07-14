// Original file: a.proto

import type { Todo as _todo_Todo, Todo__Output as _todo_Todo__Output } from '../todo/Todo';

export interface GetAllTodosResponse {
  'todos'?: (_todo_Todo)[];
  'totalCount'?: (number);
  'page'?: (number);
  'pageSize'?: (number);
}

export interface GetAllTodosResponse__Output {
  'todos': (_todo_Todo__Output)[];
  'totalCount': (number);
  'page': (number);
  'pageSize': (number);
}
