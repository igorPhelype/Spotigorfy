import React from 'react';
import AlbumListItem from './album_list_item';

const AlbumList = (props) => {
    console.log("Props on album_list: ",props);
    const albumItems = props.albums.map((album)=> {
        return <AlbumListItem key={album.id} album={album}/>
    });
    return (
        <ul className="col-md-7 list-group">
            <li className="list-group-item">
                <div className="media-body">
                    <div className="media-heading">
                        <button>Anterior</button>
                        <button>Proximo</button>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="media-body">
                    <div className="media-heading">
                        Albuns:
                    </div>
                </div>
            </li>
            {albumItems}
        </ul>
    );
}

export default AlbumList;

//4836
//4913