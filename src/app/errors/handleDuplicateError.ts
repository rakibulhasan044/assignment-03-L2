/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: `user with ${extractedMessage} already exist !!`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'email already exist.',
    errorSources,
  };
};

export default handleDuplicateError;
