import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card shadow p-3 mb-5  bg-body rounded card-body">
          <img src={props.imgsrc} class="img-fluid" alt="img" />
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
            <NavLink to="/" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
