import fastify, { FastifyInstance, FastifyListenOptions } from "fastify"

const PORT: number | undefined = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

const app = fastify()

app.listen({port: PORT}, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`);
} )
