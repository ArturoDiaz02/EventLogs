import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const socketIo = require('socket.io');
const http = require('http');
import { port, mongoUrl } from './config';
import eventRouter from './app/events/infrastructure/router/event.router';
import userRouter from "./app/users/infrastructure/router/user.router";
import registrationRouter from "./app/registrations/infrastructure/router/registration.router";

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(cors());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/events', eventRouter);
app.use('/api/users', userRouter);
app.use('/api/registrations', registrationRouter);

io.on('connection', (socket: any) => {
  console.log('New client connected: ', socket.id);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.log('Error connecting to MongoDB', error.message);
  })

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

