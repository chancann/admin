import { Box, Container, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Button, TextareaAutosize, Grid, FormLabel, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form'; 
import baseURL from "../../api/baseURL";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreateFile = (props) => {
  const router = useRouter();
  const {register, handleSubmit, formState:{errors}} = useForm();  
  const onSubmit = async (data) => {
    try {
      const response = await baseURL.post("/api/user/add",{...data, no_hp: parseInt(`${62}${data.no_hp.slice(1,-1)}`)});
        console.log(response);
      if(response.data.status === 200){
        toast.success('User Created', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          router.push("/dashboard")
      } else {
        toast.warning(response.data.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      {/* <ToastContainer
                  position="center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                /> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            fullWidth
            spacing={0}
          >       
        <Box sx={{m:'auto'}}>
          <Typography variant="h5" color="initial">Tambah Akun</Typography>
        </Box>
            <FormControl fullWidth sx={{py:2}}>
              <TextField size='small' variant='filled' margin='dense' type='text' {...register('nik')} id="outlined-size-small" label="NIK" />
              <TextField size='small' variant='filled' margin='dense' type='text' {...register('nama_lengkap')} id='outlined-size-small' label='Nama Lengkap' />
              <TextField size='small' variant='filled' margin='dense' type='text' {...register('no_hp')} id='outlined-size-small' label='No Hp' />
              <TextField size='small' variant='filled' margin='dense' type='email' {...register('email')} id='outlined-size-small' label='Email' />
              <TextField size='small' variant='filled' margin='dense' type='password' {...register('password')} id='outlined-size-small' label='Kata Sandi' />
              <TextField size='small' variant='filled' margin='dense' type='text' {...register('alamat')} id='outlined-size-small' label='Alamat'/>
                <FormControl variant='filled' size='small' sx={{pt:1}}>
                  <InputLabel sx={{pt:1}} id="demo-simple-select-label">Jenis Kelamin</InputLabel>
                  <Select
                    type='select' {...register('jenis_kelamin')}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Jenis Kelamin"
                    >
                    <MenuItem value={'Laki-laki'}>Laki-laki</MenuItem>
                    <MenuItem value={'Perempuan'}>Perempuan</MenuItem>
                  </Select>
                </FormControl>
              </FormControl>
              <Box sx={{m:'auto'}}>
                <Button type='submit' variant='contained'>Tambahkan</Button>
              </Box>
          </Grid>
    </form>
      </Container>
  );
};

