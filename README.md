# Neighborhood Map - The Chicago Loop
Final Project for the Udacity Nanodegree. This is a responsive neighborhood map, showing the Chicago loop.
It shows an assortment of selected points of interest, color coded by category. It 
displays details about the locations and when you select the location on the map,
the map marker will display whether the POI is open currently.


## To Run

In order to run the project ```nodemon``` and ```yarn``` must be installed globally.

```
npm i nodemon -g
npm i yarn -g
```

Install the server dependencies, within the neighborhood-map directory:

```
npm install
```

Install the client dependencies, within the client directory:

```
cd client/
npm install
```

Now, to run the project, go back to the neighborhood map directory:

```
cd ..
yarn dev
```

This will start the React server and the Node server.

http://localhost:3000/


## Notice on Caching and Initial Load Speed
 
The initial load speed of the application may be slower than subsequent loads. Unfortunately, the Fusion API provided by Yelp is rate limited, and if the requests are not spaced out over time the requests are refused by the endpoint.

The Google Maps API does not allow for the caching of the Map component, however all other content is cached.

## Attributions
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The provided Service Worker is used for caching API requests.

Node.js Backend hel found here:
 
 https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

Setup for map and helper here: 

https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

Setup for map markers here:

https://developers.google.com/maps/documentation/javascript/markers



