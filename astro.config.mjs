import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
import vercel from "@astrojs/vercel/serverless";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  adapter: vercel()
});