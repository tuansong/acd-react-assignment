import React from 'react';
import './KeyBoard.css'

import InputKeys from './InputKeys/InputKeys';
import ActionKeys from './ActionKeys/ActionKeys';

const keyboard = (props) => {
    return (
        <div className="keyboard">
            <InputKeys />
            <ActionKeys />
        </div>
    )
}

export default keyboard