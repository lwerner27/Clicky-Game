import React from "react"

class Nav extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0
    }

    render() {
        return (
            <nav className="blue">
                <div class="nav-wrapper">
                    <a href="#!" className="brand-logo left">Clicky Game</a>
                    <a href="#!" className="brand-logo center">Click an Image to Begin</a>
                    <a href="#!" className="brand-logo right">Current Score: {this.state.currentScore} | High Score: {this.state.highScore}</a>
                </div>
            </nav>
        )
    }

}

export default Nav