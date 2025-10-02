import { Service } from '@/core/core.service';
import { lookupStatusValues, LookupStatusValue } from '@/db/schema/lookup_status_values/table';
import { LookupStatusValuesRepository } from '@/v2/repositories/database/lookup_status_values/lookup_status_values.repository';

/**
 * Service untuk mengelola lookup_status_values
 * Menggunakan core.service.ts untuk implementasi dasar
 * Mengikuti prinsip SOLID dan DRY
 */
class LookupStatusValuesService extends Service<typeof lookupStatusValues> {
  constructor() {
    super(LookupStatusValuesRepository, lookupStatusValues, { enableLogging: false });
  }

  /**
   * Mendapatkan nilai status berdasarkan tipe ID
   * @param typeId - ID tipe status
   * @returns Promise array nilai status
   */
  async getByTypeId(typeId: string): Promise<LookupStatusValue[]> {
    return (this.repository as LookupStatusValuesRepository).findByTypeId(typeId);
  }

  /**
   * Mendapatkan nilai status berdasarkan tipe ID dan nilai
   * @param typeId - ID tipe status
   * @param value - Nilai status
   * @returns Promise nilai status atau null jika tidak ditemukan
   */
  async getByTypeIdAndValue(typeId: string, value: string): Promise<LookupStatusValue | null> {
    return (this.repository as LookupStatusValuesRepository).findByTypeIdAndValue(typeId, value);
  }

  /**
   * Mendapatkan nilai default untuk tipe tertentu
   * @param typeId - ID tipe status
   * @returns Promise nilai status default atau null jika tidak ditemukan
   */
  async getDefaultByTypeId(typeId: string): Promise<LookupStatusValue | null> {
    return (this.repository as LookupStatusValuesRepository).findDefaultByTypeId(typeId);
  }
}

export const lookupStatusValuesService = new LookupStatusValuesService();

// Mendefinisikan interface untuk GET method yang mencakup method bawaan dan custom
interface LookupStatusValuesGET {
  All: () => Promise<LookupStatusValue[]>;
  ById: (id: number | string) => Promise<LookupStatusValue | null>;
  ByUserId: (userId: number | string) => Promise<LookupStatusValue[]>;
  Count: () => Promise<number>;
  ByTypeId: (typeId: string) => Promise<LookupStatusValue[]>;
  ByTypeIdAndValue: (typeId: string, value: string) => Promise<LookupStatusValue | null>;
  DefaultByTypeId: (typeId: string) => Promise<LookupStatusValue | null>;
}

// Membuat objek GET dengan type yang benar
const typedGET: LookupStatusValuesGET = {
  ...lookupStatusValuesService.GET,
  ByUserId: async (userId: number | string): Promise<LookupStatusValue[]> => {
    return await lookupStatusValuesService.GET.ByUserId(userId);
  },
  ByTypeId: async (typeId: string): Promise<LookupStatusValue[]> => {
    return await lookupStatusValuesService.getByTypeId(typeId);
  },
  ByTypeIdAndValue: async (typeId: string, value: string): Promise<LookupStatusValue | null> => {
    return await lookupStatusValuesService.getByTypeIdAndValue(typeId, value);
  },
  DefaultByTypeId: async (typeId: string): Promise<LookupStatusValue | null> => {
    return await lookupStatusValuesService.getDefaultByTypeId(typeId);
  }
};

// Mengganti GET dengan objek yang sudah ditype dengan benar
lookupStatusValuesService.GET = typedGET;

// DefaultByTypeId sudah ditambahkan ke typedGET di atas

export default lookupStatusValuesService;