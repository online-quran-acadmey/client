import { useSelector } from "react-redux";
import TutorRoutes from "./tutor.routes";
import UserRoutes from "./user.routes";

export default function Auth() {
  const loginInfo = useSelector((state) => state.login);
  return loginInfo.tutor ? <TutorRoutes /> : <UserRoutes />;
}
