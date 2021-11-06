## IoT project - Moisture Level

An IoT project I did in a course at Linnaeus University. A thing, a moisture sensor, is sending the moisture level from a plant via an MQTT broker (CloudMQTT) to a backend server. A frontend is displaying the data that is fetched from the backend server. Notifications are sent from the backend to the user’s connected Telegram account via a Telegram bot. 

### Repositories in project
Thing - [https://github.com/christoffergranstedt/lnu-iot-moisture-thing](https://github.com/christoffergranstedt/lnu-iot-moisture-thing)  
Backend - [https://github.com/christoffergranstedt/lnu-iot-moisture-backend](https://github.com/christoffergranstedt/lnu-iot-moisture-backend)  
Frontend - [https://github.com/christoffergranstedt/lnu-iot-moisture-frontend](https://github.com/christoffergranstedt/lnu-iot-moisture-frontend)  

### Frontend repository
This is the frontend repository. The frontend is written in TypeScript as an React application. The frontend follow the same patterns as the server of [Web of Things](https://www.w3.org/WoT/documentation/#web-of-things-in-a-nutshell), with things that are built by events, actions, and properties. The user can get notifications about low or high moisture warnings via a connected Telegram account that the user has chosen, and by enabling or disabling wanted notifications.

The main branch is automatically deployed to Vercel. Some of the request, such as signing in is sent to the backend server which sleeps after 30 minutes after the last request, so the initial request may take some time before a response.
