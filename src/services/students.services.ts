import { api } from "../lib/axios";

export interface Student {
  id: number;
  nombreEstudiante: string;
  anioInicio: number;
  anioFin?: number | null;
  promedioGraduacion?: number | null;
  promedioActual?: number | null;
  centroEscolar: string;
  NUE: string;
  estado: "activo" | "graduado";
}

export const getStudents = async (): Promise<Student[]> => {
  const { data } = await api.get("/estudiantes");
  return data;
};

export const uploadStudentsFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await api.post("/estudiantes/carga", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
