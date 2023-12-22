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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    try {
      const total = parseFloat(req.params.total)
      const tipPercentage = parseFloat(req.params.tipPercentage)
  
      if (isNaN(total) || isNaN(tipPercentage)) {
        throw new Error('Invalid input. Please provide valid total and tipPercentage parameters.')
      }
  
      const tipAmount = (total * tipPercentage) / 100;
      res.send(`The tip amount for a total of $${total} with a ${tipPercentage}% tip is $${tipAmount.toFixed(2)}`)
    } catch (error) {
      res.status(400).send(error.message)
    }
  })
  


app.listen(port, () => {
    console.log(`Server is running at port, ${port}`)
})