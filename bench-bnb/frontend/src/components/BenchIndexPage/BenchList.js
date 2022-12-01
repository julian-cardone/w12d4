import BenchListItem from "./BenchListItem";

export default function BenchList({ benches }){

  return (

    <>
    <h1 className="benchesheader">Benches</h1>
    {benches.map((bench)=>{
      return <BenchListItem key={benches}bench={bench}/>
    })}
    </>

  )

}