// Stateless component là component function (Tên gọi khác: react function component)
// rfc enter: cú pháp tạo
import React from "react";

export default function DemoStateless() {
  // Bên trong lệnh return của function component là nội dung giao diện của thẻ này. Lu7 ý: Nội dung component phải được bao phủ bởi 1 thẻ bất kỳ. Không dc để thẻ div song song
  return (
    <div className="container">
      <div className="card text-white bg-dark w-25">
        <img className="card-img-top" src="https://picsum.photos/200/200" alt />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
    // Thẻ <> vô hình tránh bị bể giao diện
    // bấm b4-card của bootstrap bị báo lỗi do div là component trong react k phải là HTML nữa nên phải xài tool convert lại
  );
}
