import { prismaClient } from "../../infra/database/prismaClient"

type CreateProductRequest = {
  name: string,
  code: string,
  quantity: number
  price: number
}

export class CreateProductUseCase {

  async execute(data: CreateProductRequest){

    const product = await prismaClient.product.findFirst({
      where: {
        code: data.code
      }
    })

    if(product) throw new Error('Product already exists')

    const productCreate = await prismaClient.product.create({
      data: {
        ...data
      }
    })

    return productCreate
  }
}