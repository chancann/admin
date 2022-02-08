import {
  Avatar,
  Container,
  Box,
  Button,
  Card,
  TextField,
  CardActions,
  CardContent,
  Divider,
  Typography, Grid, FormControl, FormLabel, FormHelperText, InputLabel, Select, MenuItem
} from '@mui/material';
import { useState, useEffect } from 'react';
import baseURL from '../../../api/baseURL';
import { DashboardLayout } from '../../../components/dashboard-layout';
import { useRouter } from 'next/router';
import CryptoJs from 'crypto-js'

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

export const DetailsAccount = (props) => {
  const [form , setForm] = useState({
    alamat: "",
    email: "",
    jenis_kelamin: "",
    nama_lengkap: "",
    nik: "",
    no_hp: "",
    password: ""
  })
  const router = useRouter()
  const cryptoSec = 'pojokumkmkecamatansepatankabupatentangerang'

  const getDetailAccount = async() => {
    try {
      const response = await baseURL(`/api/user/details/${router.query.id}`)
      if (response.data.status === 200) {
        const decryptPassword = CryptoJs.AES.decrypt(response.data.data.password, cryptoSec);
        const userPassword = decryptPassword.toString(CryptoJs.enc.Utf8);

        setForm({...response.data.data, password: userPassword})
      }
    } catch (error) {
      console.log(error);
    }
  }

  const saveUser = async ()=> {
    try {
      const response = await baseURL.put(`/api/user/update/${router.query.id}`, form, {new: true})
      if (response.data.status === 200) {
        router.push("/dashboard/account")
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailAccount()
  }, [router]);
  

  return(
    <DashboardLayout>
          <Card {...props}>
      <CardContent>
      <Box
        component="main"
        sx={{
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
          onChange={(e) => {
            setForm({...form, nik: e.target.value})
          }}
          value={form.nik}
        />
        <TextField
          id="outlined-basic"
          variant='filled'
          label="Nama Lengkap"
          onChange={(e) => {
            setForm({...form, nama_lengkap: e.target.value})
          }}
          value={form.nama_lengkap}
        />
      </div>
      <div>
      <TextField
          id="outlined-basic"
          variant='filled'
          label="Email"
          onChange={(e) => {
            setForm({...form, email: e.target.value})
          }}
          value={form.email}
        />
        <TextField
          id="outlined-basic"
          variant='filled'
          label="Password"
          onChange={(e) => {
            setForm({...form, password: e.target.value})
          }}
          value={form.password}
        />
      </div>
      <div>
      <TextField
          id="outlined-basic"
          variant='filled'
          label="No HP"
          onChange={(e) => {
            setForm({...form, no_hp: e.target.value})
          }}
          value={form.no_hp}
        />
      <FormControl  variant='filled' sx={{m:1, width:'25ch'}}>
                  <InputLabel id="demo-simple-select-label">Jenis Kelamin</InputLabel>
                  <Select
                   onChange={(e) => {
                    setForm({...form, jenis_kelamin: e.target.value})
                  }}
                  value={form.jenis_kelamin}
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
         onChange={(e) => {
          setForm({...form, alamat: e.target.value})
        }}
        value={form.alamat}
          multiline
          id="outlined-basic"
          variant='filled'
          label="Alamat"
        />
        </Box>
      </Container>
      </Box>
      </CardContent>
      <Button onClick={saveUser}>Save</Button>
      </Card>
    </DashboardLayout>
  );  
} 

export default DetailsAccount;