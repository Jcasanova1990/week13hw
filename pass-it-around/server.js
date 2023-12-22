const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1><a href="/98">Take one down, pass it around</a>')
});

app.get('/:number_of_bottles', (req, res) => {
    try {
        const numberOfBottles = parseInt(req.params.number_of_bottles, 10)

        if (isNaN(numberOfBottles)) {
            throw new Error('1 less bottle')
        }

        if (numberOfBottles === 0) {
            res.send('<h1>No more bottles of beer on the wall</h1><a href="/">Start Over</a>')
        } else {
            const nextNumber = numberOfBottles - 1
            res.send(`<h1>${numberOfBottles} Bottles of beer on the wall</h1><a href="/${nextNumber}">Take one down, pass it around</a><br><a href="/">Start Over</a>`)
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send('Bad Request')
    }
});

app.listen(port, () => {
    console.log(`Server listening at port, ${port}`)
})
