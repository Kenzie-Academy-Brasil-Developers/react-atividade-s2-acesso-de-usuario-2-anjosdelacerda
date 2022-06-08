import { useParams } from "react-router-dom";
import { members } from "../../components/Array";
import { Link } from "react-router-dom";

function Customer() {
  const { id } = useParams();

  const member = members.find((membro) => membro.id === id);

  return (
    <div className="memberBox" key={member.id}>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Customer;
