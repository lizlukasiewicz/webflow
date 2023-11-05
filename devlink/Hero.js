import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

export function Hero({
  as: _Component = _Builtin.Section,
  heading = "Heading",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  buttonAction = {},
  buttonText = "Button Text",
  heroBottom,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
          {heading}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
          {paragraph}
        </_Builtin.Paragraph>
        <_Builtin.Link
          className={_utils.cx(_styles, "button")}
          button={true}
          options={{
            href: "#",
            preload: "none",
          }}
          {...buttonAction}
        >
          {buttonText}
        </_Builtin.Link>
        <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
          {heroBottom}
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
