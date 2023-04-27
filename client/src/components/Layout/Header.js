import { UserOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const Navigate = useNavigate();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    Navigate("/login");
  };

  return (
    <nav>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <Link className="navbar-brand" to="/">
              Expense Tracker
            </Link>
          </div>
          <div className="col-6">
            {loginUser && (
              <span className="user-info">
                <UserOutlined className="user-icon" />{" "}
                <strong>{loginUser.name}</strong>
              </span>
            )}
            <button className="btn btn-primary logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;