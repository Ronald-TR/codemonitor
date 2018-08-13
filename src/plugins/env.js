// import something here
import dotenv from 'dotenv';

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  dotenv.load();
  process.env.WATCH_LINK='http://0baafd03.ngrok.io'
}
