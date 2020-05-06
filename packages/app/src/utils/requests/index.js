import { requestStatus } from '../../constants';

export const isLoading = status => status === requestStatus.LOADING;

export const isSuccess = status => status === requestStatus.SUCCESS;

export const isFailure = status => status === requestStatus.FAILURE;
