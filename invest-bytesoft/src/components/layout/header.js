import React, { useState,  } from 'react';
import Icofont from 'react-icofont';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatchToggleNav = useDispatch();
  const [toggleInfo, setToggleInfo] = useState(false);
  let styleInfo = {
    display: toggleInfo ? "block" : "none",
    // height: toggleInfo ? "" : "0px",
  }
 
  return (
    <div id="header">
      <div className="btn-active-nav" onClick={() => {
        dispatchToggleNav({ type: "TOGGLE_NAV" });
      }}>
        <Icofont icon="navigation-menu" />
      </div>
      <div className="nav-mobile">
        <div className="logo-mobile">
          <img src="./images/logo.png" alt="logo" title="logo" />
        </div>
      </div>
      <div className="header-task">
        <div className="task-search">
          <input type="text" />
          <Icofont icon="search-2" className="icon-color" />
        </div>
        {/* <div className="task-notify">
            <Icofont icon="alarm" className="icon-color" />
          </div> */}
          
        <div className="task-info" onClick={() => setToggleInfo(!toggleInfo)}>
          <div className="info-name">Nguyen Van A</div>
          <div className="info-avatar">
            <img src="./images/avatar.png" alt="avatar member" />
          </div>
          <div className="info-mark"></div>
        </div>

        <div className="more-infomation" style={styleInfo} onMouseLeave={()=>setToggleInfo(false)} >
          <ul className="list">
            <li className="list--item"> <Icofont icon="ui-settings"/> <span>Thông tin</span></li>
            <li className="list--item"><Icofont icon="people"/><span>Chỉnh sửa</span></li>
            <li className="list--item"><Icofont icon="ui-message"/><span>Thêm</span></li>
            <li className="list--item"><Icofont icon="logout"/><span>Đăng xuất</span></li>
          </ul>
        </div>
        <div className="btn-active-nav-mobile" onClick={() => {
          let navBar = document.getElementsByClassName("main-left")[0].style.transform;
          if (navBar === "" || navBar === "translateX(-100%)") {
            document.getElementsByClassName("main-left")[0].style.transform = "translateX(0%)";
          } else { document.getElementsByClassName("main-left")[0].style.transform = "translateX(-100%)"; }
        }}   >
          <Icofont icon="navigation-menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;
