const { kafka } = require("./client");
async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting........")
  await admin.connect();
  console.log("Admin Connected!")
  console.log("Creating Topic");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updated",
        numPartitions: 2
      },
    ],
  });
  console.log("Topic Created");
  console.log("Admin Disconnecting");
  await admin.disconnect();
  console.log("Admin Disconnected");
}
init()