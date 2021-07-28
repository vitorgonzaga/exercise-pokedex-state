import React from 'react';

class Button extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { onClick, disabled, children, className } = this.props;
    return (
      <button
        className={ className }
        onClick={ onClick }
        disabled={ disabled }
      >
        { children }
      </button>
    )
  }
}

export default Button
