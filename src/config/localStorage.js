export const saveAccessToken = (token) => {
  try {
    localStorage.setItem('accessToken', token);
  } catch (error) {
    console.log(error);
  }
}