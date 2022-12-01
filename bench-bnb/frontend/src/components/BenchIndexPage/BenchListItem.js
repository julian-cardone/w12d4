import { useHistory } from "react-router-dom"



export default function BenchListItem({ bench }){

  let history = useHistory();

  function handleClick() {
    history.push(`/benches/${bench.id}`);
  }

  return (
    <div onClick={handleClick}className="benchlistitemdiv">
      <h1>{bench.title}</h1>
      <p>$ {bench.price}</p>
    </div>
  )
  
}