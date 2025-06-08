import { defineCollection, z } from "astro:content";

const info = defineCollection({
  schema: z.object({ 
    id: z.string(),
    titulo: z.string(),
    autor: z.string().optional(),
    descripcion: z.string(),
    imagen: z.string().optional(),
    lectura: z.number().optional(),
    fecha: z.string().transform((str) => new Date(str)).optional(),
    tags: z.array(z.string()).default([]).optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    titulo: z.string(),
    autor: z.string().optional(),
    descripcion: z.string(),
    imagen: z.string().optional(),
    lectura: z.number().optional(),
    fecha: z.string().transform((str) => new Date(str)).optional(),
    tags: z.array(z.string()).default([]).optional(),
  }),
});

export const collections = { info, blog }