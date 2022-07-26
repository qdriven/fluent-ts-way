export * from "../__generated__";

export type Unwrap<T> = T extends Promise<infer U> ? U : never;
