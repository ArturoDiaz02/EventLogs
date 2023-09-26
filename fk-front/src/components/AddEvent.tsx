import React, {useState} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Autocomplete, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import ResponsiveDateTimePickers from "./DatePicker.tsx";

interface EventModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (dataF: FormData) => void;
  eventTypes: string[];
}

interface FormData {
  name: string;
  start: string;
  end: string;
  description: string;
  type: string | undefined;
}

const AddEventModal: React.FC<EventModalProps> = ({ open, onClose, onSubmit, eventTypes }) => {
  const { control, handleSubmit, setValue, reset } = useForm<FormData>();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    setSelectedType("")
    reset()
  };

  const handleTypeChange = (newValue: string | null) => {
    setSelectedType(newValue);
    if (newValue === null) return;
    setValue("type", newValue);
  };

  const handleStartDateChange = (newDate: string) => {
    console.log("start", newDate);
    setValue("start", newDate);
  };

  const handleEndDateChange = (newDate: string) => {
    console.log("end", newDate);
    setValue("end", newDate);
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Agregar Evento</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                required
                variant="outlined"
                label="Nombre"
                {...field}
                margin="normal"
              />
            )}
          />
          <ResponsiveDateTimePickers setSelectedDate={handleStartDateChange} label={"Fecha de inicio"}/>
          <ResponsiveDateTimePickers setSelectedDate={handleEndDateChange} label={"Fecha final"} />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                label="Descripción"
                {...field}
                margin="normal"
              />
            )}
          />
          <Controller
            name="type"
            control={control}
            defaultValue={undefined}
            render={({ field }) => (
              <Autocomplete
                fullWidth
                options={eventTypes}
                getOptionLabel={(option) => option}
                {...field}
                value={selectedType}
                onChange={(_, newValue) => handleTypeChange(newValue)}
                renderInput={(params) => <TextField {...params} required label="Tipo de Evento" variant="outlined" />}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit" color="primary" variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddEventModal;
