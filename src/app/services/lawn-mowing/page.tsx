import client from "../../../../tina/__generated__/client";
import LawnMoving from "./lawn-mowing";

export default async function lawnMowingPage() {

  const data = await client.queries.page({ relativePath: "lawnmowing.md" });

  return (
    <div>
      <LawnMoving {...data}/>
    </div>
  )
}