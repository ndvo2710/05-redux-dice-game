import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dice from '../Dice/Dice'
import GameInfo from '../GameInfo/GameInfo'
import './DiceGame.css'

class DiceGame extends Component {
    render() {
        return (
            <div className="game">
                <div className="title-game text-center mt-5 display-4">Dice Game</div>

                <div className="row text-center mt-5">
                    <div className="col-5">
                        <button onClick={() => {
                            const isLow = false;
                            this.props.betting(isLow);
                        }} className="btnGame">High</button>
                    </div>
                    <div className="col-2">
                        <Dice />
                        <div className="display2">High &gt; 11</div>
                        <div className="display2">Low &lt;= 11</div>
                    </div>
                    <div className="col-5">
                        <button onClick={() => {
                            const isLow = true;
                            this.props.betting(isLow);
                        }} className="btnGame">Low</button>
                    </div>
                </div>

                <div className="game-info text-center">
                    <GameInfo />
                    <button className="btn btn-success p-2 display-4 mt-5">
                        Play Game
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        betting: (isLow) => {
            // creat action
            let action = {
                type: "BETTING",
                isLow
            };
            //  send to reducer
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(DiceGame)