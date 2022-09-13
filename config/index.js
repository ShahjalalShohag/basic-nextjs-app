const isDevEnv = process.env.NODE_ENV !== "production";

export const server = isDevEnv
  ? "http://localhost:3000"
  : "https://randomsite.com";
