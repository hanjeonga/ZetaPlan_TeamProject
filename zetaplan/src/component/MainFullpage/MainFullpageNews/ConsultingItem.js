import React from 'react';
import './BoardItem.css';

const ConsultingItem = ({ item }) => {
  return (
    <div className='product-item'>
      <a href={item.link}>
        <p className='item-title'>{item.title}</p>
        <p className='item-date'>{item.date}</p>
      </a>
    </div>
  );
};

export default ConsultingItem;
