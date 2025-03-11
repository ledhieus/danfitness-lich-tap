import { get } from "../../utils/request"


export const getSessionById = async (path) => {
  const result = await get(`api/client/session${path}`)
  return result
}

export const getDetailSession = async (path) => {
  const result = await get(`api/client/session/detail${path}`)
  return result
}
