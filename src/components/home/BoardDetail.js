import React, { Component } from 'react';

class BoardDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarLocation: '',
      sidebarName: '',
      sidebarPosition: '',
      sidebarBio: '',
      sidebarImage: '',
    };

    this.setContent = this.setContent.bind(this);
  }

  componentWillMount() {
    this.setState({
      sidebarLocation: this.props.location,
      sidebarName: this.props.name,
      sidebarPosition: this.props.position,
      sidebarBio: this.props.bio,
      sidebarImage: this.props.image,
    });
    // console.log(this.props)
  }

  setContent() {
    const content = {
      sidebarLocation: this.props.location,
      sidebarName: this.props.name,
      sidebarPosition: this.props.position,
      sidebarBio: this.props.bio,
      sidebarImage: `/bio/${this.props.image}`,
    };
    this.props.setSidebarContent(content);
    this.props.setSidebarOpen(true);
    // console.log(content);
    //    console.log(this.props);
  }

  render() {
    return (
      <div className="board-flex-col media-object-board" onClick={this.setContent}>
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

export default BoardDetail;
