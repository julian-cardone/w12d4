import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { fetchBench, getBench } from "../../store/benches";


export default function BenchShowPage(){

  const { benchId } = useParams();
  const bench = useSelector(getBench(benchId));
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchBench(benchId))
  },[dispatch, benchId])

 if (bench){
  return (
    <div className="benchshowdiv">
      <h1>{bench.title}</h1>
      <Link to="/">Index Page</Link>
      <h2>Details</h2>
      <p>{bench.description}</p>
      <ul>
        <li> seats:
          {bench.seating}
        </li>
        <li> Latitude:
          {bench.lat}
        </li>
        <li> Longitude:
          {bench.lng}
        </li>
      </ul>
    </div>
  )
 } else {
  return null;
 }


}