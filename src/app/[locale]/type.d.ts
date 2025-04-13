export type ParamsIdT<T extends string = "id"> = {
  params: Record<T, string>;
};
