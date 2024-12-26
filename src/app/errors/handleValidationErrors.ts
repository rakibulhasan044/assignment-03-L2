import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map((val) => {
    if (
      val instanceof mongoose.Error.ValidationError ||
      val instanceof mongoose.Error.CastError
    ) {
      return {
        path: val?.path,
        message: val?.message,
      };
    }

    return {
      path: 'unknown',
      message: 'An unknown validation error occurred',
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorSources,
  };
};

export default handleValidationError;
