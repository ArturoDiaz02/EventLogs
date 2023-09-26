import '../../App.css'
import {Autocomplete, Box, Button, CircularProgress, Grid, TextField, Typography} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { EVENT_API_URL } from "../../config";
import {useEvents} from '../../hooks/EventHooks';
import EventService from "../../services/EventService";
import EventCard from "../../components/EventCard.tsx";
import {useState} from "react";
import AddEventModal from "../../components/AddEvent.tsx";
import DateRangePiker from "../../components/DateRangePiker.tsx";
import "./index.css"

interface DataFilter {
  search: string;
  dateInit: string;
  dateEnd: string;
  type: string;
  create: boolean;
}

function App() {
  const [dataFilter, setDataFilter] = useState<DataFilter>({
    search: "",
    dateInit: "",
    dateEnd: "",
    type: "",
    create: false,
  });

  const { events, isLoading } = useEvents(dataFilter);
  const [ isOpenModalAdd, setIsOpenModalAdd ] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleOpenModal = () => {
    setIsOpenModalAdd(true);
  };

  function createEvent(data: any) {
    EventService.createEvent(EVENT_API_URL, data)
      .then((response) => {
        setIsOpenModalAdd(false)
        setDataFilter({...dataFilter, create: !dataFilter.create})
        console.log(response);
      });
  }

  return (
    <Box
      className="main-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: 4 }}>
        Event manager hghg
      </Typography>

      <Grid
        container
        sx={{
          columns: { lg: 2 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 4,
        }}
      >
        <Grid item xs={12} md={4}>
          <DateRangePiker setDataFilter={setDataFilter} />
        </Grid>
        <Grid item xs={12} md={4} px={2}>
          <Autocomplete
            sx={{backgroundColor: "white", borderRadius: "5px", border: "1px solid #ffffff"}}
            fullWidth
            options={["Api", "Formulario de eventos manuales"]}
            getOptionLabel={(option) => option}
            value={selectedType}
            onChange={(_, newValue) =>{
              setSelectedType(newValue)
              if (newValue){
                setDataFilter({...dataFilter, type: newValue})
              }else{
                setDataFilter({...dataFilter, type: ""})
              }
            }}
            renderInput={(params) => <TextField {...params} label="Tipo de Evento" variant="outlined" />}
          />
        </Grid>
      </Grid>

      <Grid container columns={{ lg: 3 }}>
        <CircularProgress
          sx={{
            display: isLoading ? 'block' : 'none',
          }}
        />
        <EventCard data={events} isLoading={isLoading} />
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          minWidth: 'auto',
          minHeight: 'auto',
          boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.3)',
          },
        }}
        onClick={handleOpenModal}
      >
        <AddIcon sx={{ fontSize: '2rem' }} />
      </Button>
      <AddEventModal
        open={isOpenModalAdd}
        onClose={() => setIsOpenModalAdd(false)}
        onSubmit={(data: any) => createEvent(data)}
        eventTypes={["Api", "Formulario de eventos manuales"]}
      />

    </Box>
  );
}

export default App;
