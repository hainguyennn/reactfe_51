import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import DemoStateless from "./Components/DemoStateless";
// import DemoStateFul from "./Components/DemoStateFul";
// import BaiTapLayout1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1";
// import Databinding from "./Databinding/Databinding";
// import HandleEvent from "./HandleEvent/HandleEvent";
// import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
// import BaiTapChonMauXe from "./BaiTapChonMauXe";
// import DemoListAndKey from "./ListAndKeys/DemoListAndKey";
// import DemoProps from "./Props/DemoProps";
// import BaiTapThucHanhLayout from "./Components/BaiTapThucHanhLayout/BaiTapThucHanhLayout";
import BaiTapGioHang from "./Components/BaiTapGioHang";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac";
import LifeCycle from "./LifeCycle/LifeCycle";
import FormComponent from "./FormComponent/FormComponent";
import DanhSachNguoiDung from "./FormComponent/DanhSachNguoiDung";

function App() {
  return (
    <div className="App">
      {/* <DemoStateless></DemoStateless>
        <DemoStateFul></DemoStateFul>*/}
      {/* <BaiTapLayout1></BaiTapLayout1> */}
      {/* <Databinding></Databinding> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <DemoConditionalAndState></DemoConditionalAndState> */}
      {/* <BaiTapChonMauXe></BaiTapChonMauXe> */}
      {/* <DemoListAndKey></DemoListAndKey> */}
      {/* <DemoProps></DemoProps> */}
      {/* <BaiTapThucHanhLayout></BaiTapThucHanhLayout> */}
      {/* <BaiTapGioHang></BaiTapGioHang> */}
      {/* <BaiTapGioHangRedux/> */}
      {/* <BaiTapGameXucXac/> */}
      {/* <LifeCycle /> */}
      <DanhSachNguoiDung />
    </div>
  );
}

export default App;
