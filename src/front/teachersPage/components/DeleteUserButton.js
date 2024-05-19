import { Modal, Form } from "antd";
const DeleteUserButton = (props) => {
  const handleDelete = () => {
    fetch(`/users?id=${props.id}`, { method: "DELETE" }).then(() => {
      props.setIsDeleteOpen(false);
      props.loadData();
    });
  };

  const handleCancelDelete = () => {
    props.setIsDeleteOpen(false);
  };

  return (
    <Modal
      className="deleteModal"
      title={<div style={{ width: "242px" }}>Удалить учетную запись?</div>}
      open={true}
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
  );
};

export { DeleteUserButton };
