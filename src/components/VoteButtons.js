import React from 'react';

function VoteButtons({ upvotes, downvotes }) {

    return (
        <div id='vote-buttons'>
            <button>{upvotes}👍</button>
            <button>{downvotes}👎</button>
        </div>
    )
}

export default VoteButtons