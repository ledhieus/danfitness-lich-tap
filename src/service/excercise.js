import { get } from "../../utils/request"

export const getExcercise = async (path) => {
  const result = await get(`api/client/exercises/${path}`)
  return result
}
