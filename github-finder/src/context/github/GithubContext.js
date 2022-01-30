import { createContext, useReducer, useState } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [isSearch, setIsSearch] = useState(false);
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search for Users
  const searchUsers = async (text) => {
    setIsLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const { items } = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });

    items.lenght > 0 ? setIsSearch(false) : setIsSearch(true);
  };

  // Get User
  const getUser = async (login) => {
    setIsLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    if (res.status === 404) {
      window.location = '/notfound';
    } else {
      const data = await res.json();

      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  // get User Repos
  const getRepos = async (login) => {
    setIsLoading();

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    });

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const data = await res.json();

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    });
  };

  // Clear Users from State
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
    setIsSearch(state.setIsSearch);
  };

  // Get initial users (Testing )
  const fetchUsers = async () => {
    setIsLoading();
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const data = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  //set Is Loading
  const setIsLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos || [],
        isLoading: state.isLoading,
        isSearch,
        fetchUsers,
        searchUsers,
        getUser,
        getRepos,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
