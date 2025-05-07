import client from "../../../tina/__generated__/client";
import Booking from "./booking";


export default async function BookingPage() {

  const data = await client.queries.page({ relativePath: "booking.md" });
  return (
    <Booking {...data} />
  )
}
