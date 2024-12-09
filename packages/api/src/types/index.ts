export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
} 