import './style.css'
import React from 'react';


class Button extends React.Component {
  render() {
    return (
      <button id="ButtonComponent" className={this.props.className}>
        {this.props.img && <img src={this.props.img} />}
        <span>{this.props.children}</span>
      </button>
    );
  }
}
export default Button;