import React from "react";
import { message, Button, Space } from "antd";
import ImageMapper from "react-img-mapper";

const TestTwo = () => {
  const URL = "/logo192.png";
  const MAP = {
    name: "my-map",
    // GET JSON FROM BELOW URL AS AN EXAMPLE AND PUT IT HERE
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [25, 33, 27, 300, 128, 240, 128, 94],
        preFillColor: "green",
        fillColor: "blue",
      },
      {
        name: "2",
        shape: "poly",
        coords: [219, 118, 220, 210, 283, 210, 284, 119],
        preFillColor: "pink",
      },
      {
        name: "3",
        shape: "poly",
        coords: [381, 241, 383, 94, 462, 53, 457, 282],
        fillColor: "yellow",
      },
      {
        name: "4",
        shape: "poly",
        coords: [245, 285, 290, 285, 274, 239, 249, 238],
        preFillColor: "red",
      },
      { name: "5", shape: "circle", coords: [170, 100, 25] },
    ],
  };

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Вы прошли тест!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Вы не прошли тест. Попробуйте еще раз",
    });
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      <div className="testTaskHeader">Задание №1</div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится ...
      </div>
      <ImageMapper
        src={URL}
        map={MAP}
        onImageMouseMove={(evt) => console.log(evt)}
      />
      ;
      {/* <img
        className="testImage"
        src="/logo192.png"
        alt=""
        onClick={() => alert("Вы кликнули по картинке!")}
      /> */}
      <div />
      <>
        {contextHolder}
        <Space>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
        </Space>
      </>
    </div>
  );
};

export { TestTwo };
