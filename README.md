# neighborhoodmap
Final Project for the Udacity Nanodegree


## To Run

In order to run the project ```nodemon``` and ```yarn``` must be installed globally.

```
npm i nodemon -g
npm i yarn -g
```

## Notice on Initial Load Speed
 
The initial load speed of the application will be slower than subsequent loads. Unfortunately, the Fusion API provided by Yelp is rate limited, and if the requests are not spaced out over time the requests are refused by the endpoint
##Attributions
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The provided Service Worker is used for caching API requests.

Node.js Backend hel found here:
 
 https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

Setup for map and helper here: 

https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

Setup for map markers here:

https://developers.google.com/maps/documentation/javascript/markers



