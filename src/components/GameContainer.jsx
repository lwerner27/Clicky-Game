import React from "react"
import ImageButton from './ImageButton.jsx'
import Nav from "./Nav.jsx"
import champs from '../paths.js'

class GameContainer extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0,
        clickedChamps: []
    }

    handleClick = (event) => {
        let clickedChamp = event.target.getAttribute('data');

        if (this.state.clickedChamps.includes(clickedChamp)) {
            this.setState({
                currentScore: 0,
                clickedChamps: []
            })
        } else {
            this.setState(prevState => {
                let newArr = prevState.clickedChamps
                newArr.push(clickedChamp)

                let newScore = this.state.currentScore + 1

                if (newScore < prevState.highScore) {
                    newScore = prevState.highScore
                }

                return {
                    clickedChamps: newArr, 
                    currentScore: prevState.currentScore + 1,
                    highScore: newScore
                }
            })
        }
        
    }

    setupGame = (array) => {
        let shuffledArray = shuffle(array)
        return (
            shuffledArray.map((champ) => {
                return (
                    <ImageButton 
                        clickHandler={this.handleClick.bind()}
                        imgPath={champ.path} 
                        key={champ.name} 
                        data={champ.name} 
                    />
                )
            })
        )
    }


    render() {
        return (
            <div>
                <Nav currentScore={this.state.currentScore} highScore={this.state.highScore}/>
                <div className="container center">
                    {/* { this.setupGame(champs) } */}
                    <ImageButton 
                        clickHandler={this.handleClick.bind()}
                        imgPath="../../public/assets/bard.png" 
                        key="Bard" 
                        data="Bard"
                    />
                </div>

            </div>
        )
    }

}

// Function for shuffling and Array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default GameContainer