"use client";

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
                p: (props?: { children: React.ReactNode }) => props ? <p className="text-lg mb-4 text-justify" {...props}/> : null,
              }}
            />
          </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl" data-tina-field={tinaField(props, "background")}>
            <img
              src={props.background || ''}
              alt="About RoshanTransport"
              className="w-full h-full object-cover"
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
                  imageSrc={`${card?.background}`}
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


export const featuredIcon = { 
  phone:(<svg 
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
      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
      </svg>), 
  mail:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-amber-500"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>), 
  mappin:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-amber-500"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>),
  trash:(<svg
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
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>),
  cube: ( <svg
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
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>),
  folder: (<svg
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
      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    />
  </svg>),
  stars: (<svg
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
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>),
  grill: (<svg
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
      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>),
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
  user:(<svg
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>),
  building:(<svg
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
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>),
  cake:(<svg
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
      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
    />
  </svg>),
  book:( <svg
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
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>),
  cart:(<svg
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
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>),
  check:(<svg
    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>)
}
