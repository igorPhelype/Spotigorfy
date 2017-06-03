import React from 'react';

const AlbumListItem = ({album}) => {
    var album_link = album.external_urls.spotify;
    return(
        <li className="list-group-item">
            <div className="media-left">
                <img alt="" width="100" height="100" src={album.images[0].url}/>
            </div>
            <div className="media-body">
                <div className="media-heading">{album.name}</div>
                <ul className="list-group">
                    <li><a className="listen-link" target="blank" href={album_link}>Ouvir no Spotify WebPlayer</a></li>
                </ul>
            </div>
        </li>
    );
}

export default AlbumListItem;