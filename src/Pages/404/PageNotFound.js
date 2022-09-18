import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, [navigate]);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span data-testid="span">4</span>
            <span data-testid="span">0</span>
            <span data-testid="span">4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
