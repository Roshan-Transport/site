'use client'

import Hero from "@/components/hero"
import BookingForm from "@/components/booking-form"
import Link from "next/link"
import Image from "next/image"
import {PageBlocksFeature, PageBlocksHero, PageBlocksSerivces, PageQuery, PageQueryVariables } from "../../../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text"


export default function Transport(props: { data: PageQuery; query: string; variables: PageQueryVariables }) {

   const {data} = useTina(props)

  return (
    <div>
      {data.page.blocks?.map((block,i) => {        
        switch (block?.__typename) {
          case "PageBlocksHero":
            if (block.label === "Hero") {
              return <Hero key={i} {...block} />;
            } else if (block.label === "About") {
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

function OverviewSection(props: PageBlocksHero) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">  
          <div data-tina-field={tinaField(props, "message")}>
          <TinaMarkdown
            content={props.message}
            components={{
              h2: (props?: { children: React.ReactNode }) => (props ? <h2 className="text-3xl font-bold mb-6" {...props} /> : null),
              p: (props?: { children: React.ReactNode }) => (props ? <p className="text-lg mb-4" {...props}/> : null),
            }}/>
            {props.links?.map((link, i) => (
          <Link 
            data-tina-field={tinaField(link, "label")}
            key={i} 
            href={link?.link || ''} 
          className={`${link?.style} inline-block`}
              >
            {link?.label}
          </Link>
        ))}
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl" data-tina-field={tinaField(props, "background")}>
            <Image
              src={props.background || "/placeholder.svg?height=500&width=800"}
              alt="Disability Transport Service"
              fill
              style={{ objectFit: "cover" }}              
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection(props: PageBlocksFeature) {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">

        {props.cards?.map((card, i) => {
          return (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md" data-tina-field={tinaField(card, "label")}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              {card && card.icon && featuredIcon[card.icon as keyof typeof featuredIcon]}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{card?.label}</h3>
              <p className="text-gray-600 text-center">{card?.description}</p>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}

function VehicleFleetSection(props: PageBlocksSerivces) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div data-tina-field={tinaField(props, "message")}>
          <TinaMarkdown 
            content={props.message}
            components={{
              h2: (props?: { children: React.ReactNode }) => (props ? <h2 className="section-title" {...props} /> : null),
              p: (props?: { children: React.ReactNode }) => (props ? <p  className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto" {...props}/> : null),
            }}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {props.card?.map((card, i) => {
              return (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden" data-tina-field={tinaField(card, "label")}>
            <div className="relative h-64">
              <Image
                src={card?.background|| "/placeholder.svg?height=500&width=800"}
                alt="Wheelchair Accessible Van"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{card?.label}</h3>
                <ul className="space-y-2 text-gray-600">                  
                <TinaMarkdown content={card?.points} components={{
                  li: (props?: { children: React.ReactNode }) => props ?
                  <li className="flex items-start mb-2.5">
                  {featuredIcon.check}
                  <span>{props.children}</span>
                </li> : null,
                }}/>
              </ul>
            </div>
          </div>)
          })}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection(props: PageBlocksFeature) {
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {props.cards?.map((card, i) => {
          return (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center" data-tina-field={tinaField(card, "label")}>
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
              {card?.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{card?.label}</h3>
              <p className="text-gray-600">{card?.description}</p>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}

function BookingSection(props: PageBlocksHero) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div data-tina-field={tinaField(props, "message")}>
          <TinaMarkdown 
            content={props.message}
            components={{
              h2: (props?: { children: React.ReactNode }) => (props ? <h2 className="section-title" {...props} /> : null),
              p: (props?: { children: React.ReactNode }) => (props ? <p  className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto" {...props}/> : null),
            }}/>
        </div>
        <div className="max-w-2xl mx-auto">
          <BookingForm serviceType="transport" />
        </div>
      </div>
    </section>
  )
}

const featuredIcon = {
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
  group:( <svg
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

