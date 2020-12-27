import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    console.log(props);
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.search.get('searchResults')
    }
};

export default connect(mapStateToProps)(Results)
