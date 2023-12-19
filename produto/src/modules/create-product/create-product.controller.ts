import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateProductUseCase } from './create-product.usecase'
import { schemavalidation } from '../validation/valitation'

export class CreateProductController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const useCase = new CreateProductUseCase()
    const bodyValidation = schemavalidation.parse(request.body)
    try {
      const result = await useCase.execute(bodyValidation)
      return reply.send(result)
    } catch (error) {
      
    }
  }
}