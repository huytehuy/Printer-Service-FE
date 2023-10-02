import { clsx } from '@mantine/core';
import { t } from 'i18next';
import { FC } from 'react';

type NoDataPageProps = {
  classNames?: string;
  title?: string;
};

const NoDataPage: FC<NoDataPageProps> = ({ classNames, title }) => {
  return (
    <div
      className={clsx(
        'flex h-full w-full items-center justify-center',
        classNames
      )}
    >
      <span className='text-#5E76A1 text-sm font-medium italic'>
        {title || t('MONITOR.UI.TABLE.NO-DATA-DISPLAY')}
      </span>
    </div>
  );
};

export default NoDataPage;
