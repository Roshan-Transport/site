import client from "../../../../tina/__generated__/client";
import Transport from "./transport";


export default async function TransportPage() {

  const data = await client.queries.page({ relativePath: "transport.md" });

  return (
    <div>
      <Transport {...data}/>
    </div>
  )
}