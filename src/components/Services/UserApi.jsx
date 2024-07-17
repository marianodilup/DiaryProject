const getDataFromApiUser = (user) => {
    user.expiresInMins = 30;
    return fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }).then((res)=> res.json());
};

const getDataUserForAuth = (token) => {
    return fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token,
        },
    }).then((res) => res.json());
    

};

export { getDataFromApiUser, getDataUserForAuth };