import express,{Application,Request,Response} from 'express';
import cors from 'cors';
import exp = require('constants');
const app : Application = express()
const port = 3000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;