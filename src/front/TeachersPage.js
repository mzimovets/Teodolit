import {
  Button,
  Space,
  Table,
  Menu,
  Dropdown,
  Modal,
  Form,
  Input,
  Tag,
} from "antd";
import { UserAddOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const TeacherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log("нажато");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //

  const [isEditOpen, setIsEditOpen] = useState(false);
  const showModalEdit = () => {
    setIsEditOpen(true);
  };

  const handleOkEdit = () => {
    setIsEditOpen(false);
    console.log("нажато");
  };

  const handleCancelEdit = () => {
    setIsEditOpen(false);
  };

  //

  const items = [
    { label: "Фамилия", value: "secondName" },
    { label: "Группа", value: "group" },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  const menu = (
    <Menu
      onClick={({ key }) => handleMenuClick(items.find((i) => i.value === key))}
    >
      {items.map((item) => (
        <Menu.Item key={item.value}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const dataSource = [
    {
      key: "1",
      lastName: "Зимовец",
      name: "Максим",
      secondName: "Алексеевич",
      group: "ПИ-202",
      login: "zimMaks",
      password: "36345fgf45",
      status: "Зачет",
    },
    {
      key: "2",
      lastName: "Пономарев",
      name: "Александр",
      secondName: "Владимирович",
      group: "ПИ-202",
      login: "ponomarAlex",
      password: "2234fdgt24",
      status: "Зачет",
    },
    {
      key: "3",
      lastName: "Филиппов",
      name: "Максим",
      secondName: "Владимирович",
      group: "ПИ-202",
      login: "filippovMaks",
      password: "5534dgfd424",
      status: "Зачет",
    },
  ];

  const columns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Фамилия",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Отчество",
      dataIndex: "secondName",
      key: "secondName",
    },
    {
      title: "Группа",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      render: (status, item) => {
        console.log(status, item);
        return (
          <Tag color={"blue"} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Логин",
      dataIndex: "login",
      key: "login",
    },
    {
      title: "Пароль",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "",
      dataIndex: "/",
      key: "button",
      render: () => (
        <Button type="primary" onClick={showModalEdit}>
          <UserOutlined />
        </Button>
      ),
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          onClick={showModal}
          className="button-add-users"
          type="primary"
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            marginBottom: "10px",
            marginLeft: "44px",
            borderRadius: "10px",
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
          onOk={handleOk}
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
              rules={[
                {
                  required: true,
                  message: "Введите фамилию!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Имя"
              name="Имя"
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
              rules={[
                {
                  // нужна проверка, но фамилия не обязательна
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
              rules={[
                {
                  required: true,
                  message: "Введите пароль!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
        <div
          style={{
            display: "flex",
            paddingTop: "6px",
          }}
        >
          Сортировка:{" "}
        </div>
        <Dropdown overlay={menu} trigger={["click"]} placement="bottom" arrow>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="list-sort" style={{ paddingTop: "6px" }}>
              <span style={{ fontWeight: "bold" }}>{selectedItem.label}</span>
              <DownOutlined style={{ fontSize: "14px" }} />
            </Space>
          </a>
        </Dropdown>
      </div>
      <Table
        style={{ width: "94%", margin: "auto" }}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      {/* Абиба */}
      <Modal
        title="Редактировать учетную запись"
        open={isEditOpen}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        okText="Сохранить"
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
            rules={[
              {
                required: true,
                message: "Введите фамилию!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Имя"
            name="Имя"
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
            rules={[
              {
                // нужна проверка, но фамилия не обязательна
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
            rules={[
              {
                required: true,
                message: "Введите пароль!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export { TeacherPage };
