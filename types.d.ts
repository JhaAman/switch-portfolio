export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};

export type CustomMetaType = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  date?: string;
};
