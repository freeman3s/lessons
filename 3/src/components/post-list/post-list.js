import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css'

const PostList = ({posts, onDelete, onTogleImportant, onTogleLiked}) => {

    let elements = posts.filter( item => typeof item === 'object' );

    elements = elements.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id) }
                    onTogleImportant={() => onTogleImportant(id) }
                    onTogleLiked={() => onTogleLiked(id) }
                />
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;