import { IItem } from "./Item";

interface IApiResponseById {
  data: IItem;
  support: {
    text: string;
    url: string;
  };
}

export type { IApiResponseById };
