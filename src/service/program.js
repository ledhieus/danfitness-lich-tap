import { get } from "../../utils/request"


export const getProgram = async (path) => {
  const result = await get(`api/client/program${path}`)
  return result
}

export const getDetailProgram = async (path) => {
  const result = await get(`api/client/program/detail${path}`)
  return result
}

export const getDetailProgramPrivate = async (id) => {
  const result = await get(`api/client/program/detail-private/${id}`)
  return result
}