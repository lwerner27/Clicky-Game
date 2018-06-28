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
            <a href="#!"  data-value={this.props.champName} style={divStyle}>
                <img src={this.props.imgPath} alt="" className="responsive-img" />
            </a>
        )
    }
}

export default ImageButton