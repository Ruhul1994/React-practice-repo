import { useState } from "react";
export default function Board() {
  const [board, setBoard]= useState(Array(9).fill(null));
  const[isXTurn, setXTurn] = useState(true);
  const winingCombinations =[
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]

];
function getWinner(squares){
  for(let combination of winingCombinations){
    const[a,b,c]= combination;

    if(
      squares[a] && 
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ){
      return squares[a];
    }
  }
}
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">
      <h1 className="text-5xl font-semibold text-white mb-8 text-center">Tic Tac Toe</h1>
      <div>
        game status
      </div>
      <div className="grid grid-col-3 gap rounded-xl overflow-hidden mb-6">

      </div>
      <button className="w-full py-3 text-white border rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200 cursor-pointer">New GAME</button>
      </div>
    </div>
  );
}
