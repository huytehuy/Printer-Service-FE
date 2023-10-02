// import { ResponseError } from '@/common/types/axios/response';
import { showNotification } from '@mantine/notifications';
import { AxiosError } from 'axios';

export const getStringError = (error: AxiosError) => {
  let title = 'Có lỗi xảy ra!';
  if (error?.response?.status) {
    const { status, statusText } = error.response;
    title = `Error ${status}: ${statusText}`;
  } else if (error?.message) {
    title = error.message;
  }
  return title;
};

export const toastError = (error: AxiosError | string) => {
  let title;
  if (typeof error === 'string') {
    title = error || 'Có lỗi xảy ra!';
  } else {
    title = getStringError(error);
  }

  showNotification({
    title,
    message: '',
    color: 'red',
  });
};

export const toastSuccess = (title = 'Cập nhật thành công') => {
  showNotification({
    title,
    message: '',
    color: 'green',
  });
};
