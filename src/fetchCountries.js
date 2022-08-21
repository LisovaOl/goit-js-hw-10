const fetchUrl = 'https://restcountries.com/v3.1/name/';
const options = 'fields=name,capital,population,flags,languages';

export default function fetchCountries(city) {
  return fetch(`${fetchUrl}${city}?${options}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
