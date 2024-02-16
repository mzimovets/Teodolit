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
  EditOutlined,
  DeleteOutlined,
  CaretDownOutlined,
  LogoutOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { ModalAddUser } from "./ModalAddUser";
import { DeleteUserButton } from "./DeleteUserButton";

const TeacherPage = () => {
  // Выбор режима сортировки данных таблицы

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const items = [
    { label: "Фамилия", value: "secondName" },
    { label: "Группа", value: "group" },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleMenuClick = (item) => {
    setSelectedItem(item);
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
  
  // Состояние открытия/ закрытия модального окна профиля учетной записи
  const [isUserOpen, setIsUserOpen] = useState(false)
  const showModalUser = () => {
    setIsUserOpen(true)
  }

  const handleOkUser = () => {
    setIsUserOpen(false)
  }
  const handleCancelUser  = () => {
    setIsUserOpen(false)
    
  }

  // Состояние открытия/ закрытия модального окна удаления учетной записи

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItemToDelete, setSelectedItemToDelete] = useState();
  console.log(isDeleteOpen);
  const showModalDelete = (id) => {
    setIsDeleteOpen(true);
    setSelectedItemToDelete(id);
  };

  const handleDelete = () => {
    setIsDeleteOpen(false);
    console.log("нажато");
  };

  const handleCancelDelete = () => {
    setIsDeleteOpen(false);
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

  const [tableData, setTableData] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetch("/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const preparedData = JSON.parse(data.result).map((item, index) => {
          return {
            ...item,
            key: index + 1,
          };
        });
        setTableData(preparedData);
        console.log("preparedData = ", preparedData);
      });
  };
  // Общая таблица
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
        return (
          <Tag color={"blue"} key={status}>
            {status?.toUpperCase()}
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
      title: (
        <div className="noselect" style={{ display: "flex", gap: "12px" }}>
          <span>Пароль</span>
          <div
            style={{
              borderColor: "#b3b3b3 !important",
              right: "10px",
              top: "50%",
              textAlign: "center",
            }}
            onClick={handlePasswordVisibility}
          >
            {isPasswordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
      ),
      dataIndex: "password",
      key: "password",
      width: "250px",
      render: (password, item) => {
        return (
          <div className="noselect">
            <Input.Password
              value={password}
              readOnly
              style={{ width: "100%", border: "none", boxShadow: "none" }}
              iconRender={(visible) =>
                // visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                <></>
              }
              visibilityToggle={{visible: isPasswordVisible}}
              
            />
          </div>
        );
      },
    },
    {
      title: "",
      dataIndex: "/",
      key: "button",
      // Кнопки профиля, редактирования и удаления
      render: (_, item) => (
        <div style={{ display: "flex", gap: "24px"}}>
          {/* Профиль */}
          <Button type="primary"
          value="large"
          shape="circle"
          size={sizeLarge}
          onClick={showModalUser}
          >
          <UserOutlined />
          </Button>
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
            onClick={() => {
              showModalDelete(item._id);
            }}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  // Таблица профиля
  const dataSourceUser= [
    {
      name: 'Mike',
      topics: 'Пройденные темы'
      
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columnsUser = [
    
    
    {
      title: 'Тема',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Статус',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Кол-во попыток (?)',
      dataIndex: 'address',
      key: 'address',
    },
    
  ];
  

  return (
    <div className="noselect" style={{ margin: "20px" }}>
      <div style={{ display: "flex", gap: "12px" }}>
        <ModalAddUser loadData={loadData} />

        <div
          style={{
            marginTop: "0px",
            height: "24px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#d9d9d9",
            borderRadius: "6px",
            padding: "4px 0px 4px 11px",
            textAlign: "center",
          }}
        >
          Сортировка: {/* Стрелка */}
          <span style={{ paddingLeft: "6px" }}>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottom"
              arrow="true"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="list-sort">
                  <Button
                    className="button-sort"
                    type="primary"
                    style={{ width: "120px" }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      {selectedItem.label} <CaretDownOutlined />
                    </span>
                  </Button>
                </Space>
              </a>
            </Dropdown>
          </span>
        </div>

        <Search
          className="search-input"
          placeholder="Найти"
          onSearch={onSearch}
          enterButton
          style={{
            width: "290px",
            paddingLeft: "8px",
          }}
        />
        <div style={{ marginTop: "-3px", marginLeft: "auto" }}>
          <Button type="primary" shape="circle" size={sizeLarge} style={{}}>
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
        dataSource={tableData}
        columns={columns}
        pagination={false}
      />
{/* Профиль модальное окно*/}
<Modal
        title={<span style={{padding: "4px"}}>Здесь должно быть ФИО и группа учащегося</span>}
        open={isUserOpen}
        onOk={handleOkUser}
        onCancel={handleCancelUser}
        okText="Сохранить"
        cancelText="Отмена"
        width={1120}
        footer={null}
      >

        <div className="noselect"style={{display: "flex", gap: "10px", textAlign: "center", marginBottom: "14px", marginTop: "24px", padding: "4px"}}>
          <span style={{fontWeight: "bold", display: "flex", gap: "10px"}}>Логин<Input variant="borderless"
        readOnly value="Тут должен быть логин"/></span>
          <span style={{fontWeight: "bold"}}>Пароль:</span><Input.Password 
        // value={password} 
        value="а тут пароль"
        variant="borderless"
        readOnly
        style={{width: "200px"}}/></div>
        <Table dataSource={dataSourceUser} columns={columnsUser} pagination={false}/>
      </Modal>

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
      {isDeleteOpen && (
        <DeleteUserButton
          setIsDeleteOpen={setIsDeleteOpen}
          id={selectedItemToDelete}
          loadData={loadData}
        />
      )}
    </div>
  );
};

export { TeacherPage };
