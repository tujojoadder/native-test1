import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { REACT_APP_LARAVEL_URL } from '@env';
import { useEffect } from 'react';
const userToken = '120|ZP8C4dGETwsCGSNS8vlH5uxAb8uIADrTyhxYvbWXd8d5a1b1';

window.Pusher = Pusher;

// Function to extract the host without protocol or port from REACT_APP_LARAVEL_URL
const getWsHost = (url) => {
  return url.split('://')[1].split(':')[0]; // Extract host part from URL (excluding port)
};

// Use the REACT_APP_LARAVEL_URL to set the wsHost
const echo = new Echo({
  broadcaster: "pusher",
  key: "ABCDE",
  cluster: "mt1",
  wsHost: getWsHost(REACT_APP_LARAVEL_URL),  // Dynamically extract host from REACT_APP_LARAVEL_URL
  wsPort: 6001,  // Specify the port separately (not combined with the host)
  disableStats: true,
  forceTLS: false,
  authEndpoint: `${REACT_APP_LARAVEL_URL}/api/user`,
  auth: {
    headers: {
      Authorization: `Bearer ${userToken}`,
      Accept: "application/json",
    },
  },
});

export default echo;