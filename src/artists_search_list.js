import React, {Component} from 'react';

class ArtistsSearchList extends Component{
    constructor(props){
        super(props);
    }
    render(){
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
                </ul>
            </div>
        );
    }
}

export default ArtistsSearchList;