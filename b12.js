function getParams(url) {
  let queryParams = {};

  const queryString = url.split("?")[1];

  if (queryString) {
    const keys = queryString.split("&");

    for (let i = 0; i < keys.length; i++) {
      const [key, value] = keys[i].split("=");
      queryParams[key] = value;
    }
  }

  return queryParams;
}

console.log(getParams("www.google.com/fakes?ehwd=google&hash=121"));
