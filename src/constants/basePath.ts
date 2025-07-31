/** @format */

// Base URLs for different environments
export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export const SSR_BASE_URL =
  process.env.NEXT_PUBLIC_SSR_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3000";
export const BASE_ASSETS_URL =
  process.env.NEXT_PUBLIC_ASSETS_URL || "http://localhost:3000";
