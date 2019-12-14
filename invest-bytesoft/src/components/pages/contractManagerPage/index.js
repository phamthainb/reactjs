import React, { Fragment} from 'react';
import FilterList from "./filterList";
import TableList from "./tableList";
import RelativeLink from "./../../bases/shared/relativeLink.js";
const InvestorsList = () => {
    return (
        <Fragment>
        <RelativeLink title="Danh sách hợp đồng"/>
        <section className="section-list">
            <div className="module module-list">
                <div className="module-header">
                    <h2 className="title"><img src="images/title_img.png" alt=""/> Danh sách hợp đồng</h2>
                </div>
                <div className="module-content">   
                    <FilterList />
                    <TableList />
                </div>
            </div>
        </section>
        </Fragment>
    );
}

export default InvestorsList;
