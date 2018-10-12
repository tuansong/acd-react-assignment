import React from 'react';
import { connect } from 'react-redux';

import './ActionKeys.css';

const actionKeys = (props) => {
    return(
        <div className="actions">
            <p onClick={props.add}>+</p>
            <p onClick={props.minus}>-</p>
            <p onClick={props.multiply}>*</p>
            <p onClick={props.devide}>/</p>
            <p onClick={props.equal}>=</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        result: state.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch({type: 'ADD'}),
        minus: () => dispatch({type: 'MINUS'}),
        multiply: () => dispatch({type: 'MULTIPLY'}),
        devide: () => dispatch({type: 'DEVIDE'}),
        equal: () => dispatch({type: 'EQUAL'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(actionKeys);