export interface ILocalizrResponse<T> {
  isSuccess: boolean;
  errorMessage?: string;
  data?: T;
}
export interface ILocalizrListResponse<T> {
  isSuccess: boolean;
  errorMessage?: string;
  data?: Array<T>;
  page: number;
  pageSize: number;
  totalPages: number;
}
