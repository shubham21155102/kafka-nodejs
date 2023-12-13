const { Kafka } = require("kafkajs");
require("dotenv").config()
console.log(`${process.env.MYIP}:9092`)
exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: [`${process.env.MYIP}:9092`],
});