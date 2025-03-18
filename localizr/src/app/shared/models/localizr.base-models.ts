export interface ILocalizrResponse<T> {
  isSuccess: boolean;
  errorMessage?: string;
  result?: T;
}
export interface ILocalizrListResponse<T> {
  isSuccess: boolean;
  errorMessage?: string;
  data?: Array<T>;
  page: number;
  pageSize: number;
  totalPages: number;
}
