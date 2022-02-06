import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery, ListItem } from '@mui/material';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import LogoutIcon from '@mui/icons-material/Logout';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { Users as UsersIcon } from '../icons/users';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import Cookies from 'js-cookie'

const items = [
  {
    href: '/dashboard',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Beranda'
  },
  {
    href: '/dashboard/customer',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Permintaan'
  },
  {
    href: '/dashboard/product',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Produk'
  },
  {
    href: '/dashboard/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Pengguna'
  },
  // {
  //   href: '/settings',
  //   icon: (<CogIcon fontSize="small" />),
  //   title: 'Pengaturan'
  // },
  // {
  //   href: '/login',
  //   icon: (<LockIcon fontSize="small" />),
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: (<UserAddIcon fontSize="small" />),
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: (<XCircleIcon fontSize="small" />),
  //   title: 'Error'
  // }
];

export const DashboardSidebar = (props) => {
  const { href, icon, title, ...others } = props;
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });
  const active = href ? (router.pathname === href) : false;

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box 
          sx={{ 
            display:'flex',
            aligntItems:'center',
            p: 3,
            color:'white'
          }}>
              <Logo/>
              <Typography>
                Kecamatan Sepatan
              </Typography>
          </Box>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
          <ListItem sx={{
              display:'flex',
              mb: 0.5,
              py: 0,
              px: 1.7 }}>
            <Button 
              disableRipple
              sx={{
                backgroundColor: active && 'rgba(255,255,255, 0.08)',
                borderRadius: 1,
                color: active ? 'secondary.main' : 'neutral.300',
                fontWeight: active && 'fontWeightBold',
                justifyContent: 'flex-start',
                px: 3,
                textAlign: 'left',
                textTransform: 'none',
                width: '100%',
                '& .MuiButton-startIcon': {
                  color: active ? 'secondary.main' : 'neutral.400'
                },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255, 0.08)'
                }
              }}
              onClick={()=>{
                Cookies.remove('token')
                router.push('/login')
              }}>
                <LogoutIcon fontSize="small"/> 
              <Box sx={{
                flexGrow: 1,
                px: 0.8
              }}>
                Keluar
              </Box>
            </Button>
              </ListItem>  
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
