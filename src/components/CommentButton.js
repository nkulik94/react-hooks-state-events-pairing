import React from 'react';

function CommentButton({ hidden, toggle }) {
    return <button onClick={() => toggle(!hidden)}>{hidden ? 'Show Comments' : 'Hide Comments'}</button>
}

export default CommentButton