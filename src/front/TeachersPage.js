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
import {
  UserAddOutlined,
  DownOutlined,
  EditOutlined,
  DeleteOutlined,
  CaretDownOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const TeacherPage = () => {
  // Состояние открытия/ закрытия модального окна добавления новой учетной записи
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

  // Состояние открытия/ закрытия модального окна редактирования учетной записи

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

  // Состояние открытия/ закрытия модального окна удаления учетной записи

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  console.log(isDeleteOpen);
  const showModalDelete = () => {
    setIsDeleteOpen(true);
  };

  const handleDelete = () => {
    setIsDeleteOpen(false);
    console.log("нажато");
  };

  const handleCancelDelete = () => {
    setIsDeleteOpen(false);
  };

  // Выбор режима сортировки данных таблицы

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
        <Menu.Item key={item.value}>
          <span style={{ fontWeight: "600" }}>{item.label}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  // Переменные для размера кнопок
  const sizeLarge = "large";
  const sizeMedium = "middle";
  const sizeSmall = "small";

  // Переменная для компонента поиска
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  // Таблица
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
      // Теги, статус
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
      // Кнопки редактирования и удаления
      render: () => (
        <div style={{ display: "flex", gap: "12px" }}>
          {/* Редактирование */}
          <Button
            type="primary"
            value="large"
            shape="circle"
            size={sizeLarge}
            onClick={showModalEdit}
          >
            <EditOutlined />
          </Button>

          {/* ПОМЕНЯТЬ СОСТОЯНИЕ!!! */}
          {/* Удаление */}
          <Button
            type="primary"
            danger
            shape="circle"
            size={sizeLarge}
            onClick={showModalDelete}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="noselect" style={{ margin: "20px" }}>
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
            marginTop: "0px",
            height: "24px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#d9d9d9",
            borderRadius: "6px",
            padding: "4px 11px",
            textAlign: "center",
          }}
        >
          Сортировка:{" "}
        </div>
        {/* Стрелка */}

        <span>
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            placement="bottom"
            arrow="true"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="list-sort" style={{ paddingTop: "6px" }}>
                <Button className="button-sort" type="primary">
                  <span style={{ fontWeight: "bold" }}>
                    {selectedItem.label} <CaretDownOutlined />
                  </span>
                </Button>
              </Space>
            </a>
          </Dropdown>
        </span>

        <Search
          className="search-input"
          placeholder="Найти"
          onSearch={onSearch}
          enterButton
          style={{
            width: "290px",
          }}
        />
        <div style={{ marginTop: "-3px", paddingLeft: "676px" }}>
          <Button type="primary" shape="circle" size={sizeLarge}>
            <a className="logOutButton" href="http://localhost:3000/">
              <LogoutOutlined
                style={{
                  fontSize: "24px",
                }}
              />
            </a>
          </Button>
        </div>
      </div>

      <Table
        style={{ width: "94%", margin: "auto" }}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
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

      {/* Удаление */}
      <Modal
        className="deleteModal"
        title={<div style={{ width: "242px" }}>Удалить учетную запись?</div>}
        open={isDeleteOpen}
        onOk={handleDelete}
        onCancel={handleCancelDelete}
        okText="Удалить"
        cancelText="Отмена"
        okButtonProps={{
          type: "primary",
          danger: true,
        }}
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
            width: "200px",
            maxWidth: 600,
            paddingRight: "74px",
            marginTop: "24px",
          }}
        ></Form>
      </Modal>
    </div>
  );
};

export { TeacherPage };
