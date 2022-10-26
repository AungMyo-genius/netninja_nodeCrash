const http = require('http')
const _ = require('lodash')

const server = http.createServer( (req, res) => {

    //lodash
    const randomNum = _.random(0,20)
    console.log(randomNum)

    const greet = _.once( () => console.log('Hello'))

    greet()
    greet()
})

server.listen(3000, 'localhost', () => console.log('Server is running at port 3000'))