import React from 'react';
import spider from 'images/spider_home.svg';
import Flag from 'components/home/Flag';
import Button from 'components/common/Button';
import Logo from 'components/layout/Logo';
import Image from 'images/one.jpg';
import styled from 'styled-components';

const BoardCover = () =>  <div>
                            <DisplaySection>
                            OUR BOARD
                            </DisplaySection>
                            <Instructions>
                              Click on a board member to open their bio
                              </Instructions>
                          </div>;

export default BoardCover;

const DisplaySection = styled.div`
	font-family: 'AvantGardeDemi';
	display: flex;
	align-items: center;
	justify-content: center;
	color: #e91e63;
	font-size: 48px;
	padding-top: 50px;
`;

const Instructions = styled.div`
  margin-top: 20px;
  font-size: 20px !important;
  	font-family: 'AvantGarde';
	display: flex;
	align-items: center;
	justify-content: center;
	color: #e91e63;
`;

const Row = styled.div`
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-ms-flex-wrap: wrap;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	min-height: 430px;
`;

const POne = styled.p`
	font-size: 16px !important;
	font-family: 'AvantGarde' !important;
	text-transform: uppercase;
	letter-spacing: 1px !important;
	line-height: 28px !important;
	font-weight: bold !important;
`;
const WeAreStrong = styled.strong`
	font-family: 'AvantGardeLight' !important;
	font-weight: 900 !important;
`;
const PTwo = styled.p`
	font-size: 32px !important;
	font-family: 'AvantGardeLight' !important;
	text-transform: uppercase;
	font-weight: 900 !important;
	letter-spacing: 0.5px !important;
	line-height: 40px !important;
`;

const HeroContent = styled.div`
	z-index: 10;
	padding: 40px 0;
	p {
		text-align: left !important;
	}
`;

const ColMdSeven = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;

	@media (min-width: 768px) {
		-ms-flex: 0 0 58.333333%;
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
`;

const ColMdFive = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	-ms-flex-item-align: left !important;
	align-self: left !important;
	float: right !important;
	z-index: 999;

	@media (min-width: 768px) {
		flex: 0 0 41.666667%;
		max: 41.666667%;
	}
`;

const LeftAlign = styled.p`
	text-align: left !important;
`;

const Container = styled.div`
position: relative;
top: -480px;
left: 50%

    padding-right: 15px;
    padding-left: 15px;
    width: 35%;
    min-height: 430px;
  @media(min-width: 1200 px)
   {
    max-width: 1220 px;
  }
@media(min-width: 992 px)
   {
    max-width: 960 px;
  }
@media(min-width: 768 px)
   {
    max-width: 720 px;
  }
@media(min-width: 576 px)
   {
    max-width: 540 px;
  }
@media(min-width: 1200 px)
   {
    max-width: 1140 px;
  }
@media(min-width: 992 px)
   {
    max-width: 960 px;
  }
@media(min-width: 768 px)
   {
    max-width: 720 px;
  }
@media(min-width: 576 px)
   {
    max-width: 540 px;
  }
`;

const SlantedButton = styled.button`
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0px;
	color: #ffffff;
	font-size: 16px;
	background: #e91e63;
	padding: 0 40px;
	text-decoration: none;
	-ms-transform: skewX(20deg);
	-webkit-transform: skewX(20deg);
	transform: skewX(20deg);
	height: 48px !important;
	display: block !important;

	&:hover {
		background: #c2185b;
		text-decoration: none;
	}
`;

const SlantedButtonContent = styled.span`
	-ms-transform: skewX(-20deg);
	-webkit-transform: skewX(-20deg);
	transform: skewX(-20deg);
	display: inline-block;
	vertical-align: middle;
	font-family: 'AvantGarde';
	font-weight: 900;
	text-transform: uppercase;
`;
