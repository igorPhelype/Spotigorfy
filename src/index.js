import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import AlbumList from './album_list';
import ArtistInformation from './artist_information';
import SearchBar from './search_bar';

var access_token;
const api_url = "https://accounts.spotify.com/authorize?client_id=97f162d3fb7940b9bc87ac13b118a406&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000%2F";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {current_artist: [], albums: []};
        var hash;
    //if the hash isnt initialised, replace the location to the api.
        if(!window.location.hash){
            window.location.replace(api_url);
    //the api will return a callback url tha will be splitted in order to get the access token.
        }else{
            var url = window.location.href;
            hash = url.split('#')[1];
            hash = hash.split('&')[0];
            hash = hash.split('=')[1];
            console.log("Hash: ", hash);
        }
        access_token = hash;
        
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(access_token);
        
        spotifyApi.getArtist('3dRfiJ2650SZu6GbydcHNb', (err, data) => {
            if(err){
                console.log(err);
                window.location.replace(api_url);
            }
            this.setState({current_artist: data});
            console.log("current_artist",this.state.current_artist);
        });

        spotifyApi.getArtistAlbums('3dRfiJ2650SZu6GbydcHNb', (err, data) => {
            if(err){
                console.log(err);
                window.location.replace(api_url);
            }
            console.log('Artist albums', data);
            console.log('Album result: ', data.items);
            this.setState({albums: data.items});
        });

    }
    render(){
        return (
            <div className="container">
                <nav>
                    <SearchBar/>
                </nav>
                <ArtistInformation current_artist={this.state.current_artist}/>
                <AlbumList albums={this.state.albums}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));