import * as dotenv from 'dotenv'
dotenv.config()
export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRESIN
  }
};