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
  Typography,
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import baseURL from "../../../api/baseURL";
import { DashboardLayout } from "../../../components/dashboard-layout";
import { useRouter } from "next/router";
import CryptoJs from "crypto-js";

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

export const DetailProduct = (props) => {
  const [form, setForm] = useState({
    images: [],
    title: "",
    category: "",
    author: "",
    description: "",
    price: "",
  });
  const router = useRouter();

  const getDetailProduct = async () => {
    try {
      const response = await baseURL(`/api/product/details/${router.query.id}`);
      if (response.data.status === 200) {
        setForm({ ...response.data.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const saveUser = async () => {
  //   try {
  //     const response = await baseURL.put(`/api/user/update/${router.query.id}`, form, {
  //       new: true,
  //     });
  //     if (response.data.status === 200) {
  //       router.push("/dashboard/account");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const back = () => {
    router.push("/dashboard/product");
  };

  useEffect(() => {
    getDetailProduct();
  }, [router]);

  return (
    <DashboardLayout>
      <Card {...props}>
        <CardContent>
          <Box
            component="main"
            sx={{
              alignItems: "center",
              display: "flex",
              flexGrow: 1,
              minHeight: "100%",
              // bgcolor: 'text.primary',
            }}
          >
            <Container maxWidth={false}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Typography sx={{ m: 1 }} variant="h4">
                  Detail Produk
                </Typography>
                <div>
                  <TextField
                    id="outlined-basic"
                    variant="filled"
                    label="Nama Produk"
                    onChange={(e) => {
                      setForm({ ...form, title: e.target.value });
                    }}
                    value={form.title}
                  />
                  <TextField
                    id="outlined-basic"
                    variant="filled"
                    label="Harga"
                    onChange={(e) => {
                      setForm({ ...form, price: e.target.value });
                    }}
                    value={form.price}
                  />
                </div>
                <div>
                  <FormControl variant="filled" sx={{ m: 1, width: "25ch" }}>
                    <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
                    <Select
                      onChange={(e) => {
                        setForm({ ...form, category: e.target.value });
                      }}
                      value={form.category}
                      type="select"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Jenis Kelamin"
                    >
                      <MenuItem value={"Makanan"}>Makanan</MenuItem>
                      <MenuItem value={"Minuman"}>Minuman</MenuItem>
                      <MenuItem value={"Pakaian"}>Pakaian</MenuItem>
                      <MenuItem value={"Kerajinan Tangan"}>Kerajinan Tangan</MenuItem>
                      <MenuItem value={"Perawatan Tubuh"}>Perawatan Tubuh</MenuItem>
                    </Select>
                  </FormControl>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "51.5ch" },
                    }}
                  >
                    <TextField
                      onChange={(e) => {
                        setForm({ ...form, description: e.target.value });
                      }}
                      value={form.description}
                      multiline
                      id="outlined-basic"
                      variant="filled"
                      label="Deskripsi"
                    />
                  </Box>
                </div>
              </Box>
              <Box sx={{ m: 1, display: "inline-flex" }}>
                <Typography>Gambar :</Typography>
                {form.images?.map((image, index) => (
                  <Box sx={{ p: 2 }}>
                    <img
                      width="200px"
                      src={`${baseURL.defaults.baseURL}/${image.data}`}
                      key={index + 29}
                      alt="product image"
                    />
                  </Box>
                ))}
              </Box>
              <Box sx={{ m: 1 }}>
                <Button color="info" onClick={back}>
                  Kembali
                </Button>
              </Box>
            </Container>
          </Box>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default DetailProduct;
