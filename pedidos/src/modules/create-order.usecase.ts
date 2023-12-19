import { prismaClient } from "../infra/database/prismaClient"

type CreateOrderRequest = {
  customerId: string,
  customerEmail: string,
  status: string,
  items: [{
    productId: string,
    quantity: number
  }]
}

export class CreateOrderUseCase {

  async execute(data: CreateOrderRequest) {

    // Requisição para API de produtos para verificar se tem estoque do produto.
    // axios.get('/product')
    const order = await prismaClient.order.create({
      data: {
        customerId: data.customerId,
        customerEmail: data.customerEmail,
        status: data.status,
        orderItems: {
          createMany: {
            data: data.items
          }
        }
      }
    })

    return order
  }
}