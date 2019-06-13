import React from 'react';
import { Button } from 'reactstrap';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем Вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <Button
                outline
                color="success"
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('hello')}>
                Добавить</Button>
        </div>
    )
}

export default PostAddForm;