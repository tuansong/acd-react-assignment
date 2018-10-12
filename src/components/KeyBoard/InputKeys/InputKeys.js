import React from 'react';
import { connect } from 'react-redux';

import './InputKeys.css';

const inputKey = (props) => {
    return(
        <div className="inputs">
            <p onClick={props.inputOne}>1</p>
            <p onClick={props.inputTwo}>2</p>
            <p onClick={props.inputThree}>3</p>
            <p onClick={props.inputFour}>4</p>
            <p onClick={props.inputFive}>5</p>
            <p onClick={props.inputSix}>6</p>
            <p onClick={props.inputSeven}>7</p>
            <p onClick={props.inputEight}>8</p>
            <p onClick={props.inputNine}>9</p>
            <p onClick={props.inputZero}>0</p>
            <p onClick={props.removeItem}>AC</p>
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
        inputOne: () => dispatch({type: 'GET_INPUT', data: 1}),
        inputTwo: () => dispatch({type: 'GET_INPUT', data: 2}),
        inputThree: () => dispatch({type: 'GET_INPUT', data: 3}),
        inputFour: () => dispatch({type: 'GET_INPUT', data: 4}),
        inputFive: () => dispatch({type: 'GET_INPUT', data: 5}),
        inputSix: () => dispatch({type: 'GET_INPUT', data: 6}),
        inputSeven: () => dispatch({type: 'GET_INPUT', data: 7}),
        inputEight: () => dispatch({type: 'GET_INPUT', data: 8}),
        inputNine: () => dispatch({type: 'GET_INPUT', data: 9}),
        inputZero: () => dispatch({type: 'GET_INPUT', data: 0}),
        removeItem: () => dispatch({type: 'REMOVE_ITEM'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(inputKey)