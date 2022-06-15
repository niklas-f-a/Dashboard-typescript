require('dotenv').config()



const SL_REAL_TIME_API_KEY = process.env.SL_REAL_TIME_API_KEY
const SL_SITE_ID = process.env.SL_SITE_ID
const PORT = process.env.PORT
const WEATHER_KEY = process.env.WEATHER_KEY
const NEWS_API = process.env.NEWS_API
const SL_BASE_URL = process.env.SL_BASE_URL
const SL_TIME_WINDOW = process.env.SL_TIME_WINDOW
const WEATHER_BASE_URL = process.env.WEATHER_BASE_URL
const WEATHER_UNITS = process.env.WEATHER_UNITS
const NEWS_API_BASE_URL = process.env.NEWS_API_BASE_URL
const NEWS_API_LANG = process.env.NEWS_API_LANG


export {
  SL_REAL_TIME_API_KEY,
  SL_SITE_ID,
  PORT,
  WEATHER_KEY,
  NEWS_API,
  SL_BASE_URL,
  SL_TIME_WINDOW,
  WEATHER_BASE_URL,
  WEATHER_UNITS,
  NEWS_API_BASE_URL,
  NEWS_API_LANG
}