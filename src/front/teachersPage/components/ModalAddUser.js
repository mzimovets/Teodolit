import { Button, Modal, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";
import md5 from "md5";
import { fetchRequest } from "../../utils";

const ModalAddUser = (props) => {
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
    setFormHasError(false);
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
      fetchRequest(
        "/users",
        "POST",
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        { data }
      ).then((data) => {
        console.log(data);
        setIsModalOpen(false);
        props.loadData();
        setLastName(undefined);
        setName(undefined);
        setSecondName(undefined);
        setGroup(undefined);
        setLogin(undefined);
        setPassword(undefined);
        setFormHasError(false);
      });
    }
    setFormHasError(true);
    setIsModalOpen(true);
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
          >
            Фамилия :
          </span>
          <Input
            style={{ marginLeft: "8px", width: "250px" }}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
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
          >
            Имя :
          </span>
          <Input
            style={{ marginLeft: "8px", width: "250px" }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
          >
            Отчество :
          </span>
          <Input
            style={{ marginLeft: "8px", width: "250px" }}
            value={secondName}
            onChange={(e) => {
              setSecondName(e.target.value);
            }}
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
          >
            Группа :
          </span>
          <Input
            style={{ marginLeft: "8px", width: "250px" }}
            value={group}
            onChange={(e) => {
              setGroup(e.target.value);
            }}
          />
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
          >
            Логин :
          </span>
          <Input
            style={{ marginLeft: "8px", width: "250px" }}
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
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
          >
            Пароль :
          </span>
          <Input.Password
            style={{ marginLeft: "8px", width: "250px" }}
            value={password}
            onChange={(e) => {
              if (e.target.value.length <= 8) {
                setPassword(e.target.value);
              }
            }}
          />
        </div>
        <p style={{ color: "red", width: "70%", margin: "auto" }}>
          {formHasError && "Пожалуйста, заполните все обязательные поля!"}
        </p>
      </Modal>
    </div>
  );
};

export { ModalAddUser };
