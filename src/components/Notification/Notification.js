import PropTypes from 'prop-types';
import { Informing } from './Notification.styled';

export function Notification({ message }) {
  return <Informing>{message}</Informing>;
}

Notification.propTypes = {
  message: PropTypes.string,
};