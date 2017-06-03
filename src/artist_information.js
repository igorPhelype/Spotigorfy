import React from 'react';

const ArtistInformation = (props) => {
    const artist_name = props.current_artist.name;
    return(
        <div>
            <ul className="col-md-4 list-group">
                <li className="list-group-item">
                    <div className="media-body">
                        <div className="media-heading">Artista: {artist_name}</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ArtistInformation;