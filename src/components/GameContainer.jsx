import React from "react"
import ImageButton from './ImageButton.jsx'

class GameContainer extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0
    }

    render() {
        return (
            <div className="container">
                <ImageButton imgPath="/assets/LeeSin.png" />
                <ImageButton imgPath="/assets/Janna.png" />
            </div>
        )
    }

}

export default GameContainer