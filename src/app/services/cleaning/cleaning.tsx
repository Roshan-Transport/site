'use client'

import { PageQuery, PageQueryVariables } from "../../../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { OverviewSection, ServicesSection ,VehicleFleetSection, HowItWorksSection ,BookingSection} from "../transport/transport";


export default function Cleaning(props: { data: PageQuery; query: string; variables: PageQueryVariables }) {

   const {data} = useTina(props)
  return (
    <div>
      {data.page.blocks?.map((block,i) => {        
        switch (block?.__typename) {
          case "PageBlocksHero":
            if (block.label === "About") {
              return <OverviewSection key={i} {...block} />;
            } else if (block.label === "Call to Action") {
              return <BookingSection key={i} {...block} />;
            }
            break;
        
          case "PageBlocksFeature":
            if (block.label === "Feature") {
              return <ServicesSection key={i} {...block} />;
            } else if (block.label === "Feature2") {
              return <HowItWorksSection key={i} {...block} />;
            }
            break;
            
          case "PageBlocksSerivces":
            return <VehicleFleetSection key={i} {...block} />;
        
          default:
            return null;
        }
      })}
    </div>
  )
}


