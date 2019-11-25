import React, { Component } from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Main from '../layout/main'

export default class ToDoList extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <hr/>
                <Main />
                <hr/>
                <Footer />
            </div>
        )
    }
}
