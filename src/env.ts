/* eslint-disable no-console */
import { createEnv } from "@t3-oss/env-nextjs";
import type { ZodError } from "zod";

export const env = createEnv({
  isServer: typeof window === "undefined",
  emptyStringAsUndefined: true,
  server: {},
  client: {},
  experimental__runtimeEnv: {},
  onValidationError: (error: ZodError) => {
    console.error("❌ Invalid environment variables:", error.flatten().fieldErrors);
    throw new Error("Invalid environment variables");
  },
  onInvalidAccess: (variable: string) => {
    throw new Error(`❌ Attempted to access a server-side environment variable on the client (${variable})`);
  },
});
