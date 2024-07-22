const getDataFromApiUser = (user) => {
  user.expiresInMins = 30;
  return fetch("https://proyecto-node-vercel.onrender.com/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

// "email": "maricarmen@gmail.com" ,
// "password": "Maricarmen123"

const getDataUserForAuth = (token) => {
  return fetch("https://proyecto-node-vercel.onrender.com/user/isLogin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
  }).then((res) => res.json());
}; 

const registerUser = (user) => {
  return fetch(" https://proyecto-node-vercel.onrender.com/user/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export { getDataFromApiUser, getDataUserForAuth, registerUser };
