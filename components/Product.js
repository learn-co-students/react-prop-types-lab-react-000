import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="product">
                <p>Name: {this.props.name}</p>
                {this.props.producer ? <small>{this.props.producer}</small> : null}
                <p>Color: {this.props.color}</p>
                <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
                <p>Weight: {this.props.weight}</p>
            </div>
        );
    }
}

Product.defaultProps = {
    hasWatermark: false
}

Product.propTypes = {
    name: React.PropTypes.string.isRequired,
    producer: React.PropTypes.string,
    hasWatermark: React.PropTypes.bool,
    color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: (props, propName) => {
        if (props[propName] === undefined) return new Error("The 'weight' prop is undefined'")
        if (isNaN(props[propName])) return new Error("The 'weight' prop is not a number")
        if (!(props[propName] >= 80 && props[propName] <= 300)) return new Error("The 'weight' prop should range between 80 and 300");
    }
}

module.exports = Product;
