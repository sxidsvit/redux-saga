
const apiKey = process.env.REACT_APP_API_KEY

export const getTopHeadlines = async (countryCode) => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`);
  return await res.json();
};


export const getPopularNews = async () => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`);
  return await res.json();
};
