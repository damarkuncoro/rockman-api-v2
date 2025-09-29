export type TFindPayload = {
  page: number;
  pageSize: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filters?: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sort?: Record<string, any>;
};

export type TFindResponse<T> = {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPage: number;
};
export type AppRouteHandlerFn<TParams = unknown> = (
  req: Request,
  ctx: { params: TParams },
) => unknown | Promise<unknown>;

export type AppRouteHandlerRoutes =
  | '/users'
  | '/users/[id]'
  | '/customers'
  | '/customers/[id]';

export type RouteContext<TRoute extends AppRouteHandlerRoutes> =
  TRoute extends `/users/${string}`
    ? { params: { id: string } }
    : TRoute extends `/customers/${string}`
      ? { params: { id:string } }
      : never;