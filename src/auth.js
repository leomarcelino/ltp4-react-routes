export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("unifeob-app-user"));

  return user !== null;
};
