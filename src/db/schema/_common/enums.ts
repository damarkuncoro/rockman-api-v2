import { pgEnum } from "drizzle-orm/pg-core";

export const ticketStatusEnum = pgEnum('ticket_status', ['Open', 'In Progress', 'Resolved', 'Closed']);
export const ticketPriorityEnum = pgEnum('ticket_priority', ['Low', 'Medium', 'High', 'Urgent']);
export const transactionStatusEnum = pgEnum('transaction_status', ['Pending', 'Completed', 'Failed', 'Refunded']);
export const subscriptionStatusEnum = pgEnum('subscription_status', ['Active', 'Inactive', 'Cancelled']);
export const invoiceStatusEnum = pgEnum('invoice_status', ['Draft', 'Sent', 'Paid', 'Void']);
export const paymentStatusEnum = pgEnum('payment_status', ['Pending', 'Succeeded', 'Failed']);
export const leaveRequestStatusEnum = pgEnum('leave_request_status', ['Pending', 'Approved', 'Rejected']);
export const creditNoteStatusEnum = pgEnum('credit_note_status', ['Draft', 'Issued', 'Applied', 'Voided']);
export const discountTypeEnum = pgEnum('discount_type', ['percentage', 'fixed_amount']);
export const discountDurationEnum = pgEnum('discount_duration', ['once', 'repeating', 'forever']);
export const leaveTypeEnum = pgEnum('leave_type', ['annual', 'sick', 'maternity', 'unpaid']);
export const performanceRatingEnum = pgEnum('performance_rating', ['Excellent', 'Good', 'Average', 'Poor']);
export const customerStatusEnum = pgEnum('customer_status', ['Active', 'Inactive', 'Suspended']);
export const genderEnum = pgEnum('gender', ['male', 'female', 'other']);
export const maritalStatusEnum = pgEnum('marital_status', ['single', 'married', 'divorced', 'widowed']);
export const payrollStatusEnum = pgEnum('payroll_status', ['Draft', 'Approved', 'Paid', 'Cancelled']);