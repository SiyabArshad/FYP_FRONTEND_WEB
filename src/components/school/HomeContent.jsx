import React from "react";
import { Link, useParams } from "react-router-dom";

const HomeContent = () => {
  const params = useParams();
  let num = 0;
  return (
    <>
      <div className="assigment">
        <h2>Assignments</h2>
        <p>
          You have{" "}
          <Link
            className="Glink"
            to={
              "/classes/" +
              params.class +
              "/" +
              params.section +
              "/" +
              params.subject +
              "/assignment/pendings"
            }
          >
            {" "}
            {num === 0 ? "no" : num}
          </Link>{" "}
          {num === 0 || num === 1 ? "Assignment" : "Assignments"} on the list
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          minus molestias quas doloribus, culpa ipsum fugit voluptatibus
          sapiente alias dolorem quaerat eveniet, iusto itaque consequuntur?
          Facere officia minima nihil. Ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          minus molestias quas doloribus, culpa ipsum fugit voluptatibus
          sapiente alias dolorem quaerat eveniet, iusto itaque consequuntur?
          Facere officia minima nihil. Ut?
        </p>
        <div className="attendence">
          <h2>Attendence</h2>
          <Link
            className="Glink"
            to={
              "/classes/" +
              params.class +
              "/" +
              params.section +
              "/" +
              params.subject +
              "/attendence"
            }
          >
            Click me to see Attendence
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis minus molestias quas doloribus, culpa ipsum fugit
            voluptatibus sapiente alias dolorem quaerat eveniet, iusto itaque
            consequuntur? Facere officia minima nihil. Ut?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis minus molestias quas doloribus, culpa ipsum fugit
            voluptatibus sapiente alias dolorem quaerat eveniet, iusto itaque
            consequuntur? Facere officia minima nihil. Ut?
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
