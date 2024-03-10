export const dynamicParams = true;
import { notFound } from "next/navigation"

export async function generateStaticParams(){
    const res = await fetch('http://localhost:4000/tickets');
    const tickets = await res.json();

    return tickets.map(ticket => (
        {id: ticket.id}
    ))
}

async function fetchTicket(id){
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    });

    if (!res.ok) {
        notFound()
      }

    return res.json();
}

export default async function TicketDetails({params}) {
    const ticket = await fetchTicket(params.id);
  return (
    <main>
        <nav>
            <h2>Ticket details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by: {ticket.email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
    </main>
  )
}
