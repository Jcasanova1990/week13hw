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
  
  app.get('/magic/:question', (req, res) => {
    const question = req.params.question.replace(/%20/g, ' '); // Replace %20 with spaces
    const magic8BallResponses = 
    ["It is certain", "It is decidedly so", "Without a doubt",
     "Yes definitely","You may rely on it", "As I see it yes", 
     "Most likely", "Outlook good","Yes", "Signs point to yes", 
     "Reply hazy try again", "Ask again later","Better not tell you now",
    "Cannot predict now", "Concentrate and ask again","Don't count on it",
    "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]
    res.send(`<h1>Your question: ${question}</h1><h1>Magic 8 Ball says: ${randomResponse}</h1>`)
  })
  

app.listen(port, () => {
    console.log(`Server is running at port, ${port}`)
})