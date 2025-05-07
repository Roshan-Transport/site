'use client'

import BookingForm from "@/components/booking-form"
import Link from "next/link"
import {PageBlocksFeature, PageBlocksHero, PageBlocksSerivces, PageQuery, PageQueryVariables } from "../../../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { featuredIcon } from "@/app/HomePage"


export default function Transport(props: { data: PageQuery; query: string; variables: PageQueryVariables }) {

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

export function OverviewSection(props: PageBlocksHero) {
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
            <img
              src={props.background || ''}
              alt="Disability Transport Service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection(props: PageBlocksFeature) {
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

export function VehicleFleetSection(props: PageBlocksSerivces) {
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
            {card?.background && <div className="relative h-64">
              <img
              src={card.background || ''}
                alt="Wheelchair Accessible Van"
              className="w-full h-full object-cover"
            />
            </div>}
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

export function HowItWorksSection(props: PageBlocksFeature) {
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

export function BookingSection(props: PageBlocksHero) {
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



