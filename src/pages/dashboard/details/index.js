import {
  Container,
  Box,
} from '@mui/material';
// import { AccountProfile } from '../../components/account/account-profile';

import { DashboardLayout } from '../../../components/dashboard-layout';
import DetailsAccount from './[id]';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

const Details = () => {
  return(
    <>
      <DashboardLayout>
      <DetailsAccount/>
    </DashboardLayout>
    </>
    
  );  
} 

export default Details;