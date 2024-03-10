import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";


export default function tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2 className="capitalize">tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  )
}
