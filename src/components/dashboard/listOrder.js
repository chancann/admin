import { format } from 'date-fns';
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
import baseURL from "../../api/baseURL";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const orders = [
  {
    // id: uuid(),
    id:3761230938900001,
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Adi Hidayat'
    },
    createdAt: '03/01/2022',
    status: 'Menunggu'
  },
  {
    // id: uuid(),
    id:3761230938900002,
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Setyo Aji Pambudi'
    },
    createdAt: '30/12/2021',
    status: 'Ditolak'
  },
  {
    // id: uuid(),
    id:3761230938900003,
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Genius Putra'
    },
    createdAt: '28/12/2021',
    status: 'Menunggu'
  },
  {
    // id: uuid(),
    id:3761230938900004,
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Akmal Ardhi'
    },
    createdAt: '25/12/2021',
    status: 'Diterima'
  },
  {
    // id: uuid(),
    id:3761230938900005,
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Rahmat Suprianto'
    },
    createdAt: '20/12/2021',
    status: 'Diterima'
  }
];


export const LatestOrders = (props) => {
const router = useRouter()

  const acceptHandler = async (id) => {
    try {
      const token = Cookies.get('token')
  
      const response = await baseURL.post(`api/user/verify/${id}`, {
        headers: {
          Authorization: token
        }
      })
  
      if (response.data.status === 200) {
        toast.success('Verified', {
          position: "top-center",
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

  const discardHandler = async (id) => {
    try {
      const token = Cookies.get('token')
  
      const response = await baseURL.delete(`api/user/${id}`, {
        headers: {
          Authorization: token
        }
      })
  
      if (response.data.status === 200) {
        toast.warning('User Declined!', {
          position: "top-center",
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

  return (
    <Card {...props}>
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
    <CardHeader title="Permintaan" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                NIK
              </TableCell>
              <TableCell>
                Name
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
                Actions
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
                  {order.nik}
                </TableCell>
                <TableCell>
                  {order.nama_lengkap}
                </TableCell>
                <TableCell>
                  {moment(order.createdAt).format('DD/MM/yyyy')}
                </TableCell>
                <TableCell>
                  <Button onClick={()=> {acceptHandler(order._id)}}>Terima</Button>
                  <Button onClick={()=> {discardHandler(order._id)}}>Tolak</Button>
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
  )
}
