import React from 'react';
import { connect } from 'react-redux';

import './ResultScreen.css';

const resultScreen = (props) => <h3 className="display">{props.result}<span className="text-holder">|</span></h3>

const mapStateToProps = state => {
    return {
        result: state.result
    }
}

export default connect(mapStateToProps)(resultScreen);