import { Button, Modal, Form, Input } from "antd";
import { UserAddOutlined, SignatureOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import md5 from "md5";

const ModalAddUser = (props) => {
  const sizeLarge = "large";
  const sizeMedium = "middle";
  const sizeSmall = "small";

  const [passwordLength, setPasswordLength] = useState(6);
  const [passwordBut, setPasswordBut] = useState("");

  const generatePassword = () => {
    const site = "0123456789_";

    const text = site + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const generatedPassword = md5(text);

    if (generatedPassword.length < passwordLength) {
      for (let i = generatedPassword.length; i < passwordLength; i++) {
        generatedPassword += "0";
      }
    }

    setPassword(generatedPassword.substring(0, passwordLength));
  };

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
  const [formHasError, setFormHasError] = useState();

  const SubmitButton = () => {
    const data = {
      lastName,
      name,
      secondName,
      group,
      login,
      password,
    };

    console.log("name", name);
    if (
      name !== undefined &&
      lastName !== undefined &&
      group !== undefined &&
      login !== undefined &&
      password !== undefined
    ) {
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
          setLastName(undefined);
          setName(undefined);
          setSecondName(undefined);
          setGroup(undefined);
          setLogin(undefined);
          setPassword(undefined);
        });
    }
    setIsModalOpen(true);
    setFormHasError(true);
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
        <div
          style={{
            display: "flex",
            marginBottom: "22px",
          }}
        >
          <span style={{ color: "red", marginLeft: "40px" }}>*</span>
          <span
            style={{
              width: "72px",
              textAlign: "right",
              marginRight: "10px",
            }}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          >
            Фамилия :
          </span>
          <Input
            style={{ marginLeft: "8px", width: "250px" }}
            value={lastName}
          />
        </div>

        <div
          style={{
            display: "flex",

            marginBottom: "22px",
          }}
        >
          <span style={{ color: "red", marginLeft: "72px" }}>*</span>
          <span
            style={{
              width: "40px",
              textAlign: "right",
              marginRight: "10px",
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            Имя :
          </span>
          <Input style={{ marginLeft: "8px", width: "250px" }} value={name} />
        </div>

        <div
          style={{
            display: "flex",

            marginBottom: "22px",
          }}
        >
          <span
            style={{
              width: "120px",
              textAlign: "right",
              marginRight: "10px",
            }}
            onChange={(e) => {
              setSecondName(e.target.value);
            }}
          >
            Отчество :
          </span>
          <Input
            style={{ marginLeft: "8px", width: "250px" }}
            value={secondName}
          />
        </div>

        <div
          style={{
            display: "flex",

            marginBottom: "22px",
          }}
        >
          <span style={{ color: "red", marginLeft: "54px" }}>*</span>
          <span
            style={{
              width: "60px",
              textAlign: "right",
              marginRight: "10px",
            }}
            onChange={(e) => {
              setGroup(e.target.value);
            }}
          >
            Группа :
          </span>
          <Input style={{ marginLeft: "8px", width: "250px" }} value={group} />
        </div>

        <div
          style={{
            display: "flex",

            marginBottom: "22px",
          }}
        >
          <span style={{ color: "red", marginLeft: "60px" }}>*</span>
          <span
            style={{
              width: "54px",
              textAlign: "right",
              marginRight: "10px",
            }}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          >
            Логин :
          </span>
          <Input style={{ marginLeft: "8px", width: "250px" }} value={login} />
        </div>

        <div
          style={{
            display: "flex",

            marginBottom: "22px",
          }}
        >
          <span style={{ color: "red", marginLeft: "50px" }}>*</span>
          <span
            style={{
              width: "64px",
              textAlign: "right",
              marginRight: "10px",
            }}
            onChange={(e) => {
              if (e.target.value.length <= 8) {
                setPassword(e.target.value);
              }
            }}
          >
            Пароль :
          </span>
          <Input.Password
            style={{ marginLeft: "8px", width: "250px" }}
            value={password}
          />
        </div>
        <p style={{ color: "red", width: "70%", margin: "auto" }}>
          {formHasError && "Пожалуйста, заполните все обязательные поля!"}
        </p>

        {/* <Form.Item
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
        </Form.Item> */}

        {/* <Form.Item
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
        </Form.Item> */}

        {/* <Form.Item
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
        </Form.Item> */}

        {/* <Form.Item
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
        </Form.Item> */}

        {/* <Form.Item
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
        </Form.Item> */}

        {/* <Form.Item
          label="Пароль"
          name="Пароль"
          value={password}
          onChange={(e) => {
            if (e.target.value.length <= 8) {
              setPassword(e.target.value);
            }
          }}
          rules={[
            {
              required: true,
              message: "Введите пароль!",
            },
          ]}
        >
          <span style={{ display: "flex", gap: "12px" }}>
            <Input.Password style={{}} value={password} />
            <Button
              className="generatePasswordButton"
              type="primary"
              size={sizeLarge}
              onClick={generatePassword}
            >
              <SignatureOutlined style={{ fontSize: "18px" }} />
            </Button>
          </span>
        </Form.Item>
        <p style={{ color: "red", width: "70%", margin: "auto" }}>
          {formHasError && "Пожалуйста, заполните все обязательные поля!"}
        </p> */}
        {/* </Form> */}
      </Modal>
    </div>
  );
};

export { ModalAddUser };
