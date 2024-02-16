import { Button, Divider, Flex, Radio } from "antd";
import { AppleOutlined } from "@ant-design/icons";

const Maksonchik = () => {
  const size = "large";
  return (
    <Button
      style={{ margin: "10px" }}
      type="primary"
      shape="circle"
      icon={<AppleOutlined />}
      size={size}
    />
  );
};

export { Maksonchik };
