import React from "react"

const divStyle = {
    display: 'inline-block',
    margin: '20px'
}

class ImageButton extends React.Component {
    render() {
        return (
            <a href="#!" style={divStyle}>
                <img src={this.props.imgPath} alt="" className="responsive-img" />
            </a>
        )
    }
}

export default ImageButton