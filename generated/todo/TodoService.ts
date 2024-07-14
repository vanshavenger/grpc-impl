// Original file: a.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTodoRequest as _todo_CreateTodoRequest, CreateTodoRequest__Output as _todo_CreateTodoRequest__Output } from '../todo/CreateTodoRequest';
import type { CreateTodoResponse as _todo_CreateTodoResponse, CreateTodoResponse__Output as _todo_CreateTodoResponse__Output } from '../todo/CreateTodoResponse';
import type { DeleteTodoRequest as _todo_DeleteTodoRequest, DeleteTodoRequest__Output as _todo_DeleteTodoRequest__Output } from '../todo/DeleteTodoRequest';
import type { DeleteTodoResponse as _todo_DeleteTodoResponse, DeleteTodoResponse__Output as _todo_DeleteTodoResponse__Output } from '../todo/DeleteTodoResponse';
import type { GetAllTodosRequest as _todo_GetAllTodosRequest, GetAllTodosRequest__Output as _todo_GetAllTodosRequest__Output } from '../todo/GetAllTodosRequest';
import type { GetAllTodosResponse as _todo_GetAllTodosResponse, GetAllTodosResponse__Output as _todo_GetAllTodosResponse__Output } from '../todo/GetAllTodosResponse';
import type { GetTodoByIdRequest as _todo_GetTodoByIdRequest, GetTodoByIdRequest__Output as _todo_GetTodoByIdRequest__Output } from '../todo/GetTodoByIdRequest';
import type { GetTodoByIdResponse as _todo_GetTodoByIdResponse, GetTodoByIdResponse__Output as _todo_GetTodoByIdResponse__Output } from '../todo/GetTodoByIdResponse';
import type { MarkTodoDoneRequest as _todo_MarkTodoDoneRequest, MarkTodoDoneRequest__Output as _todo_MarkTodoDoneRequest__Output } from '../todo/MarkTodoDoneRequest';
import type { MarkTodoDoneResponse as _todo_MarkTodoDoneResponse, MarkTodoDoneResponse__Output as _todo_MarkTodoDoneResponse__Output } from '../todo/MarkTodoDoneResponse';
import type { UpdateTodoRequest as _todo_UpdateTodoRequest, UpdateTodoRequest__Output as _todo_UpdateTodoRequest__Output } from '../todo/UpdateTodoRequest';
import type { UpdateTodoResponse as _todo_UpdateTodoResponse, UpdateTodoResponse__Output as _todo_UpdateTodoResponse__Output } from '../todo/UpdateTodoResponse';

export interface TodoServiceClient extends grpc.Client {
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteTodo(argument: _todo_DeleteTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  DeleteTodo(argument: _todo_DeleteTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  DeleteTodo(argument: _todo_DeleteTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  DeleteTodo(argument: _todo_DeleteTodoRequest, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  deleteTodo(argument: _todo_DeleteTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  deleteTodo(argument: _todo_DeleteTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  deleteTodo(argument: _todo_DeleteTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  deleteTodo(argument: _todo_DeleteTodoRequest, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllTodos(argument: _todo_GetAllTodosRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetAllTodosResponse__Output>): grpc.ClientUnaryCall;
  GetAllTodos(argument: _todo_GetAllTodosRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetAllTodosResponse__Output>): grpc.ClientUnaryCall;
  GetAllTodos(argument: _todo_GetAllTodosRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetAllTodosResponse__Output>): grpc.ClientUnaryCall;
  GetAllTodos(argument: _todo_GetAllTodosRequest, callback: grpc.requestCallback<_todo_GetAllTodosResponse__Output>): grpc.ClientUnaryCall;
  getAllTodos(argument: _todo_GetAllTodosRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetAllTodosResponse__Output>): grpc.ClientUnaryCall;
  getAllTodos(argument: _todo_GetAllTodosRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetAllTodosResponse__Output>): grpc.ClientUnaryCall;
  getAllTodos(argument: _todo_GetAllTodosRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetAllTodosResponse__Output>): grpc.ClientUnaryCall;
  getAllTodos(argument: _todo_GetAllTodosRequest, callback: grpc.requestCallback<_todo_GetAllTodosResponse__Output>): grpc.ClientUnaryCall;
  
  GetTodoById(argument: _todo_GetTodoByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoByIdResponse__Output>): grpc.ClientUnaryCall;
  GetTodoById(argument: _todo_GetTodoByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodoByIdResponse__Output>): grpc.ClientUnaryCall;
  GetTodoById(argument: _todo_GetTodoByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoByIdResponse__Output>): grpc.ClientUnaryCall;
  GetTodoById(argument: _todo_GetTodoByIdRequest, callback: grpc.requestCallback<_todo_GetTodoByIdResponse__Output>): grpc.ClientUnaryCall;
  getTodoById(argument: _todo_GetTodoByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoByIdResponse__Output>): grpc.ClientUnaryCall;
  getTodoById(argument: _todo_GetTodoByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodoByIdResponse__Output>): grpc.ClientUnaryCall;
  getTodoById(argument: _todo_GetTodoByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoByIdResponse__Output>): grpc.ClientUnaryCall;
  getTodoById(argument: _todo_GetTodoByIdRequest, callback: grpc.requestCallback<_todo_GetTodoByIdResponse__Output>): grpc.ClientUnaryCall;
  
  MarkTodoDone(argument: _todo_MarkTodoDoneRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_MarkTodoDoneResponse__Output>): grpc.ClientUnaryCall;
  MarkTodoDone(argument: _todo_MarkTodoDoneRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_MarkTodoDoneResponse__Output>): grpc.ClientUnaryCall;
  MarkTodoDone(argument: _todo_MarkTodoDoneRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_MarkTodoDoneResponse__Output>): grpc.ClientUnaryCall;
  MarkTodoDone(argument: _todo_MarkTodoDoneRequest, callback: grpc.requestCallback<_todo_MarkTodoDoneResponse__Output>): grpc.ClientUnaryCall;
  markTodoDone(argument: _todo_MarkTodoDoneRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_MarkTodoDoneResponse__Output>): grpc.ClientUnaryCall;
  markTodoDone(argument: _todo_MarkTodoDoneRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_MarkTodoDoneResponse__Output>): grpc.ClientUnaryCall;
  markTodoDone(argument: _todo_MarkTodoDoneRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_MarkTodoDoneResponse__Output>): grpc.ClientUnaryCall;
  markTodoDone(argument: _todo_MarkTodoDoneRequest, callback: grpc.requestCallback<_todo_MarkTodoDoneResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateTodo(argument: _todo_UpdateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  UpdateTodo(argument: _todo_UpdateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  UpdateTodo(argument: _todo_UpdateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  UpdateTodo(argument: _todo_UpdateTodoRequest, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdateTodoRequest, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateTodo: grpc.handleUnaryCall<_todo_CreateTodoRequest__Output, _todo_CreateTodoResponse>;
  
  DeleteTodo: grpc.handleUnaryCall<_todo_DeleteTodoRequest__Output, _todo_DeleteTodoResponse>;
  
  GetAllTodos: grpc.handleUnaryCall<_todo_GetAllTodosRequest__Output, _todo_GetAllTodosResponse>;
  
  GetTodoById: grpc.handleUnaryCall<_todo_GetTodoByIdRequest__Output, _todo_GetTodoByIdResponse>;
  
  MarkTodoDone: grpc.handleUnaryCall<_todo_MarkTodoDoneRequest__Output, _todo_MarkTodoDoneResponse>;
  
  UpdateTodo: grpc.handleUnaryCall<_todo_UpdateTodoRequest__Output, _todo_UpdateTodoResponse>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  CreateTodo: MethodDefinition<_todo_CreateTodoRequest, _todo_CreateTodoResponse, _todo_CreateTodoRequest__Output, _todo_CreateTodoResponse__Output>
  DeleteTodo: MethodDefinition<_todo_DeleteTodoRequest, _todo_DeleteTodoResponse, _todo_DeleteTodoRequest__Output, _todo_DeleteTodoResponse__Output>
  GetAllTodos: MethodDefinition<_todo_GetAllTodosRequest, _todo_GetAllTodosResponse, _todo_GetAllTodosRequest__Output, _todo_GetAllTodosResponse__Output>
  GetTodoById: MethodDefinition<_todo_GetTodoByIdRequest, _todo_GetTodoByIdResponse, _todo_GetTodoByIdRequest__Output, _todo_GetTodoByIdResponse__Output>
  MarkTodoDone: MethodDefinition<_todo_MarkTodoDoneRequest, _todo_MarkTodoDoneResponse, _todo_MarkTodoDoneRequest__Output, _todo_MarkTodoDoneResponse__Output>
  UpdateTodo: MethodDefinition<_todo_UpdateTodoRequest, _todo_UpdateTodoResponse, _todo_UpdateTodoRequest__Output, _todo_UpdateTodoResponse__Output>
}
