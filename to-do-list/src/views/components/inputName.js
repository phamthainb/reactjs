import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const InputName = () => {
    const [valueInput, setvalueInput] = useState("");

    const onSearch = useDispatch();
    const onUnSearch = useDispatch();
    const onAdd = useDispatch();

    return (
        <div className="input--name">
            <input
                type="text"
                name="input"
                value={valueInput}
                onChange={(e) => setvalueInput(e.target.value)}
                onKeyUp={e => {
                    if (e.keyCode === 13) {
                        onAdd({
                            type: "ADD",
                            value: valueInput
                        });
                        setvalueInput("");
                    }
                }}
                onClick={(e) => { e.target.value = "" }}
                onBlur={(e) => { e.target.value = "" }}
            />
            <button className="btn" onClick={() => onSearch({
                type: "SEARCH",
                valueSearch: valueInput
            })}>
                search
            </button>
            <button className="btn" onClick={() => onUnSearch({
                type: "UNSEARCH"
            })}>
                unsearch
            </button>
            <button className="btn" onClick={() => {
                if(valueInput !== ""){
                    onAdd({
                        type: "ADD",
                        value: valueInput
                    });
                    setvalueInput("");
                }
            }}
            >
                add
            </button>
        </div>
    );
}

export default InputName;
