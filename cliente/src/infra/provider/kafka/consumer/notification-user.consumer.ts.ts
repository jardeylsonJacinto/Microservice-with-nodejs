import { kafkaConsumer } from '../kafka.consumer'

type CustomerConsumer = {
  customerID: string
  status: string
}

export async function createCustomerConsume() {
  const consumer = await kafkaConsumer('ORDER_STATUS')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString()
      const statusConsumer = JSON.parse(messageToString) as CustomerConsumer

      // Enviar messagem por email
      console.log(
        `ATUALIZAÇÂO DE STATUS - Client: ${statusConsumer.customerID} - Status: ${statusConsumer.status}`,
      )
    },
  })
}

createCustomerConsume()
