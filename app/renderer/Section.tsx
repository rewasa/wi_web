import type { ContentFeatureProps } from "~/components/Content/ContentFeature";
import { ContentFeature } from "~/components/Content/ContentFeature";
import { HTMLComponent } from "~/components/Content/HTMLComponent";
import type { HeadingProps } from "~/components/Heading/Heading";
import { Heading } from "~/components/Heading/Heading";
import type { HeroProps } from "~/components/Hero/Hero";
import { Hero } from "~/components/Hero/Hero";
import type { ServicesProps } from "~/components/Services/Services";
import { Services } from "~/components/Services/Services";

import type { Section } from "~/page.server";

const sectionTypes = {
  Heading: Heading,
  Hero: Hero,
  Services: Services,
  ContentFeature: ContentFeature,
  HTMLComponent: HTMLComponent,
};

type SectionProps = {
  section: Section;
};

export const SectionRenderer = (props: SectionProps) => {
  console.log(JSON.stringify(props, null, 2));
  const section = props.section;
  const component = sectionTypes[section.collection];
  if (!component) {
    return <p>Component {section.collection} not Exists!</p>;
  }
  return component(section.item as any);
};
