/**
 * Main route file untuk /api/v2/tickets
 * Mengimpor dan mengekspor semua HTTP methods dari file terpisah
 * 
 * Domain: Ticket Management
 * Responsibility: Entry point untuk semua operasi tickets API
 */

export { GET } from './GET/index';
export { POST } from './POST/index';