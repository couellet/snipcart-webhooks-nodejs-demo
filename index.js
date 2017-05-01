const express = require('express')
const { json } = require('body-parser')
const taxesCalculationHandler = require('./handlers/taxesCalculationHandler')

const app = express()

app.use(json())

app.post('/webhooks', (req, res) => {
    let body = req.body

    switch (body.eventName) {
        case 'taxes.calculate':
            let content = taxesCalculationHandler.calculateTaxes(body.content)
            res.send(content)
            break
        default:
            res.status(204).send({})
            break
    }
})

app.listen(8181, () => {
    console.log('Webhoooks app listening on port 8181.')
})
