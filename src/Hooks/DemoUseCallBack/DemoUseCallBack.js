import React, { useState, useCallback } from 'react'
import Comment from './Comment';

export default function DemoUseCallBack(props) {
    let [like, setLike] = useState(1);
    // mỗi lần setState là nguyên component function chạy lại, component commment cũng chạy và log ra nhiều lần, để hạn chế việc này thì ta dùng memo (giống pure) giúp hạn chế việc render lại nhiều lần


    let renderNotify = () => {
        return `Bạn đã thả ${like} ♥ !`
    }

    const callBackRenderNotify = useCallback(renderNotify, [like])  // [] để state trong [] thì nó sẽ render ra hàm mới
    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            {/* <Comment like={like} /> Thêm cái props này thì memo sẽ nhận biết và sẽ gọi component đó render lại */}
            <Comment renderNotify={callBackRenderNotify} />
        </div>
    )
}
