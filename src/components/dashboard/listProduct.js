import moment from 'moment';
// import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from "../../api/baseURL";

// const products = [
//   {
//     id: uuid(),
//     name: 'Dropbox',
//     imageUrl: '/static/images/products/product_1.png',
//     updatedAt: subHours(Date.now(), 2)
//   },
//   {
//     id: uuid(),
//     name: 'Medium Corporation',
//     imageUrl: '/static/images/products/product_2.png',
//     updatedAt: subHours(Date.now(), 2)
//   },
//   {
//     id: uuid(),
//     name: 'Slack',
//     imageUrl: '/static/images/products/product_3.png',
//     updatedAt: subHours(Date.now(), 3)
//   },
//   {
//     id: uuid(),
//     name: 'Lyft',
//     imageUrl: '/static/images/products/product_4.png',
//     updatedAt: subHours(Date.now(), 5)
//   },
//   {
//     id: uuid(),
//     name: 'GitHub',
//     imageUrl: '/static/images/products/product_5.png',
//     updatedAt: subHours(Date.now(), 9)
//   }
// ];

export const LatestProducts = (props) => {
  const router = useRouter()
  const deleteProduct = async (id) => {
    try {
      const response = await baseURL.delete(`api/product/${id}`)
      if (response.data.status === 200) {
        toast.warning('Product Deleted!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

          router.reload(window.location.pathname)
      }
  
    } catch (error) {
      console.log(error);
    }
  }
  return(
  <Card {...props}>
      <CardHeader title="Produk" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Title Product
                </TableCell>
                <TableCell>
                  Author
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Box sx={{px:2}}>
                  Actions
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data?.map((order) => (
                <TableRow
                  hover
                  key={order._id}
                >
                  <TableCell>
                    {order.title}
                  </TableCell>
                  <TableCell>
                    {order.author?.nama_lengkap}
                  </TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/yyyy')}
                  </TableCell>
                  <TableCell>
                    <Button color="info" href={`/dashboard/detail/${order._id}`}>
                      Detail
                    </Button>
                    <Button color="error" onClick={()=> {deleteProduct(order._id)}}>
                      Hapus
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
      </Box>
    </Card>
  );
}
    
  // <Card {...props}>
  //   <CardHeader
  //     subtitle={`${products.length} in total`}
  //     title="Latest Products"
  //   />
  //   <Divider />
  //   <List>
  //     {products.map((product, i) => (
  //       <ListItem
  //         divider={i < products.length - 1}
  //         key={product.id}
  //       >
  //         <ListItemAvatar>
  //           <img
  //             alt={product.name}
  //             src={product.imageUrl}
  //             style={{
  //               height: 48,
  //               width: 48
  //             }}
  //           />
  //         </ListItemAvatar>
  //         <ListItemText
  //           primary={product.name}
  //           secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
  //         />
  //         <IconButton
  //           edge="end"
  //           size="small"
  //         >
  //           <MoreVertIcon />
  //         </IconButton>
  //       </ListItem>
  //     ))}
  //   </List>
  //   <Divider />
  //   <Box
  //     sx={{
  //       display: 'flex',
  //       justifyContent: 'flex-end',
  //       p: 2
  //     }}
  //   >
  //     <Button
  //       color="primary"
  //       endIcon={<ArrowRightIcon />}
  //       size="small"
  //       variant="text"
  //     >
  //       View all
  //     </Button>
  //   </Box>
  // </Card>
// );
