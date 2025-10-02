import { Repository } from '@/core/core.repository';
import { lookupStatusTypes, LookupStatusType, NewLookupStatusType } from '@/db/schema/lookup_status_types/table';
import { eq } from 'drizzle-orm';
import db from '@/db';

/**
 * Repository untuk mengelola lookup_status_types
 * Menyediakan operasi CRUD dasar untuk tipe status
 * Menggunakan Repository base class untuk operasi umum
 */
export class LookupStatusTypesRepository extends Repository<typeof lookupStatusTypes> {
  constructor() {
    super(lookupStatusTypes);
  }

  /**
   * Mendapatkan semua tipe status
   * @returns Promise array tipe status
   */
  async findAll(): Promise<LookupStatusType[]> {
    return await this.SELECT.All();
  }

  /**
   * Mendapatkan tipe status berdasarkan ID
   * @param id - ID tipe status
   * @returns Promise tipe status atau null jika tidak ditemukan
   */
  async findById(id: string): Promise<LookupStatusType | null> {
    return await this.SELECT.ById(id);
  }

  /**
   * Mendapatkan tipe status berdasarkan nama
   * @param name - Nama tipe status
   * @returns Promise tipe status atau null jika tidak ditemukan
   */
  async findByName(name: string): Promise<LookupStatusType | null> {
    const result = await db
      .select()
      .from(lookupStatusTypes)
      .where(eq(lookupStatusTypes.name, name));
    
    return result[0] || null;
  }

  /**
   * Membuat tipe status baru
   * @param data - Data tipe status baru
   * @returns Promise tipe status yang dibuat
   */
  async create(data: NewLookupStatusType): Promise<LookupStatusType> {
    return await this.INSERT.One(data);
  }

  /**
   * Memperbarui tipe status
   * @param id - ID tipe status
   * @param data - Data tipe status yang diperbarui
   * @returns Promise tipe status yang diperbarui
   */
  async update(id: string, data: Partial<NewLookupStatusType>): Promise<LookupStatusType | null> {
    const updateData = { ...data };
    if (!updateData.updatedAt) {
      updateData.updatedAt = new Date();
    }
    return await this.UPDATE.One(id, updateData);
  }

  /**
   * Menghapus tipe status
   * @param id - ID tipe status
   * @returns Promise tipe status yang dihapus atau null jika gagal
   */
  async delete(id: string): Promise<LookupStatusType | null> {
    const item = await this.findById(id);
    if (!item) return null;
    
    const success = await this.DELETE.One(id);
    return success ? item : null;
  }
}

export default LookupStatusTypesRepository;