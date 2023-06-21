import PublicRoutes from "./public";
import cookie from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../states/user.state";
import { setLogin } from "../states/loginInfo.state";
import Auth from "./auth";

const RootRoutes = () => {
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.login);

  useEffect(() => {
    const token = cookie.load("token");
    const user = cookie.load("user");
    const tutor = cookie.load("tutor");
    if (token) {
      dispatch(
        setLogin({
          login: true,
          token: token,
          expiresIn: "",
          tutor: tutor.tutor,
        })
      );
      dispatch(setUser(user));
    }
  }, [loginInfo.login]);

  return loginInfo.login ? <Auth /> : <PublicRoutes />;
};

export default RootRoutes;
