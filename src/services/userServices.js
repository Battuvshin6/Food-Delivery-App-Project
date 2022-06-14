const loginUser = (props) => {
  fetch("http://localhost:8000/api/user/login", {
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
  fetch("http://localhost:8000/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: props.email,
      password: props.password,
      name: props.name,
      address: props.address,
    }),
  });
};
export const userServices = {
  signUpUser,
  loginUser,
};
