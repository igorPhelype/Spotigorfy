import React from 'react';

const AlbumListItem = ({album, onAlbumSelect}) => {
    const album_link = album.external_urls.spotify;
    return(
        <li className="">
            <div className="media-left">
                <img alt="" width="100" height="100" src={album.images[0].url}/>
            </div>
            <div className="media-body">
                <div className="media-heading album-name">
                    <p>
                        {album.name}
                    </p>
                </div>
            </div>
            <div>
                <button onClick={() => onAlbumSelect(album.id)} className="listen-link">+ info</button>
            </div>
            <div>
                <a className="listen-link" target="blank" href={album_link}>Ouvir no Spotify WebPlayer</a>
            </div>
        </li>
    );
}

export default AlbumListItem;