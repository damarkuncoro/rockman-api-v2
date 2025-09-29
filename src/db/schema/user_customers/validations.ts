import { createInsertSchema } from 'drizzle-zod';
import { userCustomers } from './table';

export const insertUserCustomerSchema = createInsertSchema(userCustomers);