import React from 'react';

const TrackListItem = (props) => {
    const track_name = props.track_name;
    const disc_number = props.disc_number;
    return(
        <li className="track-list-item">
            <p>
                <span>Disco {disc_number}</span> | {track_name}
            </p>
        </li>
    );
}

export default TrackListItem;