import React, { Fragment} from 'react';
import FilterList from "./filterList";
import TableList from "./tableList";
import RelativeLink from "./../../bases/shared/relativeLink.js";
const WithdrawManagerPage = () => {
    return (
        <Fragment>
        <RelativeLink title="Quản lý rút tiền"/>
        <section className="section-list">
            <div className="module module-list">
                <div className="module-header">
                    <h2 className="title"><img src="images/title_img.png" alt=""/> Quản lý rút tiền</h2>
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

export default WithdrawManagerPage;
