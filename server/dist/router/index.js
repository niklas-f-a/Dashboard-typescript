"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const config_1 = require("../config");
const constants_1 = require("../constants");
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/departures', (req, res) => {
    axios_1.default.get(`${config_1.SL_BASE_URL}?key=${config_1.SL_REAL_TIME_API_KEY}&siteid=${config_1.SL_SITE_ID}&timewindow=${config_1.SL_TIME_WINDOW}`)
        .then(response => res.json(response.data.ResponseData));
});
//Probably change to something more fun
router.get('/excuse', (req, res) => {
    axios_1.default.get('https://excuser.herokuapp.com/v1/excuse')
        .then(response => res.json(response.data));
});
router.get('/weather', (req, res) => {
    axios_1.default.get(`${config_1.WEATHER_BASE_URL}?lat=${constants_1.LAT}&lon=${constants_1.LONG}&units=${config_1.WEATHER_UNITS}&appid=${config_1.WEATHER_KEY}`)
        .then(response => res.json(response.data));
});
router.get('/news', (req, res) => {
    axios_1.default.get(`${config_1.NEWS_API_BASE_URL}?apikey=${config_1.NEWS_API}&language=${config_1.NEWS_API_LANG}`)
        .then(response => res.json(response.data));
});
router.get('/', (req, res) => {
    res.sendFile('./index.html', { root: path_1.default.join(__dirname, '..', '..', '..', '/build') });
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNDQVdrQjtBQUdsQiw0Q0FBd0M7QUFFeEMsZ0RBQXVCO0FBQ3ZCLGtEQUF5QjtBQUN6QixxQ0FBZ0M7QUFFaEMsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUE7QUFHdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLG9CQUFXLFFBQVEsNkJBQW9CLFdBQVcsbUJBQVUsZUFBZSx1QkFBYyxFQUFFLENBQUM7U0FDeEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFDLENBQUE7QUFDRix1Q0FBdUM7QUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDakMsZUFBSyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQztTQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQzVDLENBQUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbEMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHlCQUFnQixRQUFRLGVBQUcsUUFBUSxnQkFBSSxVQUFVLHNCQUFhLFVBQVUsb0JBQVcsRUFBRSxDQUFDO1NBQ2xHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDNUMsQ0FBQyxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMvQixlQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsMEJBQWlCLFdBQVcsaUJBQVEsYUFBYSxzQkFBYSxFQUFFLENBQUM7U0FDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUM1QyxDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNCLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsQ0FBQTtBQUN4RixDQUFDLENBQUMsQ0FBQTtBQUdGLGlCQUFTLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNMX1JFQUxfVElNRV9BUElfS0VZLFxuICBTTF9TSVRFX0lELFxuICBXRUFUSEVSX0tFWSxcbiAgTkVXU19BUEksXG4gIFNMX0JBU0VfVVJMLFxuICBTTF9USU1FX1dJTkRPVyxcbiAgV0VBVEhFUl9CQVNFX1VSTCxcbiAgTkVXU19BUElfQkFTRV9VUkwsXG4gIE5FV1NfQVBJX0xBTkcsXG4gIFdFQVRIRVJfVU5JVFNcbn0gZnJvbSAnLi4vY29uZmlnJ1xuXG5cbmltcG9ydCB7IExPTkcsIExBVCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnXG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXG5cblxucm91dGVyLmdldCgnL2RlcGFydHVyZXMnLCAocmVxLCByZXMpID0+IHtcbiAgYXhpb3MuZ2V0KGAke1NMX0JBU0VfVVJMfT9rZXk9JHtTTF9SRUFMX1RJTUVfQVBJX0tFWX0mc2l0ZWlkPSR7U0xfU0lURV9JRH0mdGltZXdpbmRvdz0ke1NMX1RJTUVfV0lORE9XfWApXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlcy5qc29uKHJlc3BvbnNlLmRhdGEuUmVzcG9uc2VEYXRhKSlcbn0pXG4vL1Byb2JhYmx5IGNoYW5nZSB0byBzb21ldGhpbmcgbW9yZSBmdW5cbnJvdXRlci5nZXQoJy9leGN1c2UnLCAocmVxLCByZXMpID0+IHtcbiAgYXhpb3MuZ2V0KCdodHRwczovL2V4Y3VzZXIuaGVyb2t1YXBwLmNvbS92MS9leGN1c2UnKVxuICAudGhlbihyZXNwb25zZSA9PiByZXMuanNvbihyZXNwb25zZS5kYXRhKSlcbn0pXG5cbnJvdXRlci5nZXQoJy93ZWF0aGVyJywgKHJlcSwgcmVzKSA9PiB7XG4gIGF4aW9zLmdldChgJHtXRUFUSEVSX0JBU0VfVVJMfT9sYXQ9JHtMQVR9Jmxvbj0ke0xPTkd9JnVuaXRzPSR7V0VBVEhFUl9VTklUU30mYXBwaWQ9JHtXRUFUSEVSX0tFWX1gKVxuICAudGhlbihyZXNwb25zZSA9PiByZXMuanNvbihyZXNwb25zZS5kYXRhKSlcbn0pXG5cbnJvdXRlci5nZXQoJy9uZXdzJywgKHJlcSwgcmVzKSA9PiB7XG4gIGF4aW9zLmdldChgJHtORVdTX0FQSV9CQVNFX1VSTH0/YXBpa2V5PSR7TkVXU19BUEl9Jmxhbmd1YWdlPSR7TkVXU19BUElfTEFOR31gKVxuICAudGhlbihyZXNwb25zZSA9PiByZXMuanNvbihyZXNwb25zZS5kYXRhKSlcbn0pXG5cbnJvdXRlci5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmRGaWxlKCcuL2luZGV4Lmh0bWwnLCB7cm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJy4uJywgJy9idWlsZCcpfSlcbn0pXG5cblxuZXhwb3J0ID0gcm91dGVyIl19