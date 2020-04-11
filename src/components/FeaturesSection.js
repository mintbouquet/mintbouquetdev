import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Card>
          <Features
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Amounts",
                body:
                  "Easily view the amount of your individual flower strains.",
                image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg"
              },
              {
                title: "Maintenance",
                body:
                  "See when your strains may need a humidity pack replacement.",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg"
              },
              {
                title: "Usage",
                body:
                  "See what strains you enjoy most and when you should replenish.",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg"
              },
              {
                title: "Stay Fresh",
                body:
                  "View purchase and harvest dates to ensure freshness.",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
              }
            ]}
          ></Features>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
