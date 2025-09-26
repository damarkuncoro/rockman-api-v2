import { products } from ".";

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;