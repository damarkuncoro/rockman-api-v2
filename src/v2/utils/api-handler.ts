import { createGetHandler } from './API/all'
import { createGetByIdHandler } from './API/byID'
import { createGetByParamsHandler } from './API/byParams'





export const API = {
  GET: {
    All: createGetHandler,
    ById: createGetByIdHandler,
    ByParams: createGetByParamsHandler,
  }
}

