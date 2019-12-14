import React, { Fragment, useState, useEffect } from 'react';
import { HeaderLeft, Header, Footer, HomePage, InvestorsListPage, ContractManagerPage, LiquidationManagerPage, WithdrawManagerPage, HistoryPage, CreateAccountPage, InvestProcessPage, WithdrawProcessPage, LiquidationProcessPage } from '../../components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Layout = () => {
  const navVisible = useSelector(state => state.headerLeft.navVisible);
  const dispatchToggleNav = useDispatch();
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    if (width >= 992) {
      document.getElementsByClassName("main-left")[0].style.transform = "translateX(0%)";
    } else {
      document.getElementsByClassName("main-left")[0].style.transform = "translateX(-100%)";
      dispatchToggleNav({ type: "CHANGE_TOGGLE_NAV", value : true });
    }
  }, [width]);

  return (
    <Fragment>
      <Router>
        <div className={`${navVisible ? "main-right__big" : "main-right__thin"} main-right`} >
          <Header />
          <main id="main">
            <div className="main-content">
              <Switch>
                <Route path="/" exact children={() => <HomePage />} />
                <Route path="/investor-list" children={() => <InvestorsListPage />} />
                <Route path="/contract-manager" children={() => <ContractManagerPage />} />
                <Route path="/liquidation-manager" children={() => <LiquidationManagerPage />} />
                <Route path="/withdraw-manager" children={() => <WithdrawManagerPage />} />
                <Route path="/liquidation-process" children={() => <LiquidationProcessPage />} />
                <Route path="/history" children={() => <HistoryPage />} />
                <Route path="/create-account" children={() => <CreateAccountPage />} />
                <Route path="/invest-process" children={() => <InvestProcessPage />} />
                <Route path="/withdraw-process" children={() => <WithdrawProcessPage />} />
                {/* <Route path="/" exact children={<HomePage />} /> */}
              </Switch>
            </div>
          </main>
          <Footer />
        </div>
        <div className={`${navVisible ? "main-left__big" : "main-left__thin"} main-left`}>
          <HeaderLeft />
        </div>
      </Router>
    </Fragment>
  );
}

export default Layout;
