import client from "../../../tina/__generated__/client";
import Contact from "./contact";


export default async function ContactPage() {
     const data = await client.queries.page({ relativePath: "contact.md" });
    return <Contact {...data}/>;
}