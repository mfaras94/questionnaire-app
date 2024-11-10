import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const answers = useSelector((state) => state.questions.answers);

  return answers.length > 0 ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
