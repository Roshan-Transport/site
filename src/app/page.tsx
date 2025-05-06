import client from "../../tina/__generated__/client";
import HomePage from "./HomePage";

export default async function Page() {

    const data = await client.queries.page({ relativePath: "home.md" });

    return (
        <HomePage {...data} />
    )
}