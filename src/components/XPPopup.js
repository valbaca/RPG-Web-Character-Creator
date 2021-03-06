import React from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {changeData} from '../actions';
import {bindActionCreators} from 'redux';

class XPPopup extends React.Component {
    state = {earnedXP: this.props.earnedXP};

    componentWillReceiveProps(nextProps) {
        this.setState({earnedXP: nextProps.earnedXP});
    }

    handleChange = (event) => {
        let xp = event.target.value;
        if (xp > 9999) return;
        if (xp.includes('+')) xp = +xp.replace(/\D+/g, '') + +this.state.earnedXP;
        this.setState({earnedXP: +xp});
        event.preventDefault();
    };

    handleSubmit = (event) => {
        const {earnedXP} = this.state;
        this.props.changeData(earnedXP, 'earnedXP');
        this.props.handleClose();
        event.preventDefault();
    };

    render() {
        const {earnedXP} = this.state;
        const {handleClose, modal} = this.props;
        return (
            <Modal isOpen={modal} toggle={handleClose}>
                <ModalHeader toggle={handleClose}>Earned XP</ModalHeader>
                <ModalBody className='m-4'>
                    <input type='number' value={earnedXP > 0 ? earnedXP : ''} onChange={this.handleChange}/>
                    &emsp;
                    <ButtonGroup>
                        <Button value='+5' onClick={this.handleChange}>+5</Button>
                        <Button value='+10' onClick={this.handleChange}>+10</Button>
                        <Button onClick={this.handleSubmit}>Enter</Button>
                    </ButtonGroup>
                </ModalBody>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        earnedXP: state.earnedXP,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({changeData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(XPPopup);