import React from 'react';
import {connect} from 'react-redux';
import {Col, Row, Table} from 'reactstrap';
import {talentCount} from '../reducers';
import {Description} from './index'

class TalentList extends React.Component {

    render() {
        const {archetype, archetypes, archetypeTalents, talents, talentCount} = this.props;
        return (
            <Col lg='12'>
                <Row className='justify-content-end'><h5>TALENT LIST</h5></Row>
                <hr/>
                <Table>
                    <thead>
                    <tr className='text-center'>
                        {['Talent', 'Rank', 'Activation', 'Type', 'Description'].map((heading) =>
                            <th key={heading}>{heading}</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {(archetypes[archetype] && archetypes[archetype].talents) &&
                    archetypes[archetype].talents.sort().map(key =>
                        archetypeTalents[key] &&
                        <tr key={key}>
                            <td>{archetypeTalents[key].name}</td>
                            <td/>
                            <td className='text-center'>{archetypeTalents[key].activation ? 'Active' : 'Passive'}</td>
                            <td className='text-center'>{archetypeTalents[key].turn}</td>
                            <td><Description text={archetypeTalents[key].description}/></td>
                        </tr>
                    )}
                    {Object.keys(talentCount).sort().map(key =>
                        talents[key] &&
                        <tr key={key}>
                            <td>{talents[key].name}</td>
                            <td className='text-center'>{talentCount[key]}</td>
                            <td className='text-center'>{talents[key].activation ? 'Active' : 'Passive'}</td>
                            <td className='text-center'>{talents[key].turn}</td>
                            <td><Description text={talents[key].description}/></td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Col>
        )
    };
}

function mapStateToProps(state) {
    return {
        talents: state.talents,
        archetype: state.archetype,
        archetypes: state.archetypes,
        archetypeTalents: state.archetypeTalents,
        talentCount: talentCount(state),
    };
}

export default connect(mapStateToProps)(TalentList);
