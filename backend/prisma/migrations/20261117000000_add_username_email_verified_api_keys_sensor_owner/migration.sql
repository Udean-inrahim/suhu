ALTER TABLE "users"
ADD COLUMN IF NOT EXISTS "email_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS "username" TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS "users_username_key" ON "users"("username");

ALTER TABLE "sensors"
ADD COLUMN IF NOT EXISTS "user_id" INTEGER,
ADD COLUMN IF NOT EXISTS "api_key_hash" TEXT;

UPDATE "sensors"
SET "user_id" = (SELECT "id" FROM "users" WHERE "role" = 'ADMIN' ORDER BY "id" LIMIT 1)
WHERE "user_id" IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS "sensors_api_key_hash_key" ON "sensors"("api_key_hash");
CREATE INDEX IF NOT EXISTS "sensors_user_id_idx" ON "sensors"("user_id");

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM "sensors" WHERE "user_id" IS NULL
  ) THEN
    ALTER TABLE "sensors" ALTER COLUMN "user_id" SET NOT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'sensors_user_id_fkey'
  ) THEN
    ALTER TABLE "sensors"
    ADD CONSTRAINT "sensors_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;
