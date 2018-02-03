import React from 'react';
import {connect} from 'react-redux';
import {talentCount} from '../reducers';
import {Description} from './index'

class TalentList extends React.Component {

  render() {
    const {talents, talentCount} = this.props;
    return(
        <div className='module'>
            <div className='module-header'>TALENT LIST</div>
            <hr />
            <div className='table'>
              <div className='table-header'>
                {['Skill', 'Rank', 'Activation', 'Type', 'Description'].map((heading)=>
                  <div className='table-cell' key={heading}>{heading}</div>
                )}
              </div>
              {Object.keys(talentCount).sort().map((key)=>
                <div className='table-row' key={key}>
                  <div className='table-cell'>{talents[key].name}</div>
                  <div className='table-cell'>{talentCount[key]}</div>
                  <div className='table-cell'>{talents[key].activation ? 'Active' : 'Passive'}</div>
                  <div className='table-cell'>{talents[key].turn}</div>
                  <div className='table-cell'><Description text={talents[key].description}/></div>
                </div>
              )}
            </div>
        </div>
  )};
}

function mapStateToProps(state) {
    return {
        talents: state.talents,
        talentCount: talentCount(state),
    };
}
export default connect(mapStateToProps)(TalentList);
