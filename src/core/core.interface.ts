import { PgTable } from 'drizzle-orm/pg-core';

export interface IServiceRegistry {
  [key: string]: unknown;
}

export interface IRepository<TTable extends PgTable> {
  find: (payload: TFindPayload) => Promise<TFindResponse<TTable['$inferSelect']>>;
  SELECT: {
    All: () => Promise<Array<TTable['$inferSelect']>>;
    ById: (id: number | string) => Promise<TTable['$inferSelect'] | null>;
  };
  INSERT: {
    One: (data: TTable['$inferInsert']) => Promise<TTable['$inferSelect']>;
  };
  UPDATE: {
    One: (id: number | string, data: Partial<TTable['$inferInsert']>) => Promise<TTable['$inferSelect'] | null>;
  };
  DELETE: {
    One: (id: number | string) => Promise<boolean>;
  };
}

export interface IService<TTable extends PgTable> {
  find: (payload: TFindPayload) => Promise<TFindResponse<TTable['$inferSelect']>>;
  GET: {
    All: () => Promise<Array<TTable['$inferSelect']>>;
    ById: (id: number | string) => Promise<TTable['$inferSelect'] | null>;
  };
  POST: {
    Create: (data: TTable['$inferInsert']) => Promise<TTable['$inferSelect']>;
  };
  PUT: {
    Update: (id: number | string, data: Partial<TTable['$inferInsert']>) => Promise<TTable['$inferSelect'] | null>;
  };
  DELETE: {
    Remove: (id: number | string) => Promise<boolean>;
  };
}

export interface IServiceConfig {
  enableLogging?: boolean;
  enableValidation?: boolean;
  enableCaching?: boolean;
}
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