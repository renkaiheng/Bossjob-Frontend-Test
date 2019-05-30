import React from 'react';
import ReactPaginate from 'react-paginate';
import NextIcon from '../../../assets/images/right-arrow.svg';
import PreviousIcon from '../../../assets/images/left-arrow.svg';
import './Paginate.css';
const Paginate = props => {
    console.log(props.totalPage)
    return (
        <React.Fragment>
            <ReactPaginate 
                previousLabel={<span><img src={PreviousIcon} alt="prev" width="10px" height="10px"/></span>}
                nextLabel={<span><img src={NextIcon} alt="next" width="10px" height="10px"/></span>}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={props.totalPage}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                onPageChange={props.handlePageClick}
                activeClassName={'active'}
            />
        </React.Fragment>
    )
}

export default Paginate