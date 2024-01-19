// import the required dependencies for the app
import React from "react";
import PropTypes from "prop-types";


class LabelledInput extends React.Component {
    constructor( props ) {
        super(props);
    }

    render() {
        return (
            <div className="labelled-input">
                <label htmlFor={ this.props.inputID }>
                    { this.props.labelText }
                </label>

                <input type="text" id={ this.props.inputID } onChange={ this.props.onChange } 
                    placeholder={ this.props.placeholder } /> 
            </div>
        );
    }
}


// add type-checking for the props using prop-types
LabelledInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    inputID: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default LabelledInput;