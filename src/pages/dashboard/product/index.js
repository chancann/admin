import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
// import { products } from '../../../__mocks__/products';
import { ProductListToolbar } from '../../../components/product/product-list-toolbar';
// import { ProductCard } from '../../../components/product/product-card';
import { DashboardLayout } from '../../../components/dashboard-layout';
// import { LatestOrders } from '../../../components/dashboard/listOrder';
import { LatestProducts } from '../../../components/dashboard/listProduct';
import baseURL from '../../../api/baseURL';


const Products = ({product}) => (
  <>
    <Head>
      <title>
        Produk - Dashboard
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
        <ProductListToolbar />
          <Box sx={{ mt: 3 }}>
            <LatestProducts data={product}/>
          </Box>
        {/* <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
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
         */}
      </Container>
    </Box>
  </>
);

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export async function getServerSideProps(context) {
  const responseUser = await baseURL.get("/api/product")
    const product = responseUser.data.data.data
    // console.log(product)

  
  return {
    props: {product}, // will be passed to the page component as props
  }
}

export default Products;
