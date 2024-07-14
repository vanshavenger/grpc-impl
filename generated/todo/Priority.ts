// Original file: a.proto

export const Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
} as const;

export type Priority =
  | 'LOW'
  | 0
  | 'MEDIUM'
  | 1
  | 'HIGH'
  | 2

export type Priority__Output = typeof Priority[keyof typeof Priority]
