import auth from './auth';
import SERVER_URI from './server';

const config = {};
config.google   = auth.google;
config.facebook = auth.facebook;

export * from './history';
export * from './localStorage';

export { SERVER_URI };
export { config };