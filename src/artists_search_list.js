import React, {Component} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import _ from 'lodash';
import ArtistsSearchListItem from './artist_search_list_item'

class ArtistsSearchList extends Component{
    constructor(props){
        super(props);
        this.state={artistsList: [], term: props.term};
        const searchArtist = _.debounce(() => {this.searchArtist();}, 400);
        searchArtist();    
    }
    searchArtist(){
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(this.props.access_token);
        spotifyApi.searchArtists(this.state.term, {limit: '2', type: 'artist'},
            (err, data) => {
                if(err){
                    console.log(err);
                }
                if(data){
                    this.setState({artistsList: data.artists.items});
                }
            }
        );
    }
    render(){
        const artistsList = this.state.artistsList.map((artist) => {
            if(!artist.images[0]){
                artist.images[0] = "";
            }
            return(
                <ArtistsSearchListItem
                    key={artist.id}
                    current_artist={artist}
                    onArtistSelect={this.props.onArtistSelect}
                    artist_image_url={artist.images[0].url}
                />
            );
        });
        return(
            <div>
                <ul className="overflow-list">
                    <li>
                        <div className="media-body">
                            <div className="media-heading">
                                <h3>
                                    Resultado da Pesquisa:
                                </h3>
                            </div>
                        </div>
                    </li>
                    {artistsList}
                </ul>
            </div>
        );
    }
}

export default ArtistsSearchList;