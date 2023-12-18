import fastify, { FastifyInstance, FastifyListenOptions } from "fastify"

const PORT: number | undefined = process.env.PORT ? parseInt(process.env.PORT) : 3003;

const app = fastify()

app.listen({port: PORT}, (err, address) => {
  if (err) throw err
  console.log(`Server produto is running on PORT: ${address}`);
} )
