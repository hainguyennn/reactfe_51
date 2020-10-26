import React, { memo } from 'react'

function Comment(props) {
    console.log('comment');
    return (
        <div>
            <textarea></textarea> <br />
            <button>Gửi</button>
        </div>
    )
}
export default memo(Comment);

