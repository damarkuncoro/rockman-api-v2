import { insertTicketReplySchema } from "./data_validation";

export const postTicketReplySchema = insertTicketReplySchema.pick({
  message: true,
});