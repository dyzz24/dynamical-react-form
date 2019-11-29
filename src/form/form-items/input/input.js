import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super();
  }

  valueChange = (e, formElem) => {
      this.props.valueChange(e, formElem);
  }

  render() {

    return (
      <input
      onChange={(e, f) => this.valueChange(e, this.props.formElem)}
      name={this.props.formElem.name}
      className={!this.props.formElem.valid ? 'invalid' : ''}
    ></input>
    );
  }
}
