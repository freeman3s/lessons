import React, {Component} from 'react';
import { Button } from 'reactstrap';

import './post-add-form.css';

export default class PostAddForm extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            default: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value,
            default: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.text !== '') {
            this.props.onAdd(this.state.text);
            this.setState({
                text: '',
                default: ''
            })
        } else {
            alert("Write something, please!")
        }
    }

    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чем Вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.default}
                />
                <Button
                    outline
                    color="success"
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</Button>
            </form>
        )
    }
};