import { IItem } from "./Item";

interface IApiResponse {
  data: [IItem];
  page: number;
  per_page: number;
  support: {
    text: string;
    url: string;
  };
  total: number;
  total_pages: number;
}

export type { IApiResponse };
