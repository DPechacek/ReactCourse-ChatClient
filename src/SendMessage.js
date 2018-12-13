import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
    state = {
        message: ''
    };

    /*
     * If the user did not type anything, he/she should not be
     * allowed to submit.
     */
    isDisabled = () => {
        return this.state.message.length === 0;
    };

    updateMessage = (event) => {
        this.setState({
            message: event.target.value
        });
    };

    handleSubmit = () => {
        this.props.postMessage(this.props.username, this.state.message);

        this.setState({
            message: ''
        });
    };

    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input type="text"
                           className="form-control"
                           placeholder="Enter your message..."
                           name="text"
                           value={this.state.message}
                           onChange={this.updateMessage}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button"
                                disabled={this.isDisabled()} >
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

SendMessage.propTypes = {
    postMessage: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

export default SendMessage;