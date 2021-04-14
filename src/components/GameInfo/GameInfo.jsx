import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameInfo extends Component {
    render() {
        console.log(this.props)
        const { isLow, winScore, totalGame } = this.props;
        return (
            <div>

                <div className="display-4">YOU CHOOSE: <span className="text-danger">{isLow ? 'Low' : 'High'}</span></div>
                <div className="display-4">WIN: <span className="text-success">{winScore}</span></div>
                <div className="display-4">Total Game: <span className="text-primary">{totalGame}</span></div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLow: state.diceGameReducer.isLow,
        winScore: state.diceGameReducer.winScore,
        totalGame: state.diceGameReducer.totalGame,
    }
}

export default connect(mapStateToProps)(GameInfo);
