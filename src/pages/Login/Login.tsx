import { useState } from "react";
import { Button, Card, Input, message } from "antd";
import { Lock, User } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { loginRequest } from "../../services/auth.services";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (response) => {
      login(response.token, {
        email: response.email,
        role: response.role,
      });
      navigate("/dashboard");
    },
  });

  const handleLogin = () => {
    if (!email || !password) {
      message.warning("Completa todos los campos");
      return;
    }

    mutate(
      { email, password },
      {
        onError: () => {
          message.error("Credenciales incorrectas");
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card title="Iniciar sesión" className="w-96">
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Usuario"
            prefix={<User size={16} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input.Password
            placeholder="Contraseña"
            prefix={<Lock size={16} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="primary"
            block
            loading={isPending}
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
