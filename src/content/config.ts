import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),

    tags: z.array(z.string()).optional(),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    paperURL: z.string().optional(),
    authors: z.string().optional(),
    codeURL: z.string().optional(),
    webURL: z.string().optional(),
    dataURL: z.string().optional(),
    img: z.string().optional(),
    imgAlt: z.string().optional(),
    pub: z.string().optional(),
  }),
});

// const peprints = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     date: z.string().optional(),
//     paperURL: z.string().optional(),
//     authors: z.string().optional(),
//     codeURL: z.string().optional(),
//     webURL: z.string().optional(),
//     dataURL: z.string().optional(),
//     img: z.string().optional(),
//     imgAlt: z.string().optional(),
//     pub: z.string().optional(),
//   }),
// });
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    cover: z.string(),              // path in /public, e.g. /projects/foo/cover.jpg
    coverAlt: z.string(),
    tags: z.array(z.string()).default([]),
    role: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    papers: z.array(z.object({
        title: z.string(),
        authors: z.string(),
        venue: z.string(),
        year: z.number(),
        url: z.string().optional(),
        note: z.string().optional(),   // e.g. "first author", "co-author"
        })).default([]),

  }),
});


export const collections = { blog, publications,projects };


