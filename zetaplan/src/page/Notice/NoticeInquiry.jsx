/* 문의하기 */
import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './NoticeList.css';
import { IoIosSearch } from 'react-icons/io';
import BoardSearch5 from '../../component/Search/BoardSearch5';

const NoticeInquiry = ({ title, sub }) => {
  const [lists, setLists] = useState([]);
  const LIST_PER_PAGE = 20; // 한장에 보여질 리스트 수
  const [page, setPage] = useState(1); // 페이지
  const startNum = (page - 1) * LIST_PER_PAGE; // 0 10 20 30
  const endNum = startNum + LIST_PER_PAGE; // 10 20 30 40

  useEffect(() => {
    fetch('/data/qa.json')
      .then((response) => response.json())
      .then((response) => setLists(response));
  }, []);

  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='SubInner'>
        <div className='company-title-container'>
          <h2 className='company-title'>문의하기</h2>
          <div className='company-title-line'></div>
          <div class='board-search-container'>
            <form method='post' name='search' action='/notice'>
              <table class='pull-right'>
                <tr>
                  <td>
                  </td>
                  <td>
                    <BoardSearch5 />
                  </td>
                  <td></td>
                </tr>
              </table>
            </form>
          </div>
          <div className='list-box'>
            <div className='board-lists title'>
              <span className='id-name'>번호</span>
              <span className='list-title'>제목</span>
              <span className='list-author'>작성자</span>
              <span className='list-date'>날짜</span>
              <span className='list-view'>조회수</span>
            </div>
            <ul className='notice-list'>
              {[...lists]
                .reverse()
                .slice(startNum, endNum)
                .reverse()
                .map(({ num, title, author, date, view, link }) => {
                  return (
                    <li className='board-lists' key={num}>
                      <a href={link}>
                        <span className='id-name'>{num}</span>
                        <span className='list-title'>{title}</span>
                        <span className='list-author'>{author}</span>
                        <span className='list-date'>{date}</span>
                        <span className='list-view'>{view}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
            <a href='/notice/inquiryform'>
              <button className='inquire-button'>문의하기</button>
            </a>
            <Pagination
              total={lists.length}
              page={page}
              setPage={setPage}
              LIST_PER_PAGE={LIST_PER_PAGE}
            />
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default NoticeInquiry;
