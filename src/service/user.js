import { get, patch, post } from "../../utils/request"


export const postLogin = async (data) => {
  const result = await post(`api/client/user/login`, data)
  return result
}

export const getMe = async () => {
  const result = await get(`api/client/user/me`)
  return result
}

export const postLogout = async () => {
  const result = await post(`api/client/user/logout`)
  return result
}

export const patchChangePassword = async (data) => {
  const result = await patch(`api/client/user/change-password`, data)
  return result
}

