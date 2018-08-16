import { API_BASE_URL } from '../config'
import * as types from './actionTypes'

export const fetchChecksRequest = () => ({
  type: types.FETCH_CHECKS_REQUEST
})

export const fetchChecksSuccess = checks => ({
  type: types.FETCH_CHECKS_SUCCESS,
  checks
})

export const fetchChecksError = error => ({
  type: types.FETCH_CHECKS_ERROR,
  error
})

//
// Async Request
//
export const fetchChecks = () => (dispatch, getState) => {
  dispatch(fetchChecksRequest())
  fetch(`${API_BASE_URL}/checks`)
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json();
  })
  .then(checks => {
    dispatch(fetchChecksSuccess(checks))
  })
  .catch(error => {
    dispatch(fetchChecksError(error))
  })
}


export const fetchNewCheckRequest = () => ({
  type: types.FETCH_NEW_CHECK_REQUEST
})

export const fetchNewCheckSuccess = check => ({
  type: types.FETCH_NEW_CHECK_SUCCESS,
  check
})

export const fetchNewCheckError = error => ({
  type: types.FETCH_NEW_CHECK_ERROR,
  error
})

//
// Async Request
//
export const fetchNewCheck = (table) => (dispatch, getState) => {
  dispatch(fetchNewCheckRequest())
  fetch(`${API_BASE_URL}/checks`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({tableId: table.id})
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json();
  })
  .then(checks => {
    dispatch(fetchNewCheckSuccess(checks))
  })
  .catch(error => {
    dispatch(fetchNewCheckError(error))
  })
}
