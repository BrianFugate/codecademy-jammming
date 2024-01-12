const clientId = '28d090df51804234a978502b675aedac';
const redirectURI = 'https://jammming5173.netlify.app/';
let token;

const Spotify = {
    generateRandomString(length) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    },

    async validateSpotify() {
        const state = Spotify.generateRandomString(16);

        //localStorage.setItem(stateKey, state);
        const scope = 'playlist-modify-private user-read-private user-read-email';

        let url = 'https://accounts.spotify.com/authorize';
        url += '?client_id=' + clientId;
        url += '&response_type=token';
        url += '&scope=' + encodeURI(scope);
        url += '&redirect_uri=' + redirectURI;
        url += '&state=' + state;

        location.assign(url);
    },

    async getTrackInfo(searchURL) {
        const response = await fetch(searchURL, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token },
        });

        return await response.json();
    },

    async fetchSearchResults(searchText, category) {
        const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
        token = tokenMatch[1];
        let searchURL = 'https://api.spotify.com/v1/search?q=';
        searchURL += encodeURIComponent(category + ':' + searchText);
        searchURL += '&type=track';        

        try {
            const searchResults = await Spotify.getTrackInfo(searchURL);
            return searchResults.tracks.items;
        } catch (error) {
            console.error(error);
        };
    },

    async savePlaylist(name, tracks) {
        const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
        token = tokenMatch[1];

        const trackIds = tracks.map((element) => {
            return 'spotify:track:' + element.id;
        });

        const userDataResponse = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token }
        });        
        const userData = await userDataResponse.json();

        const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userData.id}/playlists`, {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name,
                    description: "Playlist saved from Jammming app",
                    public: false })
        });
        const createPlaylistResponseData = await createPlaylistResponse.json();

        const addTracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${createPlaylistResponseData.id}/tracks`, {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
            body: JSON.stringify({ uris: trackIds })
        });
        
        if (addTracksResponse.status === 201) {
            return true;
        }; 
    }
};

export default Spotify;