import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { TodoServiceClient as _todo_TodoServiceClient, TodoServiceDefinition as _todo_TodoServiceDefinition } from './todo/TodoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  todo: {
    CreateTodoRequest: MessageTypeDefinition
    CreateTodoResponse: MessageTypeDefinition
    DeleteTodoRequest: MessageTypeDefinition
    DeleteTodoResponse: MessageTypeDefinition
    Error: MessageTypeDefinition
    GetAllTodosRequest: MessageTypeDefinition
    GetAllTodosResponse: MessageTypeDefinition
    GetTodoByIdRequest: MessageTypeDefinition
    GetTodoByIdResponse: MessageTypeDefinition
    MarkTodoDoneRequest: MessageTypeDefinition
    MarkTodoDoneResponse: MessageTypeDefinition
    Priority: EnumTypeDefinition
    Todo: MessageTypeDefinition
    TodoService: SubtypeConstructor<typeof grpc.Client, _todo_TodoServiceClient> & { service: _todo_TodoServiceDefinition }
    UpdateTodoRequest: MessageTypeDefinition
    UpdateTodoResponse: MessageTypeDefinition
  }
}

