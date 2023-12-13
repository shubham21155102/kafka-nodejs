const {kafka}=require("./client")
async function init(){
    const consumer=kafka.consumer({groupId:"test"})
    console.log("Consumer Connecting........")
    await consumer.connect()
    console.log("Consumer Connected!")
    await consumer.subscribe({topic:"rider-updates"})
    await consumer.run({
        eachMessage:async result=>{
            console.log("Received Message")
            console.log(result)
        }
    })
}
init()