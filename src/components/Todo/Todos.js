import React, {Component} from 'react'
import TodoItem from "./TodoItem";
import 'antd/dist/antd.css'
import {Card} from "antd";

export default class Todos extends Component {

    changeStatus = (todoItem) => {
        this.props.receivedCheck(todoItem);
        console.log("todoItem == ", todoItem)
    };

    render() {
        const {todos} = this.props;
        return (

            <div className="todo-list">
                {todos.map((todo, i) =>
                    <li key={i}>
                        <Card style={{width: "500px"}}>
                            <TodoItem
                                todo={todo}
                                onChange={this.changeStatus}/>
                        </Card>
                    </li>)
                }
            </div>
        )
    }
}
