import { format } from 'date-fns';
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
  // {
  //   // id: uuid(),
  //   id:3761230938900002,
  //   ref: 'CDD1048',
  //   amount: 25.1,
  //   customer: {
  //     name: 'Cao Yu'
  //   },
  //   createdAt: 1555016400000,
  //   status: 'delivered'
  // },
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

export const LatestOrders = (props) => (
  <Card {...props}>
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
                Nama Lengkap
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
                    Tanggal
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.id}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {order.createdAt}
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(order.status === 'Diterima' && 'success')
                    || (order.status === 'Ditolak' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                  </SeverityPill>
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
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        Lihat Semua
      </Button>
    </Box>
  </Card>
);
