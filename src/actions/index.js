import jsonPlaceHolder from '../apis/jsonplaceholder';

export const fetchPosts = () => async dispatch => {
  //Bad approach

  const response = await jsonPlaceHolder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
