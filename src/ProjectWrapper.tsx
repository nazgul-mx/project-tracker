import { FC, ReactNode } from "react";
import { useNavigate } from "react-router";

type ProjectWrapperProps = {
  name: string;
  component: ReactNode;
};

export const ProjectWrapper: FC<ProjectWrapperProps> = ({
  name,
  component,
}) => {
  const navigate = useNavigate();
  return (
    <section>
      <button onClick={() => navigate("/")}>Go back</button>
      <h1>{name}</h1>
      {component}
    </section>
  );
};
