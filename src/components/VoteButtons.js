import React from 'react';

function VoteButtons({ upvotes, downvotes, onClickCallback }) {

    function voteCallback(e) {
        e.target.id === 'upvotes' ? onClickCallback('upvotes', (upvotes + 1)) : onClickCallback('downvotes', (downvotes + 1))
    }


    return (
        <div id='vote-buttons'>
            <button id='upvotes' onClick={voteCallback}>{upvotes}👍</button>
            <button id='downvotes'onClick={voteCallback}>{downvotes}👎</button>
        </div>
    )
}

export default VoteButtons