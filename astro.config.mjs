import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), mdx(), react()],
  adapter: vercel()
});