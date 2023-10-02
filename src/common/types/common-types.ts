export type SearchParams = {
  pageIndex: number;
  pageSize: number;
  keyword: string;
  sorting: string;
};

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export type VoidFunc = () => void;
export type QueryError = Error | undefined;
export type Nullable<T> = T | null;
export type NullableValues<T> = {
  [P in keyof T]: T[P] | null;
};
export type ModalHandler = {
  readonly open: () => void;
  readonly close: () => void;
  readonly toggle: () => void;
};

export type UnknownObject<K extends string | number | symbol = string> = Record<K, unknown>;
export type Last<T extends readonly unknown[]> = T extends readonly [...infer _, infer R] ? R : never;
export type QueryKey<K extends SearchParams = SearchParams> = readonly [...strings: readonly string[], obj: K];

export type Id = {
  id: string;
};

export type LanguageResponse = {
  culture: string;
  translation: translation;
};

export type translation = {
  [key: string]: string;
};
