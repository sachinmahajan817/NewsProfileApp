const API_KEY = 'acf1ad6a699f447fa2989ea796224c86';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top-headlines?apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export const fetchPostedArticles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posted-articles?apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching posted articles:', error);
    return [];
  }
};

export const fetchBookmarkedArticles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/bookmarked-articles?apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching bookmarked articles:', error);
    return [];
  }
};
