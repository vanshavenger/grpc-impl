import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { TodoServiceHandlers } from './generated/todo/TodoService';
import { ProtoGrpcType } from './generated/a';
import { Todo } from './generated/todo/Todo';
import { Priority } from './generated/todo/Priority';
import { CreateTodoResponse } from './generated/todo/CreateTodoResponse';
import { GetAllTodosRequest } from './generated/todo/GetAllTodosRequest';

type SortableKeys = keyof Pick<Todo, 'title' | 'priority' | 'createdAt' | 'updatedAt'>;

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const todoProto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType

const isSortableKey = (key: string): key is SortableKeys => {
  return ['title', 'priority', 'createdAt', 'updatedAt'].includes(key);
}

let TODOS: Todo[] = [
    {
        id: '1',
        title: 'Learn gRPC',
        description: '',
        done: false,
        createdAt: { seconds: Date.now() / 1000, nanos: 0 },
        updatedAt: { seconds: Date.now() / 1000, nanos: 0 },
        version: 1,
        priority: Priority.LOW
    },
    {
        id: '2',
        title: 'Learn Protocol Buffers',
        description: '',
        done: false,
        createdAt: { seconds: Date.now() / 1000 },
        updatedAt: { seconds: Date.now() / 1000 },
        version: 1,
        priority: Priority.MEDIUM
    },
    {
        id: '3',
        title: 'Learn NestJS',
        description: '',
        done: false,
        createdAt: { seconds: Date.now() / 1000 },
        updatedAt: { seconds: Date.now() / 1000 },
        version: 1,
        priority: Priority.LOW
    },
    {
        id: '4',
        title: 'Learn TypeScript',
        description: '',
        done: false,
        createdAt: { seconds: Date.now() / 1000 },
        updatedAt: { seconds: Date.now() / 1000},
        version: 1,
        priority: Priority.HIGH
    }
];


const handler: TodoServiceHandlers = {
    CreateTodo: (call, callback) => {
        const { title, description, priority } = call.request
        const newTodo = {
            title,
            description,
            priority,
            id: (TODOS.length + 1).toString(),
            done: false,
            createdAt: { seconds: Date.now() / 1000 },
            updatedAt: { seconds: Date.now() / 1000 },
            version: 1
        }
        TODOS.push(newTodo);
        const response: CreateTodoResponse = { todo: newTodo };
        callback(null, response);
    },
    GetAllTodos: (call, callback) => {
        const { ascending = false, filter = "", page = 1, pageSize = 10, sortBy } = call.request as GetAllTodosRequest

        let filteredTodos = TODOS;
        if (filter) {
            filteredTodos = filteredTodos.filter(todo => todo.title &&
                todo.title.toLowerCase().includes(filter.toLowerCase()) || 
                todo.description &&
                todo.description.toLowerCase().includes(filter.toLowerCase())
            );
        }

        if (sortBy && isSortableKey(sortBy)) {
            filteredTodos.sort((a, b) => {
                const aValue = a[sortBy];
                const bValue = b[sortBy];
                if (aValue != null && bValue != null) {
                    if (aValue < bValue) return ascending ? -1 : 1;
                    if (aValue > bValue) return ascending ? 1 : -1;
                }
                return 0;
            });
        }
        const startIndex = (page - 1) * pageSize;
        const paginatedTodos = filteredTodos.slice(startIndex, startIndex + pageSize);
        callback(null, {
            todos: paginatedTodos,
            totalCount: filteredTodos.length,
            page,
            pageSize
        });

    },
    GetTodoById: (call, callback) => {
        const { id } = call.request;
        const todo = TODOS.find(t => t.id === id);
        if (todo) {
            callback(null, { todo });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                message: 'Todo not found'
            });
        }
    },
    UpdateTodo: (call, callback) => {
        const { id, title, description, priority } = call.request;
        const todoIndex = TODOS.findIndex(t => t.id === id);
        if (todoIndex !== -1) {
            const updatedTodo = { ...TODOS[todoIndex] };
            if (title !== undefined) updatedTodo.title = title;
            if (description !== undefined) updatedTodo.description = description;
            if (priority !== undefined) updatedTodo.priority = priority;
            updatedTodo.updatedAt = { seconds: Date.now() / 1000 };
            if (updatedTodo.version) updatedTodo.version++;
            else updatedTodo.version = 1;
            TODOS[todoIndex] = updatedTodo;
            callback(null, { todo: updatedTodo, success: true });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                message: 'Todo not found'
            });
        }

    },
    DeleteTodo: (call, callback) => {
        const { id } = call.request;
        const initialLength = TODOS.length;
        TODOS = TODOS.filter(t => t.id !== id);
        const success = TODOS.length < initialLength;
        callback(null, { success });
    },
    MarkTodoDone: (call, callback) => {
        const { id, done } = call.request;
        const todoIndex = TODOS.findIndex(t => t.id === id);
        const todoToUpdate = TODOS[todoIndex];
        if (todoToUpdate) {
            todoToUpdate.done = done;
            todoToUpdate.updatedAt = { seconds: Date.now() / 1000 };
            todoToUpdate.version = (todoToUpdate.version ?? 0) + 1;
            callback(null, { success: true, updatedTodo: todoToUpdate });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                message: 'Todo not found'
            });
        }
    }
    
}

const server = new grpc.Server();

server.addService(todoProto.todo.TodoService.service , handler);
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('Server started at Port 50051');
});