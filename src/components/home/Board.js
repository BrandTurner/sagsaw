import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import Button from 'components/common/Button';
import Logo from 'components/layout/Logo';
import boardInfo from './members.json';
import BoardObject from './BoardObject';
import Sidebar from 'react-sidebar';

const siderStyles = {
  root: {
    position: 'absolute',
    top: '79px',
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  sidebar: {
    zIndex: 3,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
    backgroundColor: 'white',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
  },
};

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarLocation: '',
      sidebarName: '',
      sidebarPosition: '',
      sidebarBio: '',
      sidebarInfo: {},
      sidebar: {},
    };
    this.info = this.info.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
    this.closeSider = this.closeSider.bind(this);
    this.setSidebarContent = this.setSidebarContent.bind(this);
  }

  info() {
    console.log('rar');
  }

  componentWillMount() {
    document.addEventListener('click', (e) => {
      console.log(e.target);
    });
    const el1 = this.refs.sider;
    const el2 = ReactDOM.findDOMNode(this.refs.sider);
    console.log(el1, el2);
  }

  menuButtonClick(ev) {
    console.log('rar');
    ev.preventDefault();
    this.onSetSidebarOpen(!this.state.sidebarOpen);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  closeSider() {
    this.setState({
      sidebarOpen: false,
    });
  }

  setSidebarContent(sidebarInfo) {
    this.setState({
      sidebarLocation: sidebarInfo.sidebarLocation,
      sidebarName: sidebarInfo.sidebarName,
      sidebarPosition: sidebarInfo.sidebarPosition,
      sidebarBio: sidebarInfo.sidebarBio,
      sidebarImage: sidebarInfo.sidebarImage,
      sidebarInfo,
    });
    console.log('info', sidebarInfo);
    console.log('all set!');
  }

  render() {
    const buttonStyle = {
      backgroundColor: '#7C4DFF',
    };

    const buttonStyleTrans = {
      backgroundColor: 'transparent',
      border: '2px solid white',
    };

    const backgroundImageStyle = {
      backgroundImage:
				'url(https://acumen.org/wp-content/uploads/2017/04/Andrea-Soros-580x460.png)',
    };

    const backgroundImgStyle = {
      background: 'url(https://acumen.org/wp-content/uploads/2017/04/Andrea-Soros-580x460.png)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };

    const flexItem = {
      background: 'tomato',
      padding: '5px',
      width: '200px',
      height: '150px',
      marginTop: '10px',

      lineHeight: '150px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '3em',
      textAlign: 'center',
    };

    const sideBarContent = (
      <div className="sider" id="sider" ref="sider">
        <div className="profile" onClick={this.closeSider}>
          <div className="top-section">
            <div>
              <img src={this.state.sidebarImage || ''} className="sider-image" />
            </div>
            <div>
              <h2 className="board-loc">{this.state.sidebarLocation}</h2>
              <span className="about-about-desc" onClick={this.closeSider}>
                {this.state.sidebarName || 'rar'}
              </span>
              <span className="about-about-board-desc">{this.state.sidebarPosition}</span>
            </div>
          </div>
          <div className="bio">
            <p
              className="about-about-desc"
              dangerouslySetInnerHTML={{ __html: this.state.sidebarBio }}
            />
          </div>
        </div>
      </div>
    );
    return (
      <Sidebar
        sidebar={sideBarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={siderStyles}
      >

          <section className="home__cover full">
            <div className="container about_cover__content">
              <Logo className="cover__logo" />
              <div className="header-hero">
                <h2>The Board</h2>
                <p>hello, world</p>
              </div>

              <div className="cover__buttons">
                <Button
                  empty
                  text="Download"
                  icon="download"
                  link="https://github.com/api-platform/api-platform/releases/latest"
                />
                <Button text="Get started" icon="flag" link="/docs/distribution" />
              </div>
            </div>
          </section>

          <section className="home__board home__ecosystem home__sag">
            <BoardObject
              boardJson={boardInfo}
              setSidebarContent={this.setSidebarContent}
              openSidebar={this.onSetSidebarOpen}
            />
          </section>

      </Sidebar>
    );
  }
}

export default Board;
