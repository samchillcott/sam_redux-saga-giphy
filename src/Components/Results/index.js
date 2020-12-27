import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    console.log(props);
    if (props.searchResults){
        return (
            <div>
                { renderSearchResults(props.searchResults) }
            </div>
        )
    }
    return null
}

const renderSearchResults = (searchResults) => {
    searchResults.map(result => {
        return <div>{console.log(result.toJS())}</div>
    })
}


const mapStateToProps = (state) => {
    return {
        searchResults: state.search.get('searchResults')
    }
};

export default connect(mapStateToProps)(Results)
