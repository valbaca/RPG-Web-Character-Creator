import React from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'reactstrap';
import {bindActionCreators} from 'redux';
import {changeData} from '../actions';

class Notes extends React.Component {
    state = {notes: this.props.description.notes};

    componentWillReceiveProps(nextProps) {
        this.setState({notes: nextProps.description.notes});
    }

    handleBlur = (event) => {
        const {changeData, description} = this.props;
        let newObj = {...description};
        newObj.notes = this.state.notes;
        changeData(newObj, 'description');
        event.preventDefault();
    };

    handleChange = (event) => {
        this.setState({notes: event.target.value});
        event.preventDefault();
    };

    render() {
        const {notes} = this.state;
        return (
            <Col className='m-2' onClick={this.handleClick}>
                <Row className='justify-content-end'><h5>NOTES</h5></Row>
                <hr/>
                <Row>
                        <textarea onChange={this.handleChange}
                                  onBlur={this.handleBlur}
                                  className='w-100'
                                  rows='31'
                                  maxLength='1000'
                                  value={notes}/>
                </Row>
            </Col>

        );
    }
}

function mapStateToProps(state) {
    return {
        description: state.description,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({changeData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Notes);