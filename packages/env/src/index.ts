import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    API_PORT: z.coerce.number(),
    DATABASE_URI: z.string().url(),
    CLIENT_HOST: z.string().url(), // useful for CORS
  },
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_API_HOST: z.string().url(),
    NEXT_PUBLIC_API_ENDPOINT: z.string(),
  },
  runtimeEnv: {
    ...process.env,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
});
