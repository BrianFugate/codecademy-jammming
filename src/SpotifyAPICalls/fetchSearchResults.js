/**
 * This is a JavaScript file that started out as a sample file
 * from a Spotify GitHub repository and I modified to make work 
 * for my application. I left the original comment below for
 * transparency and commented at the functions what changed
 */

/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 */

// Imported Buffer to make getToken() work outside of Node.js
import {Buffer} from 'buffer';

// Initialize variables with sensitive info from environment variable
const clientId = import.meta.env.VITE_CLIENT_ID; 
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

// Initialize invalid token which will be replaced on first search attempt
let token = {token: 'invalidtoken', expireTime: 10};

// This function was unchanged except for changing variable names to camel case
async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')),
    },
  });

  return await response.json();
}

// This function was modified to take a URL argument
async function getTrackInfo(searchURL) {
  const response = await fetch(searchURL, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token.token },
  });

  return await response.json();
}

// This function was written by Brian and added to interact with the Jammming app
// and to check the token's expiration time before making an API search request.
// If the token is expired a new one is requested and the expiration time is updated.
export default async function fetchSearchResults(searchText, category) {
    let searchURL = 'https://api.spotify.com/v1/search?q=';
    searchURL += encodeURIComponent(category + ':' + searchText);
    searchURL += '&type=track';

    if (token.expireTime <= Date.now() - 5000) {
        const tokenResponse = await getToken();
        token = {token: tokenResponse.access_token, expireTime: Date.now() + (tokenResponse.expires_in * 1000)};
    };

    try {
        const searchResults = await getTrackInfo(searchURL);
        return searchResults.tracks.items;
    } catch(error) {
        console.error(error);
    };        
};