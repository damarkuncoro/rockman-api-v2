import { insertTicketSchema } from "./data_validation";

export const postTicketSchema = insertTicketSchema.pick({
  title: true,
  description: true,
  priority: true,
});