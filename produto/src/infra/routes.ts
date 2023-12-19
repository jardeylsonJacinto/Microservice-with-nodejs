import { FastifyInstance, FastifyReply, FastifyRequest }  from "fastify";
import { CreateProductController } from "../modules/create-product/create-product.controller";

export async function routes(app: FastifyInstance) {
  app.post('/products', (request: FastifyRequest, reply: FastifyReply) => {
    new CreateProductController().handle(request,reply)
  })
}