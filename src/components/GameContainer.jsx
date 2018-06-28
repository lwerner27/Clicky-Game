import React from "react"
import ImageButton from './ImageButton.jsx'
import Nav from "./Nav.jsx"
import champs from '../paths.js'

const shuffledChamps = shuffle(champs)

class GameContainer extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0
    }


    render() {
        return (
            <div>
                <Nav />

                {
                    shuffledChamps.map((champ) => {
                        return <ImageButton imgPath={champ.path} champName={champ.name} />
                    })
                }
                
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