import React from "react";
import BackgroundImage from "./BackgroundImage";
import "./Section.scss";

function Section(props) {
  const {
    bg,
    textColor,
    bgImage,
    bgImageOpacity,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <section
      className={
        `SectionComponent py-5 position-relative ${className}` +
        (props.bg ? ` bg-${props.bg}` : "") +
        (props.textColor ? ` text-${props.textColor}` : "")
      }
      {...otherProps}
    >
      {bgImage && (
        <BackgroundImage
          image={bgImage}
          opacity={bgImageOpacity}
        ></BackgroundImage>
      )}

      <div
        className={
          "" +
          (["md", "lg"].includes(props.size) ? " py-md-5" : "") +
          (props.size === "lg" ? " my-md-5" : "")
        }
      >
        {props.children}
      </div>
    </section>
  );
}

export default Section;
