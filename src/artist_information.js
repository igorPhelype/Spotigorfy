import React from 'react';

const ArtistInformation = (props) => {
    const artist_name = props.current_artist.name;
    const artist_image_url = props.artist_image_url;
    return(
        <div className="artist-information">
            <ul className="col-md-3 overflow-list">
                <li className="">
                    <div className="media-body">
                        <div className="media-heading">
                            <h3>
                                Artista:
                            </h3>
                        </div>
                    </div>
                </li>
                <li className="">
                    <div className="media-body">
                        <div className="media-heading">{artist_name}</div>
                        <img alt="Foto do artista" className="img-thumbnail" src={artist_image_url}/>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ArtistInformation;