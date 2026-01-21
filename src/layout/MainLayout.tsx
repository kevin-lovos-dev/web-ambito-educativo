import { Layout, Menu, Button, Popconfirm } from "antd";
import {
  LayoutDashboard,
  UserPlus,
  Users,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <Layout className="h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="lg"
        onBreakpoint={(broken) => setCollapsed(broken)}
        className="flex flex-col"
      >
        <div className="h-12 m-4 bg-white/20 rounded" />

        <Menu
          theme="dark"
          mode="inline"
          className="flex-1"
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/dashboard",
              icon: <LayoutDashboard size={18} />,
              label: "Dashboard",
            },
            {
              key: "/listado",
              icon: <Users size={18} />,
              label: "Estudiantes",
            },
            {
              key: "/nuevo",
              icon: <UserPlus size={18} />,
              label: "Nuevo Estudiante",
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header className="bg-white px-6 flex justify-between items-center">
          {/* Info del usuario (opcional) */}
          <div className="text-sm text-gray-600">
            {user?.email}
          </div>

          <Popconfirm
            title="¿Cerrar sesión?"
            description="Tu sesión actual se cerrará"
            okText="Sí"
            cancelText="No"
            onConfirm={handleLogout}
          >
            <Button
              type="text"
              danger
              icon={<LogOut size={18} />}
            >
              Cerrar sesión
            </Button>
          </Popconfirm>
        </Header>

        <Content className="p-6 bg-gray-50">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
