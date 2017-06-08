/* 
    * if the hash isnt initialised, replace the location to the api.
    * The api will return a callback url that will be splitted in order to get the access token.
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import AlbumList from './album_list';
import ArtistInformation from './artist_information';
import SearchBar from './search_bar';
import TrackList from './track_list';

var access_token;
var callback_url = window.location.href;
const api_url = "https://accounts.spotify.com/authorize?client_id=97f162d3fb7940b9bc87ac13b118a406&response_type=token&redirect_uri="+callback_url;

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            current_artist: [],
            albums: [],
            artist_image_url: "",
            selected_album_id: null
        };
        var hash;
        if(!window.location.hash){
            window.location.replace(api_url);
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
            this.setState({artist_image_url: data.images[0].url});
        });
        spotifyApi.getArtistAlbums('3dRfiJ2650SZu6GbydcHNb',{album_type: 'album', limit: 50, market: 'BR'}, (err, data) => {
            if(err){
                console.log(err);
                window.location.replace(api_url);
            }
            this.setState({
                albums: data.items,
                selected_album_id: data.items[0].id
            });
        });
    }
    render(){
        console.log(this.state.selected_album_id);
        if(!this.state.selected_album_id){
            return(
                <div>Loading...</div>
            );
        }
        return (
            <div>
                <nav>
                    <SearchBar/>
                </nav>
                <div className="container">
                    <ArtistInformation artist_image_url={this.state.artist_image_url} current_artist={this.state.current_artist}/>
                    <AlbumList 
                        onAlbumSelect={selected_album_id => this.setState({selected_album_id})}
                        albums={this.state.albums}
                    />
                    <TrackList
                        album_id={this.state.selected_album_id}
                        access_token={access_token}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));