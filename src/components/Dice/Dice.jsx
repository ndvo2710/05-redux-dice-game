import React, { Component } from 'react'

export default class Dice extends Component {
    render() {
        return (
            <div>
                <img style={{ width: 50, height: 50 }} src="./img/1.png" alt="1.png" className="ml-2" />
                <img style={{ width: 50, height: 50 }} src="./img/5.png" alt="5.png" className="ml-2" />
                <img style={{ width: 50, height: 50 }} src="./img/6.png" alt="6.png" className="ml-2" />
            </div>
        )
    }
}
