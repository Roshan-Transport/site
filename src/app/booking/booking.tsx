'use client'

import { PageQuery, PageQueryVariables } from "../../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import {BookingSection} from "../services/transport/transport";


export default function Cleaning(props: { data: PageQuery; query: string; variables: PageQueryVariables }) {

   const {data} = useTina(props)
    return (
      <div>  
        {data.page.blocks?.map((block,i) => {
            
            if (block && block.__typename === "PageBlocksHero") {
              return <BookingSection key={i} {...block} />;
            }
            return null;
        })} 
      </div>
    )
  }