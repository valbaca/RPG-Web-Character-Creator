import React from 'react';
import {connect} from 'react-redux';
import {MotivationBlock} from './index';

class Motivation extends React.Component {

  render() {
    const {masterMotivations} = this.props;
    return (
      <div className='module'>
          <div className='module-header'>MOTIVATIONS</div>
          <hr />
          {Object.keys(masterMotivations).map((type)=>
          <MotivationBlock key={type} type={type}/>
        )}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
        masterMotivations: state.masterMotivations
    };
}

export default connect(mapStateToProps)(Motivation);
