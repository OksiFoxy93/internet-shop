import { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as CrossIcon } from "../../icons/x-mark.svg";

import "./Modal.scss"

class Modal extends Component {
    constructor() {
        super();
        this.onOutsideModalClick = this.onOutsideModalClick.bind(this);
    }

    onModalBodyClick(ev) {
        ev.stopPropagation();
    }

    onOutsideModalClick() {
        this.props.handleCloseModal();
    }

    render() {
        const { title, closeButton, text, actions, handleCloseModal } = this.props;

        return (
            <div className="modal-wrapper" onClick={ this.onOutsideModalClick }>
                <div className="modal" onClick={ this.onModalBodyClick }>
                    <div className="header">
                        <h3>{ title }</h3>
                        { closeButton && (
                            <CrossIcon className="close-icon" onClick={ handleCloseModal } />
                        )}
                    </div>
                    <p className="modal-text">{ text }</p>
                    <div className="modal-button-wrapper">
                        { actions }
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;

Modal.defaultProps = {
    closeButton: true
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    text: PropTypes.string.isRequired,
    actions: PropTypes.element,
    handleCloseModal: PropTypes.func,
};
