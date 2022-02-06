import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Modal,
  Button,
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import moment from 'moment';
import { getInitials } from '../../utils/get-initials';
import baseURL from "../../api/baseURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export const AccountList = ({...props}) => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const deleteUser = async (id) => {
    try {
  
      const response = await baseURL.delete(`api/user/${id}`)

      if (response.data.status === 200) {
        toast.warning('User Deleted!', {
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
  
  return (
    <Card {...props}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1024 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Nik
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  No Hp
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  <Box sx={{px:2}}>
                  Actions
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data?.map((user, index) => (
                
                <TableRow
                  hover
                  key={user._id}
                  // selected={selecteduserIds.indexOf(user._id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selecteduserIds.indexOf(user.id) !== -1}
                      onChange={(event) => handleSelectOne(event, user.id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {/* <Avatar
                        src={user.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(user.name)}
                      </Avatar> */}
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {user.nik}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {user.no_hp}
                  </TableCell>
                  <TableCell>
                  {moment(user.createdAt).format('DD/MM/yyyy')}
                  </TableCell>
                  <TableCell>
                  <Modal
                      open={isModalOpen}
                      onClose={() => {setIsModalOpen(false)}}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          {user.email}
                        </Typography>
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                      </Box>
                    </Modal>
                    <Button color="info">Detail</Button>
                    <Button color="error" onClick={()=> {deleteUser(user._id)}}>Hapus
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
      {/* <TablePagination
        component="div"
        // count={user.length}
        // onPageChange={handlePageChange}
        // onRowsPerPageChange={handleLimitChange}
        // page={page}
        // rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};

// AccountList.propTypes = {
//   user: PropTypes.array.isRequired
// };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};