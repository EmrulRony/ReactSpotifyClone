import React, { useEffect } from 'react';
import Login from './Login';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromResponse } from "./spotify";
import './App.css';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null);
  const [{ user, token, playLists, selected_playlist}, dispatch] = useDataLayerValue();

  useEffect(() => {
    
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });

      spotify.getUserPlaylists().then(responsePlayList => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playLists: responsePlayList.items
        })
      })

      spotify.getPlaylist('37i9dQZF1DXcSPhLAnCjoM').then(playlist => {
        dispatch({
          type: 'SET_SELECTED_PLAYLIST',
          selected_playlist: playlist
        })
      })
    }
  }, [dispatch])

  console.log('🤷‍♂️', user);
  console.log('👉',token);
  console.log('🎵',selected_playlist); 

  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }

    </div>
  );
}

export default App;
