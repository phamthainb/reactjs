import React, { Fragment} from 'react';
import FilterList from "./filterList";
import TableList from "./tableList";
import RelativeLink from "./../../bases/shared/relativeLink.js";
import ModalList from "./modalList"
const InvestorsListPage = () => {
    return (
        <Fragment>
        <RelativeLink title="Danh sách nhà đầu tư" />
        <section className="section-list">
            <div className="module module-list">
                <div className="module-header">
                    <h2 className="title"><img src="images/title_img.png" alt=""/> Danh sách nhà đầu tư</h2>
                </div>
                <div className="module-content">
                    
                    <FilterList />
                    <ModalList />
                    <TableList/>
                </div>
            </div>
        </section>
        </Fragment>
    );
}

export default InvestorsListPage;

