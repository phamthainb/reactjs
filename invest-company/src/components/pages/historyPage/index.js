import React, { Fragment, useState} from 'react';
import FilterList from "./filterList";
import RelativeLink from "./../../bases/shared/relativeLink.js";
import { BonusTableList, BonusWithdrawTableList, InterestTableList, InterestWithdrawTableList, InvestTableList, LiquidationTableList } from "./tableList"
const HistoryPage = () => {
    const [historyType, setHistoryType] = useState("invest-history")
    return (
        <Fragment>
        <RelativeLink title="Tra cứu lịch sử"/>
        <section className="section-list">
            <div className="module module-list">
                <div className="module-header">
                    <h2 className="title"><img src="images/title_img.png" alt=""/> Tra cứu lịch sử</h2>
                </div>
                <div className="module-content">
                    <FilterList />
                    <div className="select-history">
                    <label htmlFor="timeLimit" className={`radio__label ${historyType === "invest-history" ? "active" : ""}`}  onClick={() => setHistoryType("invest-history")}>Lịch sử đầu tư</label>
                    <label htmlFor="timeLimit" className={`radio__label ${historyType === "liquidation-history" ? "active" : ""}`} onClick={() => setHistoryType("liquidation-history")}>Lịch sử thanh lý</label>
                    <label htmlFor="timeLimit" className={`radio__label ${historyType === "interest-history" ? "active" : ""}`} onClick={() => setHistoryType("interest-history")}>Lịch sử nhận lãi</label>
                    <label htmlFor="timeLimit" className={`radio__label ${historyType === "bonus-history" ? "active" : ""}`} onClick={() => setHistoryType("bonus-history")}>Lịch sử nhận thưởng</label>
                    <label htmlFor="timeLimit" className={`radio__label ${historyType === "interestWithdraw-history" ? "active" : ""}`} onClick={() => setHistoryType("interestWithdraw-history")}>Lịch sử rút lãi</label>
                    <label htmlFor="timeLimit" className={`radio__label ${historyType === "bonusWithdraw-history" ? "active" : ""}`} onClick={() => setHistoryType("bonusWithdraw-history")}>Lịch sử rút thưởng</label>
                    </div>
                    {
                        historyType === "invest-history" ? <InvestTableList /> :
                        historyType === "liquidation-history" ? <LiquidationTableList /> :
                        historyType === "interest-history" ? <InterestTableList /> :
                        historyType === "bonus-history" ? <BonusTableList /> :
                        historyType === "interestWithdraw-history" ? <InterestWithdrawTableList /> :
                        historyType === "bonusWithdraw-history" ? <BonusWithdrawTableList /> :
                        ""
                    }
                </div>
            </div>
        </section>
        </Fragment>
    );
}

export default HistoryPage;
