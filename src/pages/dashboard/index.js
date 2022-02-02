import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Budget } from '../../components/dashboard/totalRequest';
import { LatestOrders } from '../../components/dashboard/listOrder';
import { TasksProgress } from '../../components/dashboard/totalProduct';
import { TotalCustomers } from '../../components/dashboard/totalAccount';
import { DashboardLayout } from '../../components/dashboard-layout';

import baseURL from '../../api/baseURL'

const Dashboard = ({reqUser, reqLength, userLength, productLength}) => (
  <>
    <Head>
      <title>
        Beranda - Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget totalRequest={reqLength}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers totalCustomer={userLength} />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress totalProduct={productLength} />
          </Grid>

        </Grid>
          <Box
            item
            lg={12}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestOrders data={reqUser}/>
          </Box>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export async function getServerSideProps(context) {
  const responseReqUser = await baseURL.get('/api/user/request')
  const responseUser = await baseURL.get("/api/user")
  const responseProduct = await baseURL.get("/api/product")
    const reqUser = responseReqUser.data.data
    const user = responseUser.data.data.data
    const product = responseProduct.data.data.data

    const reqLength = reqUser.length
    const userLength = user.length
    const productLength = product.length
  return {
    props: {reqUser, user, reqLength, userLength, productLength},
  }
}

export default Dashboard;
