import z from 'zod';

export const equivalentSchema = z.object({
  titles: z.string().array(),
  names: z.string().array(),
  nameString: z.string(),
  ignoredPattern: z.string(),
  hidden: z.boolean(),
});

// eslint-disable-next-line
declare const __obj_id_brand: unique symbol;

export const objectIDSchema = z.string().brand<typeof __obj_id_brand>();

export type ObjectID = z.infer<typeof objectIDSchema>;

export type Equivalent = z.infer<typeof equivalentSchema>;

export const informationSchema = z.object({
  title: z.string(),
  text: z.string(),
  hidden: z.boolean(),
});

export type Information = z.infer<typeof informationSchema>;

export const phraseSchema = z.object({
  titles: z.string().array(),
  form: z.string(),
  terms: z.string().array(),
  termString: z.string(),
  ignoredPattern: z.string(),
});

export type Phrase = z.infer<typeof phraseSchema>;

export const variationSchema = z.object({
  title: z.string(),
  name: z.string(),
  pronunciation: z.string(),
});

export type Variation = z.infer<typeof variationSchema>;

export const relationSchema = z.object({
  titles: z.string().array(),
  number: z.number(),
  name: z.string(),
});

export type Relation = z.infer<typeof relationSchema>;

export const catalogSchema = z.union([
  z.literal('zpdicDaily'),
  z.literal('appleAlpha'),
  z.literal('appleGamma'),
  z.literal('survival'),
  z.literal('weaving'),
  z.literal('shaleianBeta'),
  z.literal('shaleianAlpha'),
  z.literal('meat'),
  z.literal('arithmetic'),
  z.literal('adposition'),
]);

export type Catalog = z.infer<typeof catalogSchema>;

export const exampleSchema = z.object({
  id: objectIDSchema,
  number: z.number(),
  sentence: z.string(),
  translation: z.string(),
  tags: z.string().array(),
  words: z
    .object({
      number: z.number(),
    })
    .array(),
  offer: z.union([
    z.object({
      catalog: catalogSchema,
      number: z.number(),
    }),
    z.null(),
  ]),
});

export type Example = z.infer<typeof exampleSchema>;

// eslint-disable-next-line
declare const __zpdic_word_brand: unique symbol;

export const zpdicWordSchema = z
  .object({
    id: objectIDSchema,
    number: z.number(),
    name: z.string(),
    pronunciation: z.string(),
    equivalents: equivalentSchema.array(),
    tags: z.string().array(),
    phrases: phraseSchema.array(),
    variations: variationSchema.array(),
    relations: relationSchema.array(),
    examples: exampleSchema.array(),
  })
  .brand<typeof __zpdic_word_brand>();

export type ZpDICWord = z.infer<typeof zpdicWordSchema>;

export const zpdicApiResponseSchema = z.object({
  words: zpdicWordSchema.array(),
  total: z.number(),
});

export type ZpDICAPIResponse = z.infer<typeof zpdicApiResponseSchema>;
