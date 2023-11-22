import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), mdx()],
  adapter: vercel()
});