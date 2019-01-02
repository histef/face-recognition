const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: '1',
      name: 'John',
      email: 'john@gmail.com',
      password: 'test',
      entries: 0,
      joined: new Date()
    },
    {
      id: '2',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'testSal',
      entries: 0,
      joined: new Date()
    }
  ]
}

app.get('/', (req, res) => {
  res.send('server working');
})

app.post('/signin', (req,res) =>{
  if(req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password) {
      //turns to json string
      res.json('successful sign in');
    }else {
      res.status(400).json('error logging in');
    }
})

app.listen(3000, () => {
  console.log('app is running on port 3000')
})

// response is working
//signin --> post success/fail --why post? cuz sending pw. don't want to send as query string (GET) want to send inside body ideally over https so hidden from man in the middle attacks
//register -> post = user
//profile/:userId -> get user
//image -> put -> updated user rank count