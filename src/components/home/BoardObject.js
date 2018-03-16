import React, { Component } from 'react';
import BoardDetail from './BoardDetail';

class BoardObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setSidebarContent: '',
      sidebarInfo: '',
    };

    this.renderData = this.renderData.bind(this);
    this.sortBy = this.sortBy.bind(this); //  Add to util
    this.setSider = this.setSider.bind(this);
  }

  componentWillMount() {
    this.setState({
      setSidebarContent: this.props.setSidebarContent,
    });
  }

  sortBy(field, reverse, primer) {
    const key = primer
      ? function (x) {
        return primer(x[field]);
      }
      : function (x) {
        return x[field];
      };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
    };
  }

  setSider(sidebarInfo) {
    this.props.setSidebarContent(sidebarInfo);
  }
  renderData() {
    const { boardJson, setSidebarContent } = this.props;

    boardJson.boardMembers.sort(this.sortBy('name', false, a => a.toUpperCase()));

    return boardJson.boardMembers.map((board, index) => {
      const backgroundImgStyle = {
        background: `url(/bio/${board.image})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      };

      return (
        <BoardDetail
          key={index}
          backgroundStyle={backgroundImgStyle}
          name={board.name}
          image={board.image}
          location={board.location}
          position={board.position}
          bio={board.bio}
          setSidebarContent={this.props.setSidebarContent}
          setSidebarOpen={this.props.openSidebar}
        />
      );
    });
  }

  render() {
    return <div className="board-flex-grid">{this.renderData()}</div>;
  }
}

export default BoardObject;
