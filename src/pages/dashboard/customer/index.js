import Head from 'next/head';
import { Box, Container, Pagination } from '@mui/material';
// import { CustomerListResults } from '../../../components/customer/customer-list-results';
import { CustomerListToolbar } from '../../../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../../components/dashboard-layout';
// import { customers } from '../../../__mocks__/customers';
import { LatestOrders } from '../../../components/dashboard/listOrder';
import baseURL from '../../../api/baseURL';
// import Cookies from 'js-cookie';

const Customers = ({reqUser}) => (
  <>
    <Head>
      <title>
        Permintaan - Dashboard
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
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <LatestOrders data={reqUser}/>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export async function getServerSideProps(context) {
  const responseReqUser = await baseURL.get('/api/user/request')
  const reqUser = responseReqUser.data.data
  // console.log(reqUser);

  return {
    props: {reqUser}, // will be passed to the page component as props
  }
}
export default Customers;
