export type ApiResponse<T> = {
  success: boolean;
  data: T;
  error: ApiErrorBody | null;
};

export type ApiErrorBody = {
  code: string;
  type: string;
  title: string;
  status: number;
  instance: string | null;
};

export class ApiError extends Error {
  readonly code?: string;
  readonly instance?: string | null;

  constructor(
    message: string,
    readonly status: number,
    error?: Partial<ApiErrorBody>,
  ) {
    super(message);
    this.name = "ApiError";
    this.code = error?.code;
    this.instance = error?.instance;
  }
}
