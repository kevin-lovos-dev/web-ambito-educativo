import { Pie } from "@ant-design/plots";
import { Card } from "antd";
import { GraduationCap, UserCheck, Users } from "lucide-react";
import TitleComponent from "../../components/TitleComponent";
import MetricaCards from "../../components/MetricaCards";
import { useQuery } from "@tanstack/react-query";
import { getDashboardMetrics } from "../../services/home.services";

const Dashboard = () => {
  const { data } = useQuery({
    queryKey: ["dashboard-metrics"],
    queryFn: getDashboardMetrics,
  });

  return (
    <div className="space-y-6">
      <TitleComponent
        titulo="Bienvenido al sistema de gestión estudiantil"
        description="Este sistema te permite administrar estudiantes de forma sencilla,
        visualizar información clave y llevar el control del estado académico de cada estudiante."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 flex gap-4 flex-wrap">
          <MetricaCards
            title="Total de estudiantes"
            value={data?.total ?? 0}
            icon={<Users />}
            bgColor="!bg-blue-100"
            iconBgColor="bg-blue-200"
          />

          <MetricaCards
            title="Estudiantes activos"
            value={data?.activos}
            icon={<UserCheck />}
            bgColor="!bg-green-100"
            iconBgColor="bg-green-200"
          />

          <MetricaCards
            title="Estudiantes graduados"
            value={data?.graduados}
            icon={<GraduationCap />}
            bgColor="!bg-purple-100"
            iconBgColor="bg-purple-200"
          />
        </div>

        <Card title="Estado de estudiantes">
          <div className="w-full h-[260px] flex items-center justify-center">
            <Pie
              data={[
                { type: "Total", value: data?.total ?? 0 },
                { type: "Activos", value: data?.activos ?? 0},
                { type: "Graduados", value: data?.graduados ?? 0 },
              ]}
              angleField="value"
              colorField="type"
              radius={0.9}
              innerRadius={0.6}
              legend={{ position: "bottom" }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
