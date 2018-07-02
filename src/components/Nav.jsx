import React from "react"

class Nav extends React.Component {

    render() {
        return (
            <nav className="blue">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo left">Clicky Game</a>
                    {/* <a href="#!" className="brand-logo center">Click an Image to Begin</a> */}
                    <a href="#!" className="brand-logo right">Current Score: {this.props.currentScore} | High Score: {this.props.highScore}</a>
                </div>
            </nav>
        )
    }

}

export default Nav