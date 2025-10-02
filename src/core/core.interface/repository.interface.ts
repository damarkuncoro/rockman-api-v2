import { PgTable } from 'drizzle-orm/pg-core';
import { TFindPayload, TFindResponse } from './types';

export interface IRepository<TTable extends PgTable> {
  find: (payload: TFindPayload) => Promise<TFindResponse<TTable['$inferSelect']>>;
  SELECT: {
    All: () => Promise<Array<TTable['$inferSelect']>>;
    ById: (id: number | string) => Promise<TTable['$inferSelect'] | null>;
    ByUserId: (userId: number | string) => Promise<Array<TTable['$inferSelect']>>;
    Count: (filter?: Partial<TTable['$inferSelect']>) => Promise<number>;
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