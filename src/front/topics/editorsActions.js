const saveData = async (data, topicId) => {
  console.log('data', data, topicId)
  const res = await fetch(`/topic/${topicId}`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ article: data }),
  });
  const respData = res.json();
};

const getData = async (topicId)=>{
    const res = await fetch(`/topic/${topicId}`)
    return res.json()
}

export { saveData , getData};


