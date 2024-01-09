/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 */
import {Buffer} from 'buffer';

const clientId = import.meta.env.VITE_CLIENT_ID; 
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
let token = {token: 'invalidtoken', expireTime: 10};

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

async function getTrackInfo(searchURL) {
  const response = await fetch(searchURL, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token.token },
  });

  return await response.json();
}

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
    } catch(e) {
        console.log(e);
    };        
};