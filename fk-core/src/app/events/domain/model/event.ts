import mongoose, {Model} from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
})

const Event: Model<any> = mongoose.model('Event', eventSchema);

//auto populate 4 events
Event.find({}).then((events) => {
  if (events.length === 0) {
    Event.create({
      name: 'Event 1',
      description: 'This is event 1',
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      type: 'Api'
    });
    Event.create({
      name: 'Event 2',
      description: 'This is event 2',
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      type: 'Formulario de eventos manuales'
    });
    Event.create({
      name: 'Event 3',
      description: 'This is event 3',
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      type: 'Api'
    });
    Event.create({
      name: 'Event 4',
      description: 'This is event 4',
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      type: 'Formulario de eventos manuales'
    });
  }
});

export default Event;
