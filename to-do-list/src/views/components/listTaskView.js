import React, { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ListTaskView = () => {

    const listTaskData = useSelector(state => state.listTask);
    const searchValue = useSelector(state => state.searchValue);
    let listTaskView;
    if (searchValue !== "") {
        listTaskView = listTaskData.filter(item => item.name.indexOf(searchValue) !== -1);
        if (listTaskView.length < 1) listTaskView.push({ id: "000", name: "no match", status: true });
    } else listTaskView = listTaskData;
    return (
        <>
            <ModalEdit />
            <div className="list--task">
                {listTaskView.map((item, index) => {
                    return <ItemTask key={index} item={item} />
                })}
            </div>
        </>
    );
}
export default ListTaskView;


const ItemTask = (props) => {
    const item = props.item;
    const onDelete = useDispatch();
    const onEdit = useDispatch();

    if (item.id === "000") return (
        <div className="task">
            <div className="task--name">{item.name}</div>
        </div>
    )
    else {
        return (
            <div className="task">
                <div className={`task--name ${item.status ? "strikeout" : ""}`}>{item.name}</div>
                <div className="task--btn">
                    <button className="btn btn-secondary task--btn--edit"
                        data-toggle="modal" data-target="#modelId"
                        onClick={() => onEdit({
                            type: "EDIT_TASK",
                            idEdit: item.id
                        })}>edit</button>

                    <button className="btn btn-secondary task--btn--delete"
                        onClick={() => onDelete({
                            type: "DELETE",
                            idDelete: item.id
                        })}>
                        delete</button>
                </div>
            </div>
        )
    }

};

function ModalEdit() {
    const taskEdit = useSelector(state => state.taskEdit);
    const [taskNew, setTaskNew] = useState(taskEdit);

    useEffect(() => {
        setTaskNew(taskEdit);
    }, [taskEdit]);

    const onSave = useDispatch();

    return (
        <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit task</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <br />
                        <input
                            type="text"
                            name="inputEdit"
                            value={taskNew.name}
                            onChange={(e) => {
                                setTaskNew({
                                    ...taskNew,
                                    name: e.target.value
                                })
                            }}
                        />
                        <hr />
                        <label>Trạng thái</label> <br />
                        <input type="radio" name="status" value={true} checked={taskNew.status} onChange={() => setTaskNew({
                            ...taskNew,
                            status: true
                        })} />done<br />
                        <input type="radio" name="status" value={false} checked={!taskNew.status} onChange={() => setTaskNew({
                            ...taskNew,
                            status: false
                        })} /> process < br />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => onSave({
                            type: "ON_SAVE",
                            taskNew: taskNew
                        })} >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
////////////////////////////////////////////////
