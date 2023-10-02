const dev = {
  APP_API: 'http://115.73.208.125:7000/',
  LAYER_API: 'http://115.73.208.125:7000/',
  AUTH_API: 'https://api.vietmap.io/vml/production/',
};

const prod = {
  APP_API: 'http://115.73.208.125:7000/',
  LAYER_API: 'http://115.73.208.125:7000/',
  AUTH_API: 'https://jsonplaceholder.typicode.com',
};

const staging = {
  APP_API: 'https://api.test.com',
  LAYER_API: 'http://115.73.208.125:7000',
  AUTH_API: 'https://jsonplaceholder.typicode.com',
};

const getEnv = () => {
  switch (import.meta.env.MODE) {
    case 'staging':
      return staging;
    case 'production':
      return prod;
    default:
      return dev;
  }
};

export const env = getEnv();