const React = require('react');

class Product extends React.Component {
  render(){
    return(
      <div>
        <li>
          <p>
            Name: {this.name}
          </p>
          <p>
            Producer: {this.producer}
          </p>
          <p>
            Watermaker?: {this.hasWatermark ? 'Yes' : 'No'}
          </p>
          <p>
            Color: {this.color}
          </p>
          <p>
            Weiht: {this.weight}
          </p>
        </li>
      </div>
    )
  }

}

Product.defaultProps = {
  hasWatermark: false
}

let weightProp = function(props, propName, componentName) {
  if (props[propName] == undefined){
    return new Error ('Weight is required')
    if (typeof(props[propName]) != 'number'){
      return new Error ('Weight must be a number')
      if (props[propName] < 80 || props[propName] > 300){
        return new Error ('Weiht must be beteween 80 and 300');
      }
    }
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightProp
}

module.exports = Product;
