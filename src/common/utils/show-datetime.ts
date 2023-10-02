import dayjs from 'dayjs';
import { t } from 'i18next';

export const showDateTime = (date: number | Date | string) => {
  let formatDate;

  switch (typeof date) {
    case 'number': {
      formatDate = dayjs.unix(date);
      break;
    }

    default:
      formatDate = date;
      break;
  }

  return (
    t('datetime', {
      val: formatDate,
    }) +
    ' ' +
    t('datetime', {
      val: formatDate,
      formatParams: {
        val: {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
        },
      },
    })
  );
};
