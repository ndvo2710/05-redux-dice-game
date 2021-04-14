import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dice extends Component {
    renderDice = () => {
        const { diceArray } = this.props;
        return diceArray.map((dice, index) => {
            return (
                <img key={index} style={{ width: 50, height: 50 }} src={dice.img} alt={`${dice.face}.png`} className="ml-2" />
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderDice()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        diceArray: state.diceGameReducer.diceArray,
    }
}

export default connect(mapStateToProps)(Dice);