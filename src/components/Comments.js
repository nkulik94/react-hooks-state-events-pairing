import React from 'react';

function Comments({ comments, hidden }) {

    if (!hidden) {
        return (
            <div id='comments'>
                <h3>{comments.length} Comments</h3>
                <ul>
                    {
                        comments.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <h4>{comment.user}</h4>
                                    <p>{comment.comment}</p>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    
    return null
}

export default Comments