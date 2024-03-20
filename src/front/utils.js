const fetchRequest = async (url, method = "get", headers, body) => {
  const resultHeaders = {
    method,
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body,
  };
  const res = await fetch(url, resultHeaders);
  console.log("fetchRequest", res, localStorage.getItem("accessToken"));
  const data = await res.json();
  console.log(" fetchRequest data", data);
  return data;
};

export { fetchRequest };
