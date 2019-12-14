import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const HeaderLeft = () => {
  const navVisible = useSelector(state => state.headerLeft.navVisible);

  return (
    <div id="header-left">
      <Link to="/">
        <div className="logo">
          <img src={navVisible ? "./images/logo.png" : "./images/logo_b.png"} alt="logo" title="Trang chủ" />
        </div>
      </Link>
      <div className="nav-left">
        {ListNavItem.map((item, index) => <NavItem key={index} item={item} />)}
      </div>
    </div>
  );
}

export default HeaderLeft;

const ListNavItem = [
  {
    icon: './images/nav-icon-1.png',
    icon_hover: './images/nav-icon-1_hover.png',
    name: 'trang chủ',
    url: '/'
  },
  {
    icon: './images/nav-icon-2.png',
    icon_hover: './images/nav-icon-2_hover.png',
    name: 'danh sách nhà đầu tư',
    url: '/investor-list'
  },
  {
    icon: './images/nav-icon-3.png',
    icon_hover: './images/nav-icon-3_hover.png',
    name: 'Danh sánh hợp đồng',
    url: '/contract-manager'
  },
  {
    icon: './images/nav-icon-4.png',
    icon_hover: './images/nav-icon-4_hover.png',
    name: 'quản lý rút tiền',
    url: '/withdraw-manager'
  },
  {
    icon: './images/nav-icon-5.png',
    icon_hover: './images/nav-icon-5_hover.png',
    name: 'quản lý thanh lý',
    url: '/liquidation-manager'
  },
  {
    icon: './images/nav-icon-6.png',
    icon_hover: './images/nav-icon-6_hover.png',
    name: 'xử lý đầu tư',
    url: '/invest-process'
  },
  {
    icon: './images/nav-icon-7.png',
    icon_hover: './images/nav-icon-7_hover.png',
    name: 'xử lý rút tiền',
    url: '/withdraw-process'
  },
  {
    icon: './images/nav-icon-8.png',
    icon_hover: './images/nav-icon-8_hover.png',
    name: 'xử lý thanh lý',
    url: '/liquidation-process'
  },
  {
    icon: './images/nav-icon-9.png',
    icon_hover: './images/nav-icon-9_hover.png',
    name: 'tạo tài khoản quản trị',
    url: '/create-account'
  },
  {
    icon: './images/nav-icon-10.png',
    icon_hover: './images/nav-icon-10_hover.png',
    name: 'cấu hình hệ thống',
    url: '/invest-process'
  },
  {
    icon: './images/nav-icon-11.png',
    icon_hover: './images/nav-icon-11_hover.png',
    name: 'Tra cứu lịch sử',
    url: '/history'
  },
]

const NavItem = (props) => {
  const { icon, icon_hover, name, url } = props.item;

  return (
    <NavLink to={url} exact className="nav-item" activeClassName="nav-item__active" title={name}>
      <div className="nav-item-icon" style={{ backgroundImage: `url(${icon})` }} ></div>
      <div className="nav-item-icon_hover" style={{ backgroundImage: `url(${icon_hover})` }} ></div>
      <div className="nav-item-name">{name}</div>
    </NavLink>
  )
}