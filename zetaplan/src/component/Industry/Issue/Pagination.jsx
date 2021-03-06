import React from 'react';
import './pagination.css'

const Pagination = ({ total,page,setPage,LIST_PER_PAGE}) => {
    const PagesNum =  Math.ceil(total/LIST_PER_PAGE ) ; 
    const pagesNumArray = new Array(PagesNum) ; 
   //pagesNumArray.fill('a',5,8);
    console.log(pagesNumArray)
    return (
        <div className='paginationBox'>
                <button className='PrevButton' onClick={()=>{setPage(page-1)}} disabled={page === 1}  >
                    이전
                </button>
                {
                   pagesNumArray.fill().map((ele,i)=>{
                        return(
                            <button className = 'PageNumButton' 
                              key={i+1}
                              onClick={() => setPage(i + 1)}
                             /*  className={page === i + 1 ? "active" : null} */
                            >
                                {i + 1}
                            </button>
                        )
                    })
                }
               
                
                <button className='NextButton' onClick={()=>{setPage(page+1)}} disabled={page === PagesNum} >
                    이후
                </button>
        </div>
        
    );
};

export default Pagination;

