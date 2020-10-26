import React, { useState, useEffect } from 'react'

export default function DemoHookUseEffect(props) {

    const [number, setNumber] = useState(1);
    // const [object, setObject] = useState({ number: 1 }) Nếu như state là 1 object thì react hook nó sẽ so sánh theo kiểu dữ liệu nguyên thuỷ
    // useEffect(() => {
    //     // Hàm này sẽ chạy khi lần đầu component render và các lần render lại
    //     console.log('componentDidMount');
    //     console.log('componentDidUpdate');
    // })

    // Thay thế cho mỗi hàm didMount, chỉ chạy đúng 1 lần khi component render lần đầu tiên
    // useEffect(() => {
    //     // Tham số 2 mảng rỗng => chỉ thay thế cho componentDidMount
    //     console.log('componentDidMount');
    // }, [])

    useEffect(() => {
        // Tham số 2 là giá trị có thay đổi thì hàm này sẽ thực thi
        console.log('componentDidUpdate');
    }, [number]) // hàm này chỉ hiểu khi ghi {...object}, có thể && nhiều biến state ở tham số thứ 2

    useEffect(() => {
        // Huỷ thì component sẽ gọi hàm này
        console.log('Thay cho componentWillMount')
    })

    return (
        <div className="container">
            <h1>{number}</h1>
            <button className="btn btn-info" onClick={() => {
                setNumber(number + 1);
            }}>setNumber</button>
        </div>
    )
}
