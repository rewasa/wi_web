import type { HeroProps } from "~/components/Hero/Hero";
import { Hero } from "~/components/Hero/Hero";
import type { ServicesProps } from "~/components/Services/Services";
import { Services } from "~/components/Services/Services";
import type { Section } from "~/page.server";

const sectionTypes = {
  Hero: Hero,
  Services: Services,
};

type SectionProps = {
  section: Section;
};

export const SectionRenderer = (props: SectionProps) => {
  console.log(props);
  const section = props.section;
  const component = sectionTypes[section.collection];
  if (!component) {
    return <p>Component {section.collection} not Exists!</p>;
  }
  return component(section.item as HeroProps & ServicesProps);
};
