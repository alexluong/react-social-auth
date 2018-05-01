export const saveAccessToken = (token) => {
  try {
    localStorage.setItem('accessToken', token);
  } catch (error) {
    console.log(error);
  }
}

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken === null) {
      return undefined;
    }
    return accessToken;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}