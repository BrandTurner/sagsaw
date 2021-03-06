import React, { Component } from 'react';
import StaffDetail from './StaffDetail';
import styled from 'styled-components';

class StaffObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setSidebarContent: '',
      sidebarInfo: '',
    };

    this.renderData = this.renderData.bind(this);
    this.sortBy = this.sortBy.bind(this); //  Add to util
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


  renderData() {
    const { staffJson, setSidebarContent } = this.props;

    //staffJson.staff.sort(this.sortBy('name', false, a => a.toUpperCase()));

    return staffJson.staff.map((board, index) => {
      const backgroundImgStyle = {
        background: `url(/bio/${board.image})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      };

      return (
        <StaffDetail
          key={index}
          backgroundStyle={backgroundImgStyle}
          name={board.name}
          image={board.image}
          location={board.location}
          position={board.position}

        />
      );
    });
  }

  render() {
    return (


        <div className="board-flex-grid" style={{margin: "0 !important"}}>
          {this.renderData()}
        </div>

    );
  }
}

export default StaffObject;

const TeamMembers = styled.div`
   margin: auto !important;
`;

const DisplaySection = styled.section `
	font-family: 'AvantGardeDemi';
	display: flex;
	align-items: center;
	justify-content: center;
	color: #e91e63;
	font-size: 48px;
	padding-top: 50px;
`;


const SectionTitle = styled.h3`
  color: #212121;
  font-family: 'Avenir';
  font-weight: 700;
  margin: 0 auto !important;
  margin-bottom: .5rem;
  line-height: 1.4;
  font-size: 31px;
  float: left;
  border-bottom: 5px solid #7C4DFF;
`;
