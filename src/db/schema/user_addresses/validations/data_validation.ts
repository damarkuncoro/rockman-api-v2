/**
 * Validasi data untuk user addresses
 * 
 * Domain: User Management
 * Responsibility: Validasi business logic untuk user addresses
 */

/**
 * Validasi apakah user dapat memiliki alamat default
 */
type Address = { isDefault: boolean };
export function validateDefaultAddress(addresses: Address[]): boolean {
  const defaultAddresses = addresses.filter(addr => addr.isDefault);
  return defaultAddresses.length <= 1;
}


/**
 * Validasi kode pos Indonesia
 */
export function validateIndonesianPostalCode(postalCode: string): boolean {
  // Kode pos Indonesia: 5 digit
  const postalRegex = /^[0-9]{5}$/;
  return postalRegex.test(postalCode);
}

/**
 * Validasi alamat lengkap
 */
export function validateCompleteAddress(addressLine1: string, city: string, province: string): boolean {
  return addressLine1.length >= 10 && city.length >= 2 && province.length >= 2;
}