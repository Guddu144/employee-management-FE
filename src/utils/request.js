export const getTokenFromCookies = () => {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  for (let cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'token') {
      return value;
    }
  }
  return null;
};



const request = async (method, url, includeAuth, params = {}) => {
  const req = {
    method: method,
    headers: {
      'Accept': 'application/json',
    },
  };

  if (includeAuth) {
    const token = getTokenFromCookies();
    req.headers.Authorization = `Bearer ${token}`;
    req.headers={
      ...req.headers,
    }
  }

  if (method === 'GET') {
    const getParams = new URLSearchParams((params));
    url += `?${getParams}`;
  } else if (params instanceof FormData) {
    req.body = params;
  } else {
    req.headers['Content-Type'] = 'application/json';
    req.body = JSON.stringify((params));
  }

  const res = await fetch(url, req);
  const data = await res.json();
  if (res.failed || !res.ok) {
    throw new ResponseError('error_msg' in data ? data.error_msg : data.message, data.errors);
  }

  return data;
};

class ResponseError extends Error {
  constructor(msg, errors) {
    super(msg);
    this.errors = errors;
  }
}

export default request;
