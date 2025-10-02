-- Membuat tabel untuk tipe status
CREATE TABLE "lookup_status_types" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "name" varchar(100) NOT NULL,
  "description" text,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "lookup_status_types_name_unique" UNIQUE("name")
);
--> statement-breakpoint

-- Membuat tabel untuk nilai status
CREATE TABLE "lookup_status_values" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "type_id" uuid NOT NULL,
  "value" varchar(100) NOT NULL,
  "label" varchar(100) NOT NULL,
  "description" text,
  "sort_order" integer DEFAULT 0 NOT NULL,
  "is_default" boolean DEFAULT false NOT NULL,
  "is_active" boolean DEFAULT true NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "lookup_status_values_type_id_value_unique" UNIQUE("type_id", "value")
);
--> statement-breakpoint

-- Menambahkan foreign key constraint
ALTER TABLE "lookup_status_values" ADD CONSTRAINT "lookup_status_values_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "lookup_status_types"("id") ON DELETE CASCADE;
--> statement-breakpoint

-- Menambahkan indeks untuk mempercepat pencarian
CREATE INDEX "lookup_status_values_type_id_idx" ON "lookup_status_values" USING btree ("type_id");
CREATE INDEX "lookup_status_values_value_idx" ON "lookup_status_values" USING btree ("value");
--> statement-breakpoint

-- Contoh data awal untuk tipe status (berdasarkan ENUM yang ada)
INSERT INTO "lookup_status_types" ("name", "description") VALUES
('ticket_status', 'Status untuk tiket'),
('payment_status', 'Status untuk pembayaran'),
('invoice_status', 'Status untuk faktur'),
('transaction_status', 'Status untuk transaksi'),
('subscription_status', 'Status untuk langganan'),
('customer_status', 'Status untuk pelanggan');
--> statement-breakpoint

-- Contoh data awal untuk nilai status tiket
INSERT INTO "lookup_status_values" ("type_id", "value", "label", "sort_order", "is_default")
SELECT 
  (SELECT id FROM lookup_status_types WHERE name = 'ticket_status'),
  value,
  value,
  row_number() OVER (),
  CASE WHEN value = 'Open' THEN true ELSE false END
FROM unnest(ARRAY['Open', 'In Progress', 'Resolved', 'Closed']) as value;
--> statement-breakpoint

-- Contoh data awal untuk nilai status pembayaran
INSERT INTO "lookup_status_values" ("type_id", "value", "label", "sort_order", "is_default")
SELECT 
  (SELECT id FROM lookup_status_types WHERE name = 'payment_status'),
  value,
  value,
  row_number() OVER (),
  CASE WHEN value = 'Pending' THEN true ELSE false END
FROM unnest(ARRAY['Pending', 'Succeeded', 'Failed']) as value;
--> statement-breakpoint

-- Contoh data awal untuk nilai status faktur
INSERT INTO "lookup_status_values" ("type_id", "value", "label", "sort_order", "is_default")
SELECT 
  (SELECT id FROM lookup_status_types WHERE name = 'invoice_status'),
  value,
  value,
  row_number() OVER (),
  CASE WHEN value = 'Draft' THEN true ELSE false END
FROM unnest(ARRAY['Draft', 'Sent', 'Paid', 'Void']) as value;
--> statement-breakpoint

-- Contoh data awal untuk nilai status transaksi
INSERT INTO "lookup_status_values" ("type_id", "value", "label", "sort_order", "is_default")
SELECT 
  (SELECT id FROM lookup_status_types WHERE name = 'transaction_status'),
  value,
  value,
  row_number() OVER (),
  CASE WHEN value = 'Pending' THEN true ELSE false END
FROM unnest(ARRAY['Pending', 'Completed', 'Failed', 'Refunded']) as value;
--> statement-breakpoint

-- Contoh data awal untuk nilai status langganan
INSERT INTO "lookup_status_values" ("type_id", "value", "label", "sort_order", "is_default")
SELECT 
  (SELECT id FROM lookup_status_types WHERE name = 'subscription_status'),
  value,
  value,
  row_number() OVER (),
  CASE WHEN value = 'Active' THEN true ELSE false END
FROM unnest(ARRAY['Active', 'Inactive', 'Cancelled']) as value;
--> statement-breakpoint

-- Contoh data awal untuk nilai status pelanggan
INSERT INTO "lookup_status_values" ("type_id", "value", "label", "sort_order", "is_default")
SELECT 
  (SELECT id FROM lookup_status_types WHERE name = 'customer_status'),
  value,
  value,
  row_number() OVER (),
  CASE WHEN value = 'Active' THEN true ELSE false END
FROM unnest(ARRAY['Active', 'Inactive', 'Suspended']) as value;