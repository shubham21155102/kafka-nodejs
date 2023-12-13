const {kafka} =require("./client")
async function init(){
    const producer = kafka.producer()
    console.log("Producer Connecting........")
    await producer.connect()
    console.log("Producer Connected!")
    console.log("Sending Message")
    await producer.send({
        topic:"rider-updates",
        messages:[
            {
                key:"location-update",
                value:JSON.stringify({
                    name:"Tonny Kakkar",
                    location:"Mumbai"
                })
            }
        ]
    })
    console.log("Message Sent")
    console.log("Producer Disconnecting")
    await producer.disconnect()
    console.log("Producer Disconnected")
}
init()