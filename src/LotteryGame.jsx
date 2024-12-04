import React, { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

function LotteryGame({ n, winningSum }) {
  let [ticket, setticket] = useState(genTicket(n));
  let isWinning = sum(ticket) <= winningSum;

  let buyticket = () => {
    setticket(genTicket(n));
  };
  return (
    <div className="text-center flex flex-col">
      <div className="mt-20">
        <h1 className="mb-16 text-5xl font-bold">Lottery Game ! </h1>

        <Ticket ticket={ticket} />

        <button onClick={buyticket} className="mt-16">
          Buy Ticket
        </button>
      </div>
      <h3 className="text-red-600 text-3xl mt-5">
        {isWinning && "Congratulations, You Won !"}
      </h3>
    </div>
  );
}

export default LotteryGame;