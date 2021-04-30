import React from 'react';

class Button extends React.Component {
  render() {
    const { type } = this.props

    return (
      <button> {type} </button >
    )
  }
}

export default Button; 