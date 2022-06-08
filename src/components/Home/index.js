import { members } from "../Array";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {members.map((person) =>
        person.type === "pj" ? (
          <div>
            <Link
              key={person.id}
              to={`/company/${person.id}`}
              name={person.name}
              id={person.id}
              type={person.type}
            >
              {person.name}
            </Link>
          </div>
        ) : (
          <div>
            <Link
              key={person.id}
              to={`/customer/${person.id}`}
              name={person.name}
              id={person.id}
              type={person.type}
            >
              {person.name}
            </Link>
          </div>
        )
      )}
    </div>
  );
}

export default Home;
