import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";

type ProductConsumer = {
  code: string
  id: string
}

export async function createProductConsume(){
  const product = await kafkaConsumer('PRODUCT_CREATED')
  await product.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString()
      const product = JSON.parse(messageToString) as ProductConsumer

      await prismaClient.product.create({
        data: {
          externalId: product.id,
          code: product.code
        }
      })
    }
  })
}

createProductConsume()