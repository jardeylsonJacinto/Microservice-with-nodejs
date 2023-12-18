import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['great-deer-10915-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'Z3JlYXQtZGVlci0xMDkxNSRelzWeZo_Dw_HFQ3g-DrhxbveCZ77E2c2Y-YJ5eNI',
    password: 'YTczZTAyMDktZmFmOS00N2NmLTgxMjktMGEwMzdiZGFhNTMw',
  },
  ssl: true,
})

export { kafka }
