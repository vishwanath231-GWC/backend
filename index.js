import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.post('/api/v1/user', (req, res) => {
  const { name, email } = req.body

  if (name && email) {
    return res.status(200).json({
      status: true
    })
  }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>  console.log('server is running...!'));