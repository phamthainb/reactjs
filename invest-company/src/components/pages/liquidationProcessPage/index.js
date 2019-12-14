import React, { Fragment,useState } from 'react';
import FilterList from "./filterList";
import TableList from "./tableList";
import RelativeLink from "./../../bases/shared/relativeLink.js";
import ModalList from "./modalList"
const LiquidationProcessPage = () => {
    const [toggleModal,setToggleModal] = useState(false);
    const [keyword,setKeyword]=useState("");
    const onClick = (data)=>{
       setToggleModal(data);
        
   }
   const filterList = (data)=>{
    setKeyword(data);
   }
    return (
        <Fragment>
            <RelativeLink />
            <section className="section-list section-andlingLiquidation">
                <div className="module module-list">
                    <div className="module-header">
                        <h2 className="title"><img src="images/title_img.png" alt="" /> Xử lý thanh lý</h2>
                    </div>
                    <div className="module-content">
                        <FilterList filterList={(data)=>filterList(data)} />
                        <ModalList onClick={(data)=>onClick(data)} toggleModal={toggleModal} setToggleModal={setToggleModal} />
                        <TableList onClick={(data)=>onClick(data)} dataFilter={keyword} />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default LiquidationProcessPage;
