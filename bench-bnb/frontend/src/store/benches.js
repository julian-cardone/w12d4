import csrfFetch from "./csrf"

export const SET_BENCHES = "benches/SET_BENCHES"
export const ADD_BENCH = "benches/ADD_BENCH"
export const SET_BENCH = "benches/SET_BENCH"

const setBenches = (benches) =>{
  return {
    type: SET_BENCHES,
    benches
  }
}

const addBench = (bench) =>{
  return {
    type: ADD_BENCH,
    bench
  }
}

//selector
export const getBenches = (state) => 
  state.benches ? Object.values(state.benches) : [];

export const getBench = (benchId) => (state) => 
  state.benches ? state.benches[benchId] : null;

export const fetchBenches = () => async (dispatch) =>{
  const res = await csrfFetch("/api/benches")

  const data = await res.json();

  dispatch(setBenches(data))
}

export const fetchBench = (benchId) => async (dispatch) =>{
  const res = await csrfFetch(`/api/benches/${benchId}`)

  const data = await res.json();

  dispatch(addBench(data))
}

export const createBench = (benchData) => async (dispatch) =>{
  const res = await csrfFetch(`/api/benches}`,{
    method: "POST",
    body: JSON.stringify(benchData),
    headers: {"Content-Type":"application/json"}
  })

  const data = await res.json();

  dispatch(addBench(data))
}

export default function benchesReducer(state={}, action){
  const nextState = { ...state }
  switch (action.type){
    case SET_BENCHES:
      return { ...state, ...action.benches }
    case ADD_BENCH:
      nextState[action.bench.id]=action.bench
      return nextState
    default: return state
  }
}