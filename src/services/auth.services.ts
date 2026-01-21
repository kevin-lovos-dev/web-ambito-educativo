import { api } from "../lib/axios";

type LoginPayload = {
  email: string;
  password: string;
};

export const loginRequest = async (data: LoginPayload) => {
  const response = await api.post("/login", data);
  return response.data;
};
