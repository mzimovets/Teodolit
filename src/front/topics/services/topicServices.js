import { fetchRequest } from "../../utils";

const fetchTestStatus = async () => {
  return await fetchRequest(
    `/userTest`,
    "post",
    {
      "Content-type": "application/json",
      Accept: "*/*",
    },
    {
      login: localStorage.getItem("login"),
      password: localStorage.getItem("password"),
    }
  );
};

export { fetchTestStatus };
