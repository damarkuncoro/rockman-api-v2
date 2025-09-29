import { PgTable } from 'drizzle-orm/pg-core';
import { TFindPayload, TFindResponse } from './types';

export interface IService<TTable extends PgTable> {
  find: (payload: TFindPayload) => Promise<TFindResponse<TTable['$inferSelect']>>;
  FIND: {
    All: () => Promise<Array<TTable['$inferSelect']>>;
    ById: (id: number | string) => Promise<TTable['$inferSelect'] | null>;
  };
  GET: {
    All: () => Promise<Array<TTable['$inferSelect']>>;
    ById: (id: number | string) => Promise<TTable['$inferSelect'] | null>;
  };
  POST: {
    Create: <T extends TTable['$inferInsert']>(
      data: T
    ) => Promise<TTable['$inferSelect']>;
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