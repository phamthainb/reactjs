import CountUp from 'react-countup';
import React, { useState, useEffect } from 'react';

const CirProgress = (props) => {
    const { index, value, name, color_1, color_2 } = props.item;
    const [length, setLength] = useState(158.027);

    useEffect(() => {
        let temp = 158.027 + 285 * (value/props.total);
        setLength(temp);
    }, [props.total])

    return <div className="item-chart">
        <div className="item-top">
            <svg
                className="circle-chart"
                viewBox="0 0 100 100"
            >
                <defs>
                    <linearGradient id={`gradient${color_1}`} x1="40%" y1="40%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={`#${color_1}`} />
                        <stop offset="40%" stopColor={`#${color_2}`} />
                        <stop offset="100%" stopColor={`#${color_2}`} />
                    </linearGradient>
                </defs>
                <path
                    fill="none"
                    d="M50 4a46 46 0 110 92 46 46 0 110-92"
                    className="circle-chart-trail"
                    strokeWidth="2.5"
                    style={{
                        strokeDasharray: "289.027px, 289.027px",
                        strokeDashoffset: "0px"
                    }}
                ></path>
                <path
                    fill="none"
                    d="M50 4a46 46 0 110 92 46 46 0 110-92"
                    className="circle-chart-trail-dash"
                    strokeWidth="1px"
                    stroke={`url(` + `#gradient${color_1}` + `)`}
                    style={{
                        strokeDasharray: "2, 3",
                        strokeDashoffset: "0px",
                        transform: "scale(0.85) translate(9%, 9%)"
                    }}
                ></path>
                <path
                    fill="none"
                    d="M50 4a46 46 0 110 92 46 46 0 110-92"
                    className="circle-chart-path"
                    strokeWidth="8" // width
                    stroke={`url(` + `#gradient${color_1}` + `)`} // color
                    style={{
                        // strokeDasharray: "470.027px, 289.027px", // 443.027px 100% => 158.027px 0%  = 285 / 100 = 2.85
                        strokeDasharray: `${length}px, 289.027px`,
                        strokeDashoffset: "157.77px",
                        transition: "all 2s ease"
                    }}
                ></path>
            </svg>
            <div className="item-value" style={{ color: `#${color_1}` }} >
                <CountUp start={0} duration={4} delay={1} end={value} />
            </div>
        </div>
        <div className="item-chart-name" onClick={() => { props.showModal(index) }} >{name}</div>
    </div>
}
export default CirProgress; 