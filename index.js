const Resquest = require("./src/index")

const client = new Resquest.Client("url")
const response = await client.connectToEndpoint()