export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  point: number;
  level: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterResponse {
  message: string;
  data: User;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

export interface CheckAuthResponse {
  message: string;
  data: User;
}
