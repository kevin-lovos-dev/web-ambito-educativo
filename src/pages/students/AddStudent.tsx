import TitleComponent from "../../components/TitleComponent";
import { Card, message, Upload, Button, notification } from "antd";
import { FileUp, Download } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { uploadStudentsFile } from "../../services/students.services";

const { Dragger } = Upload;

const AddStudent = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: uploadStudentsFile,
    onSuccess: (data) => {
      message.success(
        `Carga completada. Estudiantes insertados: ${data.inserted}`
      );
    },
    onError: (error: any) => {
      message.error(
        error?.response?.data?.error || "Error al procesar el archivo"
      );
    },
  });

  const props = {
    name: "file",
    multiple: false,
    accept: ".csv",
    showUploadList: false,
    beforeUpload: (file: File) => {
      mutate(file);
      return false;
    },
  };

  const handleDownloadExample = () => {
    notification.success({
      message: "Archivo descargado",
      description:
        "Recuerda modificar los datos y el número NUE debe ser unico para cada estudiante.",
    });
  };

  return (
    <div className="space-y-6">
      <TitleComponent
        titulo="Agregar nuevo estudiante"
        description="Arrastra un archivo CSV para registrar estudiantes."
      />

      <div className="flex">
        <a href="/ambito-educativo.csv" download onClick={handleDownloadExample}>
          <Button
            icon={<Download className="w-4 h-4" />}
            type="default"
          >
            Descargar ejemplo
          </Button>
        </a>
      </div>

      <div className="flex justify-center">
        <Card className="w-full max-w-2xl">
          <Dragger {...props} disabled={isPending}>
            <p className="ant-upload-drag-icon flex justify-center">
              <FileUp className="w-8 h-8" />
            </p>

            <p className="ant-upload-text">
              Arrastra el archivo aquí o haz clic para seleccionar
            </p>

            <p className="ant-upload-hint">
              Formato permitido: CSV
            </p>

            {isPending && (
              <p className="mt-2 text-sm text-gray-500">
                Procesando archivo...
              </p>
            )}
          </Dragger>
        </Card>
      </div>
    </div>
  );
};

export default AddStudent;
