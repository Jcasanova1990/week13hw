const express =require('express')

const app = express()
const port = 3000

app.get('/greeting', (req, res) => {
    res.send('Hello, Stranger')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    const greetingMessages = [
        `Hello, ${name}`,
        `Top of the morning, ${name}`,
        `Nice seeing you again, ${name}`,
    ]
    const randomGreeting = greetingMessages[Math.floor(Math.random() * greetingMessages.length)]
    res.send(`Wow! ${randomGreeting}`)
})

app.listen(port, () => {
    console.log(`Server is running at port, ${port}`)
})