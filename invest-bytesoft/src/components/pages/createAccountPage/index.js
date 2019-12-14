import React, { Fragment} from 'react';
import CreateForm from "./createForm";
import TableList from "./tableList";
import RelativeLink from "./../../bases/shared/relativeLink.js";
import ModalList from "./modalList"
const CreateAccountPage = () => {
    return (
        <Fragment>
        <RelativeLink title="Tạo tài khoản quản trị" />
        <section className="section-list">
            <div className="module module-list">
                <div className="module-header">
                    <h2 className="title"><img src="images/title_img.png" alt=""/> Tạo tài khoản quản trị</h2>
                </div>
                <div className="module-content">
                    <CreateForm />
                    <ModalList />
                    <TableList />
                </div>
            </div>
        </section>
        </Fragment>
    );
}

export default CreateAccountPage;
