import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};
const { Title } = Typography;

const MainMenu = () => {
  const logIn = async () => {
    console.log("Вошли в функцию login");
    fetch("/users")
      .then((res) => {
        console.log("res =", res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    // let response = await fetch("/", {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // });
    // console.log("res =", response);
    // const data = await response.json();
    // console.log("data =", data);
    console.log("Завершили функцию login");
  };
  return (
    <div style={{ overflow: "hidden", height: "740px", position: "relative" }}>
      <div className="mainContainer">
        <div className="noselect" style={{ paddingTop: "152px" }}>
          <Title
            level={1}
            style={{ margin: "0px", paddingLeft: "100px", fontSize: "84px" }}
          >
            Тренажер
          </Title>
          <Title level={3} style={{ margin: "0px", paddingLeft: "100px" }}>
            по дисциплине "Геодезия"
          </Title>
        </div>
        <img class="teodolit-img" src="teod.png" />
        <div className="authWindow">
          <div className="auth">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Введите логин!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Логин"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Введите пароль!" }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                />
              </Form.Item>
              {/* <Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                noStyle
              ></Form.Item>
            </Form.Item> */}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button center-btn"
                  style={{
                    backgroundColor: "black",
                    width: "102px",
                  }}
                  // onClick={logIn}
                >
                  <a href="http://localhost:3000/teacherPage">Войти</a>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainMenu };
