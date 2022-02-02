import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

// import Cookies from 'js-cookie';
// import jwt_decode from "jwt-decode";
// import baseURL from '../../api/baseURL';

// const userAccount = async (data) => {
//   try{
//     const total = await baseURL.get("/api/product", data)
//     console.log(total);
//   } catch (error){
//     console.log(error);
//   }
// }



export const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Total Akun
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.totalCustomer}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

