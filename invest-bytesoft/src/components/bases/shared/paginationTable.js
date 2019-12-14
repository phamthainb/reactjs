import React from 'react';

const PaginationTable = () =>  {
    return(
        <div className="pagination">
            <ul className="pagination-list">
                <li className="pagination-list__item">&#60;</li>
                <li className="pagination-list__item">1</li>
                <li className="pagination-list__item">2</li>
                <li className="pagination-list__item">3</li>
                <li className="pagination-list__item">4</li>
                <li className="pagination-list__item no-border">...</li>
                <li className="pagination-list__item">17</li>
                <li className="pagination-list__item">&#62;</li>
            </ul>
        </div>
    )
}
 export default PaginationTable;