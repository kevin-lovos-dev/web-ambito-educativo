type TitleComponentProps = {
  titulo: string;
  description: string;
};

const TitleComponent = ({ titulo, description }: TitleComponentProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{titulo}</h1>
      <p className="text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export default TitleComponent;
