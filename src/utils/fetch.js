const BASE_URL = 'https://olhasheliakina.github.io/cms-app_backendless/data/';

export const getData = async (url) => {
  try {
    const response = await fetch(BASE_URL + url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error has occurred while fetching data:', error);
    throw error;
  }
};