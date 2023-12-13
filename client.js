const { Kafka } = require("kafkajs");
require("dotenv").config()
exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: [`http://${process.env.MYIP}:9092`],
});