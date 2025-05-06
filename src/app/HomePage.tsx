"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import ServiceCard from "@/components/service-card";
import { useTina } from "tinacms/dist/react";
import { PageBlocksFeature, PageBlocksHero, PageBlocksSerivces, PageQuery, PageQueryVariables } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";


export default function HomePage(props: { data: PageQuery; query: string; variables: PageQueryVariables }) {

  const {data} = useTina(props)

  return (
    <div>
      {data.page.blocks?.map((block,i) => {        
        switch (block?.__typename) {
          case "PageBlocksHero":
            if (block.label === "Hero") {
              return <Hero key={i} {...block} />;
            } else if (block.label === "About") {
              return <AboutSection key={i} {...block} />;
            } else if (block.label === "Call to Action") {
              return <CTASection key={i} {...block} />;
            }
            break;
        
          case "PageBlocksFeature":
            return <WhyChooseUsSection key={i} {...block} />;

          case "PageBlocksSerivces":
            return <ServicesSection key={i} {...block} />;
        
          default:
            return null;
        }
      })}
    </div>
  );
}

function WhyChooseUsSection(props: PageBlocksFeature) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-tina-field={tinaField(props, "message")}>
      <TinaMarkdown 
        content={props.message}
        components={{
          h2: (props?: { children: React.ReactNode }) => props ? <h2 className="section-title" {...props}/> : null,
        }}
      />
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {props.cards?.map((card, i) => {
          return (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md"  data-tina-field={tinaField(card,"label")}>
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              {card && card.icon && featuredIcon[card.icon as keyof typeof featuredIcon]}
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{card?.label}</h3>
            <p className="text-gray-600 text-center">
              {card?.description}
            </p>
          </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}

function AboutSection(props: PageBlocksHero) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-tina-field={tinaField(props, "message")}>
        <div>   
          <TinaMarkdown 
            content={props.message}
            components={{
              h2: (props?: { children: React.ReactNode }) => (props ? <h2 className="section-title" {...props} /> : null),
              p: (props?: { children: React.ReactNode }) => (props ? <p className="hidden" {...props}/> : null),
            }}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <TinaMarkdown 
              content={props.message}
              components={{
                h2: (props?: { children: React.ReactNode }) => (props ? <h2 className="hidden" {...props} /> : null),
                p: (props?: { children: React.ReactNode }) => props ? <p className="text-lg mb-4" {...props}/> : null,
              }}
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl"  data-tina-field={tinaField(props, "background")}>
            <Image
              src={props.background || ""}
              alt="About RoshanTransport"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection(props: PageBlocksSerivces) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-tina-field={tinaField(props, "message")}>
          <TinaMarkdown 
            content={props.message}
            components={{
              h2: (props?: { children: React.ReactNode }) => (props ? <h2 className="section-title" {...props} /> : null),
              p: (props?: { children: React.ReactNode }) => (props ? <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto" {...props}/> : null),
            }}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {props.card?.map((card, i) => {
              return (
                <div data-tina-field={tinaField(card, "label")} key={i}>
                <ServiceCard
                  title={card?.label || "Service Title"}
                  description={card?.message || "Service Description"}
                  imageSrc={card?.background || "/placeholder.svg?height=400&width=600"}
                  link={card?.links || "#"}
                />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

function CTASection(props: PageBlocksHero) {
  return (
    <section className="py-16 bg-amber-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div data-tina-field={tinaField(props, "message")}>   
          <TinaMarkdown 
            content={props.message}
            components={{
              h2: (props?: { children: React.ReactNode }) => (props ? <h2 className="text-3xl md:text-4xl font-bold mb-6" {...props} /> : null),
              p: (props?: { children: React.ReactNode }) => (props ? <p className="text-xl mb-8 max-w-3xl mx-auto" {...props}/> : null),
            }}/>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {props?.links?.map((link, i) => {
            return (
              <Link
                key={i}
                href={link?.link || "#"}
                className={link?.style || ""}
                data-tina-field={tinaField(link, "label")}
              >
                {link?.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


const featuredIcon = {
  shield: (<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-amber-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>),
  clock: (<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-amber-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>),
  group: (<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-amber-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>),
  home: (<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-amber-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>),
}
