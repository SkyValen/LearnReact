import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css'
/*Loob nimekirja, mis sisaldab kõiki meie kirjeid*/
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked, onToggleDone}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}
                onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default PostList;