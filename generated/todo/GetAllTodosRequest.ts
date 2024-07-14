// Original file: a.proto


export interface GetAllTodosRequest {
  'page'?: (number);
  'pageSize'?: (number);
  'filter'?: (string);
  'sortBy'?: (string);
  'ascending'?: (boolean);
}

export interface GetAllTodosRequest__Output {
  'page': (number);
  'pageSize': (number);
  'filter': (string);
  'sortBy': (string);
  'ascending': (boolean);
}
