import React from "react";
import TicketNum from "./TicketNum";

function Ticket({ ticket }) {
  return (
    <div className="mt-8 text-center">
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}

export default Ticket;
