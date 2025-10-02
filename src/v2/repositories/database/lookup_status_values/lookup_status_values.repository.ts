import { Repository } from '@/core/core.repository';
import { lookupStatusValues, LookupStatusValue, NewLookupStatusValue } from '@/db/schema/lookup_status_values/table';
import { and, eq } from 'drizzle-orm';
import db from '@/db';

/**
 * Repository untuk mengelola lookup_status_values
 * Menyediakan operasi CRUD dasar untuk nilai status
 * Menggunakan Repository base class untuk operasi umum
 */
export class LookupStatusValuesRepository extends Repository<typeof lookupStatusValues> {
  constructor() {
    super(lookupStatusValues);
  }

  /**
   * Mendapatkan semua nilai status
   * @returns Promise array nilai status
   */
  async findAll(): Promise<LookupStatusValue[]> {
    return await this.SELECT.All();
  }

  /**
   * Mendapatkan nilai status berdasarkan ID
   * @param id - ID nilai status
   * @returns Promise nilai status atau null jika tidak ditemukan
   */
  async findById(id: string): Promise<LookupStatusValue | null> {
    return await this.SELECT.ById(id);
  }

  /**
   * Mendapatkan nilai status berdasarkan tipe ID
   * @param typeId - ID tipe status
   * @returns Promise array nilai status
   */
  async findByTypeId(typeId: string): Promise<LookupStatusValue[]> {
    return await db
      .select()
      .from(lookupStatusValues)
      .where(eq(lookupStatusValues.typeId, typeId))
      .orderBy(lookupStatusValues.sortOrder);
  }

  /**
   * Mendapatkan nilai status berdasarkan tipe ID dan nilai
   * @param typeId - ID tipe status
   * @param value - Nilai status
   * @returns Promise nilai status atau null jika tidak ditemukan
   */
  async findByTypeIdAndValue(typeId: string, value: string): Promise<LookupStatusValue | null> {
    const result = await db
      .select()
      .from(lookupStatusValues)
      .where(
        and(
          eq(lookupStatusValues.typeId, typeId),
          eq(lookupStatusValues.value, value)
        )
      );
    
    return result[0] || null;
  }

  /**
   * Mendapatkan nilai default untuk tipe tertentu
   * @param typeId - ID tipe status
   * @returns Promise nilai status default atau null jika tidak ditemukan
   */
  async findDefaultByTypeId(typeId: string): Promise<LookupStatusValue | null> {
    const result = await db
      .select()
      .from(lookupStatusValues)
      .where(
        and(
          eq(lookupStatusValues.typeId, typeId),
          eq(lookupStatusValues.isDefault, true)
        )
      );
    
    return result[0] || null;
  }

  /**
   * Membuat nilai status baru
   * @param data - Data nilai status baru
   * @returns Promise nilai status yang dibuat
   */
  async create(data: NewLookupStatusValue): Promise<LookupStatusValue> {
    return await this.INSERT.One(data);
  }

  /**
   * Memperbarui nilai status
   * @param id - ID nilai status
   * @param data - Data nilai status yang diperbarui
   * @returns Promise nilai status yang diperbarui
   */
  async update(id: string, data: Partial<NewLookupStatusValue>): Promise<LookupStatusValue | null> {
    const updateData = { ...data };
    if (!updateData.updatedAt) {
      updateData.updatedAt = new Date();
    }
    return await this.UPDATE.One(id, updateData);
  }

  /**
   * Menghapus nilai status
   * @param id - ID nilai status
   * @returns Promise nilai status yang dihapus atau null jika gagal
   */
  async delete(id: string): Promise<LookupStatusValue | null> {
    const item = await this.findById(id);
    if (!item) return null;
    
    const success = await this.DELETE.One(id);
    return success ? item : null;
  }
}

export default LookupStatusValuesRepository;