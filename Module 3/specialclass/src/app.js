import express from "express"
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/instagram', (req, res) => {
    res.send('<h1>you have visited instagram</h1>')
})
export default app;