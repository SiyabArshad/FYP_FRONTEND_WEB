import { Link, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const Section = () => {
  const param = useParams();
  const section = [
    { id: "section-a", name: "SECTION A" },
    { id: "section-b", name: "SECTION B" },
    { id: "section-c", name: "SECTION C" },
  ];
  return (
    <>
      <div className="cs-sect">
        {section.map((data, index) => {
          return (
            <Link
              to={"/classes/" + param.id + "/" + data.id}
              key={index}
              className="classsection"
            >
              <p>{data.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Section;
