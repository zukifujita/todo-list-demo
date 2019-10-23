import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, Icon} from "antd";

export default class TodoInput extends Component {
    state = {
        inputValue: ''
    };

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value});
    };

    dispatch = () => {
        this.props.onNewTodoAdded(this.state.inputValue);
        this.setState({inputValue: ''})
    };

    render() {
        return (
            <div>
                <Input placeholder={"Add todo list here..."} size={"large"} type="text" value={this.state.inputValue}
                       onChange={this.handleInputChange}/>
                <Button type={"primary"} size={"large"} onClick={this.dispatch}>Add To Do List<Icon
                    type="check"/></Button>
            </div>
        )
    }
}
