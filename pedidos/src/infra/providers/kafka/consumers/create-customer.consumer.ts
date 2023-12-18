import { kafkaConsumer } from "../kafka.consumer";

type CustomerConsumer = {
  email: string
  id: string
}

export async function createCustomerConsume(){
  const consumer = await kafkaConsumer('CUSTOMER_CREATED')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString()
      const customer = JSON.parse(messageToString) as CustomerConsumer
    }
  })
}

createCustomerConsume()