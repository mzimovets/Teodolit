import { Button, Modal, Form, Input } from "antd";
import { UserAddOutlined, SignatureOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const ModalAddUser = (props) => {
  const sizeLarge = "large";
  const sizeMedium = "middle";
  const sizeSmall = "small";

  // Состояние открытия/ закрытия модального окна добавления новой учетной записи
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setLastName("");
    setName("");
    setSecondName("");
    setGroup("");
    setLogin("");
    setPassword("");
    console.log(lastName, name, secondName, group, login, password);
  };

  const [lastName, setLastName] = useState();
  const [name, setName] = useState();
  const [secondName, setSecondName] = useState();
  const [group, setGroup] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const SubmitButton = () => {
    const data = {
      lastName,
      name,
      secondName,
      group,
      login,
      password,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsModalOpen(false);
        props.loadData();
        setLastName("");
        setName("");
        setSecondName("");
        setGroup("");
        setLogin("");
        setPassword("");
      });
  };

  return (
    <div>
      <Button
        onClick={showModal}
        className="button-add-users"
        type="primary"
        style={{
          fontFamily: "Roboto",
          fontWeight: "bold",
          marginBottom: "10px",
          marginLeft: "44px",
          borderRadius: "7px",
          height: "33px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <UserAddOutlined style={{ fontSize: "20px" }} />
          <div style={{ fontSize: "14px" }}>Добавить</div>
        </div>
      </Button>
      <Modal
        title="Добавить новую учетную запись"
        open={isModalOpen}
        onOk={SubmitButton}
        onCancel={handleCancel}
        okText="Добавить"
        cancelText="Отмена"
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
            paddingRight: "74px",
            marginTop: "24px",
          }}
        >
          <Form.Item
            label="Фамилия"
            name="Фамилия"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            rules={[
              {
                required: true,
                message: "Введите фамилию!",
              },
            ]}
          >
            <Input value={lastName} />
          </Form.Item>

          <Form.Item
            label="Имя"
            name="Имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            rules={[
              {
                required: true,
                message: "Введите имя!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Отчество"
            name="Отчество"
            value={secondName}
            onChange={(e) => {
              setSecondName(e.target.value);
            }}
            rules={[
              {
                required: false,
                message: "Введите отчество!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Группа"
            name="Группа"
            value={group}
            onChange={(e) => {
              setGroup(e.target.value);
            }}
            rules={[
              {
                required: true,
                message: "Введите группу!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Логин"
            name="Логин"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            rules={[
              {
                required: true,
                message: "Введите логин!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="Пароль"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            rules={[
              {
                required: true,
                message: "Введите пароль!",
              },
            ]}
          >
            <span style={{ display: "flex", gap: "12px" }}>
              <Input.Password style={{}} />
              <Button type="primary" size={sizeLarge}>
                <SignatureOutlined style={{ fontSize: "18px" }} />
              </Button>
            </span>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export { ModalAddUser };
