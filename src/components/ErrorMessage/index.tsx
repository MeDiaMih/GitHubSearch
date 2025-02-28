import { ErrorContainer } from './styles';
import { FC } from 'react';
import { ErrorMessageProps } from '../../types';

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default ErrorMessage;
