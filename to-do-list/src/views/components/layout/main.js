import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import InputName from '../inputName';
import ListTaskView from '../listTaskView';

function Main () {
    const state = useSelector(state => state);
    console.log("state",state);
    return (
        <main>
            <InputName />
            <ListTaskView />
        </main>
    );
}

export default Main;
