import React, { Component } from 'react';

class StaffDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board-flex-col media-object-board" >
        <div className="hover-box-content">
          <div className="box-content-image" style={this.props.backgroundStyle} />
          <div className="box-content">
            <span className="board-loc">{this.props.location}</span>
            <h2 className="about-about-desc board-mod">{this.props.name}</h2>
            <h2 className="board-about-about-board-desc">{this.props.position}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffDetail;
