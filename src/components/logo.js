import PropTypes from 'prop-types';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import logoDashboard from '../images/logoDashboard.png'

export const Logo = styled((props) => {
  const { variant, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (
    <div>
      <Image src={logoDashboard} alt='logo' width={80} height={60}/>
    </div>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
