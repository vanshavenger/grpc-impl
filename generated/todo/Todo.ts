// Original file: a.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { Priority as _todo_Priority, Priority__Output as _todo_Priority__Output } from '../todo/Priority';

export interface Todo {
  'id'?: (string);
  'title'?: (string);
  'description'?: (string);
  'done'?: (boolean);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
  'version'?: (number);
  'priority'?: (_todo_Priority);
}

export interface Todo__Output {
  'id': (string);
  'title': (string);
  'description': (string);
  'done': (boolean);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
  'version': (number);
  'priority': (_todo_Priority__Output);
}
