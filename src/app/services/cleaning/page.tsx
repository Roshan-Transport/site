import client from "../../../../tina/__generated__/client";
import Cleaning from "./cleaning"

export default async function CleaningPage() {

  const data = await client.queries.page({ relativePath: "cleaning.md" });

  return (
    <div>
      <Cleaning  {...data}/>
    </div>
  )
}