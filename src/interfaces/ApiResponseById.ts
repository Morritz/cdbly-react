import { IItem } from "./Item";

type IApiResponseById =
  | {
      data: IItem;
      support: {
        text: string;
        url: string;
      };
    }
  | {};

export type { IApiResponseById };
