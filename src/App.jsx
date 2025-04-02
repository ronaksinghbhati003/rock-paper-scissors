import React, { useState } from "react";

function App() {
  let[game,setGame]=useState('Click on Button');
  let[bot,setBot]=useState(' ');
   let computer=["rock","paper","scissors"];
  
   let result=(value)=>{
    let move=Math.floor(Math.random()*3);
    let computerMove=computer[move];
     let userMove=value;
     if(userMove=="rock"&&computerMove=="scissors")
     {
      setGame('User Win');
      setBot(computerMove)
     }
     else if(userMove=="scissors"&&computerMove=="paper"){
      setGame("User Win");
      setBot(computerMove)
     }
     else if(userMove=="paper"&&computerMove=="rock"){
      setGame("User Win");
      setBot(computerMove)
     }
     else if(userMove=="scissors"&&computerMove=="scissors"){
      setGame("Tie");
      setBot(computerMove)
     }
     else if(userMove=="paper"&&computerMove=="paper"){
      setGame("Tie");
      setBot(computerMove)
     }
     else if(userMove=="rock"&&computerMove=="rock")
      {
       setGame("Tie");
       setBot(computerMove)
      }
    else{
      setGame("computer Win")
      setBot(computerMove)
    }
    setTimeout(()=>{
      setGame("Click on Button")
      setBot(' ');
    },1500)
   }
  
  
  return (
    <>
    <div className=" rounded-2xl max-w-[400px] min-h-[150px] bg-black mx-auto my-[50px] flex justify-center items-center text-[20px] uppercase text-green-500 font-bold flex-col">
        <div>{game}</div>
        <div>{bot==' '?" ":" Computer Move"} {bot}</div>
    </div>
     <div className=" max-w-[500px] mx-auto shadow-2xl flex justify-center gap-[20px] p-[20px_20px] bg-green-200 rounded-[20px]">
       <input type="button" value="rock" onClick={(e)=>{
          result(e.target.value);
       }} className="border p-[10px_20px] capitalize font-bold text-[25px] bg-pink-400 rounded-[20px] cursor-pointer"/>
       <input type="button" value="paper" onClick={(e)=>{
          result(e.target.value);
       }} className="border p-[10px_20px] capitalize font-bold text-[25px] bg-pink-400 rounded-[20px] cursor-pointer"/>
       <input type="button" value="scissors" onClick={(e)=>{
          result(e.target.value);
       }} className="border p-[10px_20px] capitalize font-bold text-[25px] bg-pink-400 rounded-[20px] cursor-pointer"/>
       </div>
    </>
  )
}

export { App };

