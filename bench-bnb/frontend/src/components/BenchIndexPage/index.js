import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchBenches, getBenches } from "../../store/benches"
import { useDispatch } from "react-redux"
import BenchList from "./BenchList"


export default function BenchIndexPage(){

  const benches = useSelector(getBenches)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchBenches())
  },[dispatch])

  return (
    <div className="indexdiv">
      <BenchList benches={benches}/>
    </div>
  )
}