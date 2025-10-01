import { InferInsertModel, InferSelectModel, eq } from "drizzle-orm"
import { PgTable } from "drizzle-orm/pg-core"
import db from "@/db"
import { IRepository, TFindPayload, TFindResponse } from "./core.interface"

export class Repository<TTable extends PgTable> implements IRepository<TTable> {

  private table: TTable

  constructor(table: TTable) {
    this.table = table
  }

  async find(
    payload: TFindPayload,
  ): Promise<TFindResponse<InferSelectModel<TTable>>> {
    const { page, pageSize } = payload;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await db.select().from(this.table as any);
    const total = data.length;
    const totalPage = Math.ceil(total / pageSize);
    return {
      data: data as InferSelectModel<TTable>[],
      page,
      pageSize,
      total,
      totalPage,
    };
  }

  SELECT = {

    All: async (): Promise<InferSelectModel<TTable>[]> => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await db.select().from(this.table as any)
      return result as InferSelectModel<TTable>[]
    },

    ById: async (id: number | string): Promise<InferSelectModel<TTable> | null> => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rows = await db.select().from(this.table as any).where(eq((this.table as any).id, id))
        return rows.length > 0 ? (rows[0] as InferSelectModel<TTable>) : null
      } catch (error: unknown) {
        const dbError = error as { code?: string; message?: string }

        // Jika error terkait UUID yang tidak valid
        if (dbError.code === '22P02' || dbError.message?.includes('invalid input syntax for type uuid')) {
          console.error(`Invalid UUID format: ${id}`)
          return null
        }
        
        if (dbError.code === '22003') {
          throw new Error(`ID value ${id} is out of range for PostgreSQL integer type`)
        }
        const errorMessage = dbError.message || 'Unknown database error'
        throw new Error(`Failed query: ${errorMessage}`)
      }
    }
  }


  INSERT = {
    One: async (values: InferInsertModel<TTable>): Promise<InferSelectModel<TTable>> => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rows = await db.insert(this.table as any).values(values).returning() as any[]

        if (!rows || rows.length === 0) {
          throw new Error('Insert operation failed: No data returned')
        }

        return rows[0] as InferSelectModel<TTable>
      } catch (error) {
        console.error('INSERT.One error:', error)
        throw error
      }
    }
  }

  UPDATE = {
    One: async (id: number | string, values: Partial<InferInsertModel<TTable>>): Promise<InferSelectModel<TTable> | null> => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rows = await db.update(this.table as any).set(values).where(eq((this.table as any).id, id)).returning() as any[]
      return rows.length > 0 ? rows[0] as InferSelectModel<TTable> : null
    }
  }


  DELETE = {
    
    One: async (id: number | string): Promise<boolean> => {
  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await db.delete(this.table as any).where(eq((this.table as any).id, id)).returning() as any[]
      return result.length > 0
    }
  }
}
