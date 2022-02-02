import { Box, Container, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Button } from '@mui/material';
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
    <Box>
      <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
      <Container>
        <Box fullWidth >
          <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" color="initial">Tambah Akun</Typography>
          <TextField type='text' {...register('nik')} id="outlined-basic" label="NIK" />
          <TextField type='text' {...register('nama_lengkap')} id='outlined-basic' label='Nama Lengkap' />
          <TextField type='text' {...register('no_hp')} id='outlined-basic' label='No Hp' />
          <TextField type='email' {...register('email')} id='outlined-basic' label='Email' />
          <TextField type='password' {...register('password')} id='outlined-basic' label='Kata Sandi' />
          <TextField type='text' {...register('alamat')} id='outlined-basic' label='Alamat' />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Jenis Kelamin</InputLabel>
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
          <Button type='submit' variant='contained'>Submit</Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};
