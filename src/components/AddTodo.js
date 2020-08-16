import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from './../actions';

class AddTodo extends Component {
    state = {
        inputText : ''
    }

    handleChange = (event) => {
        this.setState({ inputText : event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // add todo to redux
        this.props.dispatch(addTodo(this.state.inputText))
        this.setState({
            inputText : ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.inputText} onChange={this.handleChange} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);
