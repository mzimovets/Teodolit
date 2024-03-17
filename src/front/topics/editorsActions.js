const saveData = async (data, topicId, isUpd = false) => {
  console.log("data", data, topicId);

  const res = await fetch(`/topic/${topicId}`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ article: data }),
  });
  const respData = await res.json();
  console.log("respData", respData);
  if (respData.status !== "ok") {
    const res = await fetch(`/topic/${topicId}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ article: data }),
    });
    const respData = await res.json();
    console.log("respData cathc", respData);
  }
};

const getData = async (topicId) => {
  const res = await fetch(`/topic/${topicId}`);
  return res.json();
};

export { saveData, getData };
