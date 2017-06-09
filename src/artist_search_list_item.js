import React from 'react';

const ArtistSearchListItem = (props) => {
    const artist_name = props.current_artist.name;
    const artist_image_url = props.artist_image_url;
    return(
        <li onClick={() => props.onArtistSelect(props.current_artist)} className="artist-search-list-item">
            <h3>{artist_name}</h3>
            <img alt="Foto do artista" className="img-responsive img-thumbnail" src={artist_image_url}/>
        </li>
    );
}

export default ArtistSearchListItem;