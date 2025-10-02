import { Service } from '@/core/core.service';
import { lookupStatusTypes, LookupStatusType } from '@/db/schema/lookup_status_types/table';
import { LookupStatusTypesRepository } from '@/v2/repositories/database/lookup_status_types/lookup_status_types.repository';

/**
 * Service untuk mengelola lookup_status_types
 * Menggunakan core.service.ts untuk implementasi dasar
 * Mengikuti prinsip SOLID dan DRY
 */
class LookupStatusTypesService extends Service<typeof lookupStatusTypes> {
  constructor() {
    super(LookupStatusTypesRepository, lookupStatusTypes, { enableLogging: false });
  }

  /**
   * Mendapatkan tipe status berdasarkan nama
   * @param name - Nama tipe status
   * @returns Promise tipe status atau null jika tidak ditemukan
   */
  async getByName(name: string): Promise<LookupStatusType | null> {
    return (this.repository as LookupStatusTypesRepository).findByName(name);
  }
}

export const lookupStatusTypesService = new LookupStatusTypesService();

// Menambahkan method khusus ke objek service
// Mendefinisikan interface untuk GET method yang memperluas struktur GET yang sudah ada
interface LookupStatusTypesGET {
  All: () => Promise<LookupStatusType[]>;
  ById: (id: number | string) => Promise<LookupStatusType | null>;
  ByUserId: (userId: number | string) => Promise<LookupStatusType[]>;
  Count: (filter?: Partial<LookupStatusType>) => Promise<number>;
  ByName: (name: string) => Promise<LookupStatusType | null>;
}

// Membuat objek GET baru dengan semua properti yang dibutuhkan
const typedGET: LookupStatusTypesGET = {
  ...lookupStatusTypesService.GET,
  ByName: async (name: string): Promise<LookupStatusType | null> => {
    return await lookupStatusTypesService.getByName(name);
  },
  ByUserId: async (userId: number | string): Promise<LookupStatusType[]> => {
    return await lookupStatusTypesService.GET.ByUserId(userId);
  }
};

// Mengganti objek GET dengan objek yang sudah memiliki tipe yang benar
lookupStatusTypesService.GET = typedGET;

export default lookupStatusTypesService;