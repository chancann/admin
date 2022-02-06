import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
// import { AccountProfile } from '../components/account/account-profile';
// import { AccountProfileDetails } from '../components/account/account-profile-details';
import { DashboardLayout } from '../../../components/dashboard-layout';
import { AccountList } from '../../../components/dashboard/listAccount';
import { AccountListToolbar } from '../../../components/account/account-list-toolbar';
import { customers } from '../../../__mocks__/customers';
// import { getServerSideProps } from '..';
import baseURL from '../../../api/baseURL';

const Account = ({user}) => (
  <>
    <Head>
      <title>
        Pengguna - Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <AccountListToolbar/>
        {/* <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Pengguna
        </Typography> */}
        <Box sx={{ mt: 3 }}>
          <AccountList data={user}/>
        </Box>
        {/* <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  </>
);

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export async function getServerSideProps(context) {
  const responseUser = await baseURL.get("/api/user")
    const user = responseUser.data.data.data
    // console.log(user)

  
  return {
    props: {user}, // will be passed to the page component as props
  }
}

export default Account;
