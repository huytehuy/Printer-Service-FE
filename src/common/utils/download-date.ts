export const downloadedDate = (t: any) => {
  return `${t('APP.SHARE.UI.TABLE.ACTION.DOWNLOAD.DATETIME')}: ${
    t('datetime', {
      val: new Date(),
    }) +
    ' ' +
    t('datetime', {
      val: new Date(),
      formatParams: {
        val: {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
        },
      },
    })
  }`;
};
