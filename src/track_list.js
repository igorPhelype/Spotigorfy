import React, {Component} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import TrackListItem from './track_list_item';

class TrackList extends Component{
    constructor(props){
        super(props);
        this.state = {album_id: props.album_id, album_tracks: [], track_list: []};
        var spotifyApi = new SpotifyWebApi();
        const access_token = props.access_token;
        console.log("trackList:", props);
        spotifyApi.setAccessToken(access_token);
        spotifyApi.getAlbumTracks(this.state.album_id, {limit: 50, market: 'BR'}, (err, data) =>{
            if(err){
                console.log(err);
            }
            if(data){
                this.setState({album_tracks: data.items});
            }
        });
    }
    
    render(){
        const track_list = this.state.album_tracks.map((track) => {
            return <TrackListItem key={track.id} disc_number={track.disc_number} track_name={track.name}/>;
        });
        return(
            <div>
                <ul className="col-md-5 overflow-list">
                    <li className="">
                        <div className="media-body">
                            <div className="media-heading">
                                <h3>
                                    Músicas:
                                </h3>
                            </div>
                        </div>
                    </li>
                    {track_list}
                </ul>
            </div>
        );
    }
}

export default TrackList;