/**
 * Validasi format nomor telepon Indonesia
 * Mendukung format: +62xxx, 08xxx, atau 62xxx
 * 
 * @param phoneNumber - Nomor telepon yang akan divalidasi
 * @returns boolean - true jika format valid
 */
export function validateIndonesianPhoneNumber(phoneNumber: string): boolean {
  // Format: +62xxx, 08xxx, atau 62xxx
  // Minimal 10 digit, maksimal 15 digit setelah kode negara
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,12}$/;
  return phoneRegex.test(phoneNumber);
}