import React, { Component } from 'react'

import './post-list-item.css'

export default class PostListItem extends Component {

    /*Jälgib loendi elementide olekut ja värskendab
    kui midagi on muutunud(näiteks kasutaja märkis
    element meeldib või märgitud kui tehtud)*/
    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked, onToggleDone, like, important, done } = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        if (done) {
            classNames += ' done';
        }

        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button
                        type='button'
                        className='btn-check btn-sm'
                        onClick={onToggleDone}>
                            <i class="fa fa-check"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
