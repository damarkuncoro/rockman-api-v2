import { insertUserMembershipSchema } from "./data_validation";

export const postUserMembershipSchema = insertUserMembershipSchema.pick({
  membershipId: true,
  startDate: true,
  endDate: true,
});