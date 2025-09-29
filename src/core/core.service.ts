import { InferSelectModel, InferInsertModel } from "drizzle-orm"
import { PgTable } from "drizzle-orm/pg-core"

export class Service<TTable extends PgTable> {
  protected repository: any
  protected config: { enableLogging: boolean; enableValidation: boolean; enableCaching: boolean }

  constructor(
    repository: any,
    table: TTable,
    config: Partial<{ enableLogging: boolean; enableValidation: boolean; enableCaching: boolean }> = {}
  ) {
    this.repository = new (repository)(table)
    this.config = {
      enableLogging: false,
      enableValidation: true,
      enableCaching: false,
      ...config
    }
  }

  private log(...args: any[]) {
    if (this.config.enableLogging) console.log(...args)
  }

  async find(payload: any) {
    return this.repository.find(payload)
  }

  FIND = {
    All: async (): Promise<InferSelectModel<TTable>[]> => {
      this.log('FIND.All called')
      return this.repository.SELECT.All()
    },
    ById: async (id: number | string): Promise<InferSelectModel<TTable> | null> => {
      this.log('FIND.ById called', id)
      return this.repository.SELECT.ById(id)
    }
  }

  GET = {
    All: async (): Promise<InferSelectModel<TTable>[]> => {
      this.log('GET.All called')
      return this.repository.SELECT.All()
    },
    ById: async (id: number | string): Promise<InferSelectModel<TTable> | null> => {
      this.log('GET.ById called', id)
      return this.repository.SELECT.ById(id)
    }
  }

  POST = {
    Create: async (data: InferInsertModel<TTable>): Promise<InferSelectModel<TTable>> => {
      this.log('POST.Create called', data)
      return this.repository.INSERT.One(data)
    }
  }

  PUT = {
    Update: async (id: number | string, data: Partial<InferInsertModel<TTable>>): Promise<InferSelectModel<TTable> | null> => {
      this.log('PUT.Update called', id, data)
      return this.repository.UPDATE.One(id, data)
    }
  }

  DELETE = {
    Remove: async (id: number | string): Promise<boolean> => {
      this.log('DELETE.Remove called', id)
      return this.repository.DELETE.One(id)
    }
  }

  BULK = {
    Create: async (items: InferInsertModel<TTable>[]) =>
      Promise.all(items.map(item => this.repository.INSERT.One(item))),
    Update: async (updates: Array<{ id: number | string; data: Partial<InferInsertModel<TTable>> }>) =>
      Promise.all(updates.map(u => this.repository.UPDATE.One(u.id, u.data))),
    Remove: async (ids: (number | string)[]) => {
      const results = await Promise.all(ids.map(id => this.repository.DELETE.One(id)))
      return results.filter(Boolean).length
    }
  }
QUERY = {
  Paginate: async (options: {
    page?: number
    limit?: number
    sortBy?: keyof InferSelectModel<TTable>
    sortOrder?: 'asc' | 'desc'
  } = {}): Promise<{
    data: InferSelectModel<TTable>[]
    page: number
    limit: number
    total: number
    totalPages: number
  }> => {
    const { page = 1, limit = 10, sortBy, sortOrder = 'asc' } = options

    const allData = await this.repository.SELECT.All()
    let sortedData = allData

    if (sortBy) {
      sortedData = allData.sort((a: InferSelectModel<TTable>, b: InferSelectModel<TTable>) => {
        const aVal = a[sortBy]
        const bVal = b[sortBy]

        if (sortOrder === 'asc') return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0
      })
    }

    const offset = (page - 1) * limit
    const paginatedData = sortedData.slice(offset, offset + limit)

    return {
      data: paginatedData,
      page,
      limit,
      total: allData.length,
      totalPages: Math.ceil(allData.length / limit)
    }
  }
}



  UTILS = {
    ValidateData: async (data: Partial<InferInsertModel<TTable>>) => !!data && Object.keys(data).length > 0,
    SanitizeData: async (data: Partial<InferInsertModel<TTable>>) => {
      const sanitized = { ...data }
      Object.keys(sanitized).forEach(k => {
        if (typeof (sanitized as any)[k] === 'string') (sanitized as any)[k] = (sanitized as any)[k].trim()
      })
      return sanitized
    },
    GetConfig: () => ({ ...this.config }),
    UpdateConfig: (cfg: Partial<typeof this.config>) => (this.config = { ...this.config, ...cfg })
  }
}
