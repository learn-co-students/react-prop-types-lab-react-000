const React = require('react');
class Product extends React.Component{
  render() {
    return (
      <div className="product">
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}  
      </div> 
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white','eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName){
    const weight = props[propName];
    
    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }
    if (isNaN(props[propName])) {
      return new Error('The `weight` prop is not a number.');
    }
    if (!(props[propName] > 80 && props[propName]<300)) {
      return new Error('The `weight` prop should range betwen 80 and 300.');
    }
  }
}

module.exports = Product;
