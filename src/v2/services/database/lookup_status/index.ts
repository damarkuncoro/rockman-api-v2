import { lookupStatusTypesService } from '../lookup_status_types';
import { lookupStatusValuesService } from '../lookup_status_values';
import { LookupStatusValue } from '@/db/schema/lookup_status_values/table';
import { LookupStatusType } from '@/db/schema/lookup_status_types/table';

// Interface untuk tipe data GET pada lookupStatusTypesService
interface LookupStatusTypesGET {
  All: typeof lookupStatusTypesService.GET.All;
  ById: typeof lookupStatusTypesService.GET.ById;
  Count: typeof lookupStatusTypesService.GET.Count;
  ByName: (name: string) => Promise<LookupStatusType | null>;
}

// Interface untuk tipe data GET pada lookupStatusValuesService
interface LookupStatusValuesGET {
  All: typeof lookupStatusValuesService.GET.All;
  ById: typeof lookupStatusValuesService.GET.ById;
  Count: typeof lookupStatusValuesService.GET.Count;
  ByTypeId: (typeId: string) => Promise<LookupStatusValue[]>;
  ByTypeIdAndValue: (typeId: string, value: string) => Promise<LookupStatusValue | null>;
  DefaultByTypeId: (typeId: string) => Promise<LookupStatusValue | null>;
}

// Membuat objek types dengan tipe yang jelas
const typesWithTypedGET = {
  ...lookupStatusTypesService,
  GET: {
    ...lookupStatusTypesService.GET,
    ByName: lookupStatusTypesService.getByName.bind(lookupStatusTypesService)
  } as LookupStatusTypesGET
};

// Membuat objek values dengan tipe yang jelas
const valuesWithTypedGET = {
  ...lookupStatusValuesService,
  GET: {
    ...lookupStatusValuesService.GET,
    ByTypeId: lookupStatusValuesService.getByTypeId.bind(lookupStatusValuesService),
    ByTypeIdAndValue: lookupStatusValuesService.getByTypeIdAndValue.bind(lookupStatusValuesService),
    DefaultByTypeId: lookupStatusValuesService.getDefaultByTypeId.bind(lookupStatusValuesService)
  } as LookupStatusValuesGET
};

export const lookupStatusService = {
  types: typesWithTypedGET,
  values: valuesWithTypedGET
};

export default lookupStatusService;