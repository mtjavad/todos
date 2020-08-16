import React, { Component } from 'react';
import { connect } from "react-redux";
import { setVisibilityFilter } from "./../actions";

class FilterLink extends Component {
    render() {
        let { children , active , onClick } = this.props; 
        return (
            <button style={{marginLeft : '4px' }} disabled={active} onClick={onClick}>{children}</button>
        );
    }
}

const mapStateToProps = (state , ownProps) => {
    return {
        active : ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        onClick : () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(FilterLink);
