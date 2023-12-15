import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            // here is where you have to initialize your state with the
            // data that you need
        };
    }

    render() {
        const navigate = useNavigate();

        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: this.props.show ? 'inline-block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Are you sure?</h5>
                            {this.props.onClose ? (
                                <button onClick={() => this.props.onClose()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="modal-body">
                            <p>If you delete this thing the entire universe will go down!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">
                                Oh no!
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={() => navigate('/')} // Use navigate to change the route
                            >
                                Yes baby!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * here is where you define the data-types for
 * your component properties
 **/
Modal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool
};

/**
 * here is where you define the default values for
 * your component properties
 **/
Modal.defaultProps = {
    show: false,
    onClose: null
};

export default Modal;
