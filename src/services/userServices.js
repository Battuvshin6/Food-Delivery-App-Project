const loginUser = (props) => {
  return fetch("http://localhost:8000/api/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: props.email,
      password: props.password,
    }),
  });
};

const signUpUser = (props) => {
  return fetch("http://localhost:8000/api/user/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: props.name,
      email: props.email,
      phone: props.phone,
      password: props.password,
      address: props.address,
    }),
  });
};
export const userServices = {
  signUpUser,
  loginUser,
};
