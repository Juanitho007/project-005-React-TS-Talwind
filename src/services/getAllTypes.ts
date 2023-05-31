import { axiosInstance } from "../api/axiosInstance"
import { TypesProps } from "src/interfaces/interfaces";

export const getAllTypes = async (): Promise<TypesProps> => {
  try {
    const response = await axiosInstance.get("type/");
    const res = response.data.results.map(
      (type: TypesProps) => ({
        id: type.url.split("/").at(-2),
        name: type.name,
      })
    );
    return res;
  } catch (error) {
    throw new Error("Existe un error en la petición");
  }
};
