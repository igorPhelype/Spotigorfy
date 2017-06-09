import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: 'John Williams'};
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return( 
            <div>
                <input 
                    value = {this.state.term}
                    onChange = {
                        event => this.onInputChange(event.target.value)
                    }
                    placeholder = "Pesquisar..."
                    className="pull-right"/>
            </div>
        );
    }
}

export default SearchBar;