import { Card } from "antd";
import type { ReactNode } from "react";

type MetricaCardsProps = {
  title: string;
  value: number | string;
  icon: ReactNode;
  bgColor?: string;
  iconBgColor?: string;
};

const MetricaCards = ({
  title,
  value,
  icon,
  bgColor = "bg-gray-100",
  iconBgColor = "bg-gray-200",
}: MetricaCardsProps) => {
  return (
    <Card className={`${bgColor} w-full`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${iconBgColor}`}>{icon}</div>

          <div className="leading-tight">
            <p className="text-gray-600 text-sm">{title}</p>
            <p className="text-xl font-semibold">{value}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetricaCards;
