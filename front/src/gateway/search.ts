import { MOVIE_DB_URL } from 'utils/constants';
import { makeRequest } from 'utils/searchUtils';

export const search = async (query: string) => {
  const requestConfig = {
    api_key: process.env.REACT_APP_API_KEY,
    query,
  };

  const { results, total_results: totalResults } =
    (await makeRequest(MOVIE_DB_URL, requestConfig)) || {};

  return results ? { results, totalResults } : { results: null };
};
