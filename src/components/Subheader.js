import React from 'react';

function Subheader({ views, date }) {

    return (
        <p>{views} Views | Uploaded {date}</p>
    )
}

export default Subheader