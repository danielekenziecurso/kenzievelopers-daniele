class AppError extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode: number = 400) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  class NotFound extends AppError {
    constructor(message: string) {
      super(message, 404);
    }
  }
  
  class Conflict extends AppError {
    constructor(message: string) {
      super(message, 409);
    }
  }
  
  export { AppError, NotFound, Conflict };
  