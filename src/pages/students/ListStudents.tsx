import { Table, Tag, Spin } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useQuery } from "@tanstack/react-query";
import TitleComponent from "../../components/TitleComponent";
import { getStudents, type Student } from "../../services/students.services";

const ListStudents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const columns: ColumnsType<Student> = [
    {
      title: "Nombre",
      dataIndex: "nombreEstudiante",
      key: "nombreEstudiante",
    },
    {
      title: "Centro escolar",
      dataIndex: "centroEscolar",
      key: "centroEscolar",
    },
    {
      title: "NUE",
      dataIndex: "NUE",
      key: "NUE",
    },
    {
      title: "Año inicio",
      dataIndex: "anioInicio",
      key: "anioInicio",
    },
    {
      title: "Año fin",
      dataIndex: "anioFin",
      key: "anioFin",
      render: (value) => value ?? "-",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
      render: (estado: Student["estado"]) => (
        <Tag color={estado === "activo" ? "green" : "blue"}>
          {estado.toUpperCase()}
        </Tag>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <TitleComponent
        titulo="Listado de estudiantes"
        description="Visualiza la información de los estudiantes registrados."
      />

      {isLoading ? (
        <Spin />
      ) : (
        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
        />
      )}
    </div>
  );
};

export default ListStudents;
