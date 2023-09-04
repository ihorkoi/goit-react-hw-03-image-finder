const API_KEY = '38137461-021887730cc8bf219daec4c0b';

export default function fetchQuery(page, query) {
  try {
    return fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(resp => {
      if (!resp.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return resp.json();
    });
  } catch {
    return new Promise(reject => reject);
  }
}
