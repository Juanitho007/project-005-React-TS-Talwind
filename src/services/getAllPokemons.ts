import { ResponseData } from "src/interfaces/interfaces";
import { axiosInstance } from "../api/axiosInstance"

export const getAllPokemons = async ():Promise<ResponseData> => { 
  try {
    const response = await axiosInstance.get('pokemon', { params: { limit: 100000 } });
    const res = response.data.results.map((type: ResponseData) => ({
      id: type.url.split('/').at(-2),
      name: type.name
    }))
    return res
  } catch (error) {
    throw new Error('Existe un error en la petición')
  }
}
