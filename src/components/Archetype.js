import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { changeData } from '../actions';
import {ArchetypeStats} from './index';
import popup from 'react-popup';

class Archetype extends React.Component {

  handleSelect = (event) => {
    let value = event.target.value==='' ? null : event.target.value;
    this.props.changeData(value, 'archetype');
    this.props.changeData({}, 'archetypeSpecialSkills');
  };

  render() {
    const {archetype, archetypes} = this.props;
    return (
      <div className='inlineblock' style={{textAlign: 'left'}}>
        <select value={archetype ? archetype : ''} onChange={this.handleSelect}>
          <option value=''/>
          {Object.keys(archetypes).map((key)=>
            <option value={key} key={key}>{archetypes[key].name}</option>
          )}
        </select>
        <ArchetypeStats />
          <button onClick={popup.close}>Close</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        archetypes: state.archetypes,
        archetype: state.archetype,
    };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({changeData}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Archetype)
