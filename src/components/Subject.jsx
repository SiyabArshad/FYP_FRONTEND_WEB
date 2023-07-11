import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Subject = () => {
  const param = useParams();

  const subject = [
    { id: "mathematics", name: "Mathematics" },
    { id: "english", name: "English" },
    { id: "urdu", name: "Urdu" },
  ];
  return (
    <>
      <div className="cs-sect">
        {subject.map((data, index) => {
          return (
            <Link
              to={"/classess/" + param.id + "/" + data.id}
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

export default Subject;
