import React from 'react';
import AlbumListItem from './album_list_item';

const AlbumList = ({albums, onAlbumSelect}) => {
    const albumItems = albums.map((album)=> {
        return(
            <AlbumListItem
                onAlbumSelect={onAlbumSelect}
                key={album.id}
                album={album}
            />
        )
    });
    return (
        <div>
            <ul className="col-md-5 overflow-list">
                {/*<li className="list-group-item">
                    <div className="media-body">
                        <div className="media-heading">
                            <button>Anterior</button>
                            <button>Proximo</button>
                        </div>
                    </div>
                </li>*/}
                <li className="">
                    <div className="media-body">
                        <div className="media-heading">
                            <h3>
                                Albuns:
                            </h3>
                        </div>
                    </div>
                </li>
                {albumItems}
            </ul>
        </div>
    );
}

export default AlbumList;

//4836
//4913