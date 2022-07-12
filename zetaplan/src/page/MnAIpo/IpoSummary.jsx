import React from 'react';
import MAHeader from '../../component/Detail/MAHeader';
import DetailFooter from './../../component/Detail/DetailFooter';

const IpoSummary = ({title, sub}) => {
  return (
    <div>
      <MAHeader title={title} sub={sub}/>
      <DetailFooter />
    </div>
  );
};

export default IpoSummary;