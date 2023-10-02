import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to VM resource',
      currency: 'The value is {{val, currency(USD)}}',
      number: '{{val, number}}',
      datetime: '{{val, datetime}}',
      // 'MONITOR.COL.FIELD.PLATE': 'Plate',
      // 'MONITOR.COL.FIELD.GPSTIME': 'Date/Time',
      // 'MONITOR.COL.FIELD.SPEED': 'Speed',
      // 'MONITOR.COL.FIELD.SPEEDOMETER': 'Speedometer',
      // 'MONITOR.COL.FIELD.FUEL': 'Fuel',
      // 'MONITOR.COL.FIELD.TEMPERATURE': 'Temperature',
      // 'MONITOR.COL.FIELD.HUMIDITY': 'Humidity',
      // 'MONITOR.COL.FIELD.AIR_CONDITIONER': 'Air conditioner',
      // 'MONITOR.COL.FIELD.DOOR': 'Door',
      // 'MONITOR.COL.FIELD.COLLISION': 'Collision',
      // 'MONITOR.COL.FIELD.LOCATION': 'Location',
      // 'MONITOR.COL.FIELD.ADDRESS': 'Address',
      // 'MONITOR.TABLE.FIELD.ROAD_SPEED': 'Road speed',
      // 'MONITOR.TABLE.HEADER.TITLE': 'Vehicle list',
      // 'MONITOR.TABLE.HEADER.SEARCH': 'Search',
      // 'MONITOR.TABLE.HEADER.FLEET': 'Choose a fleet',
    },
  },
  vi: {
    translation: {
      currency: 'The value is {{val, currency(VND)}}',
      number: '{{val, number}}',
      datetime: '{{val, datetime}}',
    },
  },
  zh: {
    translation: {
      currency: 'The value is {{val, currency(CNY)}}',
      number: '{{val, number}}',
      datetime: '{{val, datetime}}',
      'MONITOR.COL.FIELD.PLATE': 'Biển Số Xe TQ',
    },
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
    // TODO here make customize format (if any)
    // format: function (value, format, lng) {
    //   if (format === 'uppercase') return value.toUpperCase();
    //   if (value instanceof Date) return moment(value).format(format);

    //   return value;
    // },
  },
  resources,
});

export default i18n;
