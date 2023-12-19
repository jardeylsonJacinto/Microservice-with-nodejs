import { z } from 'zod'

export const schemavalidation = z.object({
  name: z.string(),
  code: z.string(),
  quantity: z.number(),
  price: z.number()
})