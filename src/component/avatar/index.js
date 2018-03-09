import React from 'react';

export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <img src={this.props.avatar} />
      </div>
    );
  }
}
