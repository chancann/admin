import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

export const AccountProfile = (props) => {
  return(
    <Card {...props}>
      <CardContent>
      <Box
        component="main"
        sx={{
          m:auto,
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
          // bgcolor: 'text.primary',
        }}
      >
      <Container maxWidth={false}>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
          <div>
            <TextField
              id="outlined-basic"
              variant='filled'
              label="NIK"
              defaultValue="090840385034"
            />
            <TextField
              id="outlined-basic"
              variant='filled'
              label="Nama Lengkap"
              defaultValue="Chancan"
            />
          </div>
          <div>
          <TextField
              id="outlined-basic"
              variant='filled'
              label="Email"
              defaultValue="chancan@gmail.com"
            />
            <TextField
              id="outlined-basic"
              variant='filled'
              label="Password"
              defaultValue="qwerty123"
            />
          </div>
          <div>
          <TextField
              id="outlined-basic"
              variant='filled'
              label="No HP"
              defaultValue="08123343878"
            />
          <FormControl variant='filled' sx={{m:1, width:'25ch'}}>
                      <InputLabel id="demo-simple-select-label">Jenis Kelamin</InputLabel>
                      <Select
                        type='select' 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Jenis Kelamin"
                        >
                        <MenuItem value={'Laki-laki'}>Laki-laki</MenuItem>
                        <MenuItem value={'Perempuan'}>Perempuan</MenuItem>
                      </Select>
                    </FormControl>
          </div>
        </Box>
      <Box sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}>
        <TextField
          multiline
          id="outlined-basic"
          variant='filled'
          label="Alamat"
          defaultValue="Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia"
        />
        </Box>
      </Container>
      </Box>
      </CardContent>
    </Card>
  );  
} 