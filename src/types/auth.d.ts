export interface AuthCredentials {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    access_token: string;
    // refresh_token: string;
    token_type: string
  }
  
  export interface AuthError extends Error {
    statusCode?: number;
    code?: string;
  }
