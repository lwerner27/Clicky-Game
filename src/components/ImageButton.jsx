import React from "react"

const divStyle = {
    display: 'inline-block',
    marginRight: '75px',
    marginLeft: '75px',
    marginTop: '20px'
}

class ImageButton extends React.Component {
    render() {
        return (
            <img src={this.props.imgPath} alt=""  data-value={this.props.champName} onClick={this.props.handleClick} className="responsive-img" style={divStyle}/> 
        )
    }
}

export default ImageButton