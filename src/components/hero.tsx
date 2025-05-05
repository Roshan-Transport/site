import Link from "next/link";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

const Hero = (props: PageBlocksHero) => {
  return (
    <div
      className="hero-section h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url('/placeholder.svg?height=800&width=1600')` }}
    >

      <div className="hero-content text-center px-4" data-tina-field={tinaField(props, "message")}>
      <TinaMarkdown content={props.message}
      components={{
        h1: (props) => <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" {...props}/>,
        p: (props) => <p className="text-xl md:text-2xl mb-8" {...props}/>,
      }}
      />
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {props.links?.map((link, i) => (
          <Link  data-tina-field={tinaField(link, "label")}
           key={i} href={link?.link || ''} className={link?.style || ""}>
          {link?.label}
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Hero;