import React, { useState } from "react";
import "./PokeForm.css";

function PokeForm() {
  return (
    <div className="form mt-5">
      <div className="progressbar">
        <div></div>
      </div>

      <div className="form-container py-5 ">
        <div className="form-banner">
          <div className="header">
            <h1 className="display-4 fw-normal text-black"></h1>
          </div>
          <div className="form-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default PokeForm;
