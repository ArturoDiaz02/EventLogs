import React, {useState} from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@mui/material";
import Event from "../model/Event.ts";

interface EventCardProps {
  data: Event[];
  isLoading: boolean;
}
const EventCard: React.FC<EventCardProps> = ({ data, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    return dateObject.toDateString();
  };

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <>
      <Grid container spacing={2}>
        {!isLoading && data.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event._id} onClick={() => handleCardClick(event)} >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                transition: '0.3s',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                },
            }} >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatDate(event.start) + " - " + formatDate(event.end)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>{selectedEvent?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <strong>Inicio:</strong> {selectedEvent?.start}
          </Typography>
          <Typography variant="body1">
            <strong>Fin:</strong> {selectedEvent?.end}
          </Typography>
          <Typography variant="body1">
            <strong>Descripción:</strong> {selectedEvent?.description}
          </Typography>
          <Typography variant="body1">
            <strong>Tipo:</strong> {selectedEvent?.type}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EventCard;
