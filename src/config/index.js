import google from './auth/google';
import SERVER_URI from './server';

const config = {};
config.SERVER_URI = SERVER_URI;
config.google     = google;

export { SERVER_URI };
export default config;