import React from 'react';
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import './subHeader.css';
import Header from '../Header/Header';
import SubChatBox from './../ChatBox/SubChatBox';

const IndustryHeader = ({title, sub}) => {
  return (
    <div id='SubHeader'>
      <Header />
      <div className='company-header-banner industry-header-banner'>
        <div className='company-header-title-wrap'>
          <h2 className='company-header-title'>Industry</h2>
          <p className='company-header-des'>지구상의 모든 기업들의 시작과 성장과 안정을 위한 컨설팅 솔루션 제공</p>
        </div>
        <nav className='company-header-nav'>
          <a href='/'><AiFillHome size="30px" /></a>
          <span className='sub-nav-depth1-title'>{title}<AiOutlineDown />
            <ul className='sub-nav-depth1'>
              <li><a href="/company">Company</a></li>
              <li><a href="/mna">M&A/IPO</a></li>
              <li><a href="/invest">Invest</a></li>
              <li><a href="/abroad">Abroad</a></li>
              <li><a href="/industry">Industry</a></li>
              <li><a href="/notice">Notice</a></li>
            </ul>
          </span>
          <span className='sub-nav-depth2-sub'>{sub}<AiOutlineDown />
            <ul className='sub-nav-depth2'>
              <li><a href="/industry">산업 별 이슈</a></li>
              <li><a href="/industry/support">지원사업</a></li>
              <li><a href="/industry/confirm">기업 인증</a></li>
              <li><a href="/industry/transfer">기술 이전</a></li>
              <li><a href="/industry/trade">기술 거래</a></li>
              <li><a href="/industry/value">가치 평가</a></li>
              <li><a href="/industry/credit">신용 평가</a></li>
            </ul>
          </span>
        </nav>
      </div>
      <SubChatBox />
    </div>
  );
};

export default IndustryHeader;