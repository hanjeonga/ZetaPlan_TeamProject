import React from 'react';
import CompanyHeader from '../../component/Detail/CompanyHeader';
import DetailFooter from '../../component/Detail/DetailFooter';

const CompanyManpower = ({title, sub}) => {
  return (
    <div>
      <CompanyHeader title={title} sub={sub}/>
      <DetailFooter />
    </div>
  );
};

export default CompanyManpower;