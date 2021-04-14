import React, { Component } from 'react'

export default class GameInfo extends Component {
    render() {
        return (
            <div>

                <div className="display-4">YOU CHOOSE: <span className="text-danger">High</span></div>
                <div className="display-4">WIN: <span className="text-success">10</span></div>
                <div className="display-4">LOSE: <span className="text-primary">2</span></div>

            </div>
        )
    }
}
