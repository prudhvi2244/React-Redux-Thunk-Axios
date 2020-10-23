import { ADD_POST, DELETE_POST, FETCH_POST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/posts';

export const createPost = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {title, body})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      eid: data.eid,
      title: data.title,
      body: data.body
    }
  }
};

export const deletePostSuccess = eid => {
  return {
    type: DELETE_POST,
    payload: {
      eid
    }
  }
}

export const deletePost = eid => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${eid}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};