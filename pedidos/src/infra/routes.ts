import { Router, request, response } from "express";
import { CreateOrderController } from "../modules/create-order.controller";

const router = Router()

router.post('/orders', (request, response) => {
  new CreateOrderController().handle(request,response)
})

export { router }