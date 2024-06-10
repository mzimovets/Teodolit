import React from "react";
import { useState } from "react";
import { Modal, Form, Input } from "antd";
import { fetchRequest } from "../../utils";
import "./styles.css";

const EditUsers = (props) => {
  const [formEditHasError, setFormEditHasError] = useState(false);
  const [form] = Form.useForm();

  const handleOkEdit = () => {
    if (
      props.selectedUser.name !== "" &&
      props.selectedUser.lastName !== "" &&
      props.selectedUser.group !== "" &&
      props.selectedUser.login !== "" &&
      props.selectedUser.password !== ""
    ) {
      fetchRequest(
        "/users",
        "put",
        {
          "Content-type": "application/json",
          Accept: "*/*",
        },
        { ...props.selectedUser }
      ).then(() => {
        props.loadData();
        setFormEditHasError(false);
        props.setIsEditOpen(false);
      });
    }
    setFormEditHasError(true);
    form.resetFields();
  };

  const handleCancelEdit = () => {
    props.setIsEditOpen(false);
    setFormEditHasError(false);
  };

  return (
    <>
      <Modal
        title="Редактировать учетную запись"
        open={props.isEditOpen}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        okText="Сохранить"
        cancelText="Отмена"
      >
        {props.selectedUser && (
          <Form
            form={form}
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
                value={props.selectedUser.lastName}
                onChange={(e) => {
                  props.setSelectedUser({
                    ...props.selectedUser,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>

            <div
              style={{
                display: "flex",

                marginBottom: "22px",
              }}
            >
              <span style={{ color: "red", marginLeft: "72px" }}>*</span>
              <span className="tableColumn" style={{ width: "40px" }}>
                Имя :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={props.selectedUser?.name}
                onChange={(e) => {
                  props.setSelectedUser({
                    ...props.selectedUser,
                    name: e.target.value,
                  });
                }}
              />
            </div>

            <div style={{ display: "flex", marginBottom: "22px" }}>
              <span className="tableColumn" style={{ width: "120px" }}>
                Отчество :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={props.selectedUser.secondName}
                onChange={(e) => {
                  props.setSelectedUser({
                    ...props.selectedUser,
                    secondName: e.target.value,
                  });
                }}
              />
            </div>

            <div style={{ display: "flex", marginBottom: "22px" }}>
              <span style={{ color: "red", marginLeft: "54px" }}>*</span>
              <span className="tableColumn" style={{ width: "60px" }}>
                Группа :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={props.selectedUser.group}
                onChange={(e) => {
                  props.setSelectedUser({
                    ...props.selectedUser,
                    group: e.target.value,
                  });
                }}
              />
            </div>

            <div style={{ display: "flex", marginBottom: "22px" }}>
              <span style={{ color: "red", marginLeft: "60px" }}>*</span>
              <span className="tableColumn" style={{ width: "54px" }}>
                Логин :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={props.selectedUser.login}
                onChange={(e) => {
                  props.setSelectedUser({
                    ...props.selectedUser,
                    login: e.target.value,
                  });
                }}
              />
            </div>

            <div style={{ display: "flex", marginBottom: "22px" }}>
              <span style={{ color: "red", marginLeft: "50px" }}>*</span>
              <span className="tableColumn" style={{ width: "64px" }}>
                Пароль :
              </span>
              <Input.Password
                style={{ marginLeft: "8px", width: "250px" }}
                value={props.selectedUser.password}
                onChange={(e) => {
                  props.setSelectedUser({
                    ...props.selectedUser,
                    password: e.target.value,
                  });
                }}
              />
            </div>

            <p style={{ color: "red", width: "70%", margin: "auto" }}>
              {formEditHasError &&
                "Пожалуйста, заполните все обязательные поля!"}
            </p>
          </Form>
        )}
      </Modal>
    </>
  );
};

export { EditUsers };
