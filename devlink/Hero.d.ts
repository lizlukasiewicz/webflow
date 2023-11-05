import * as React from "react";
import * as Types from "./types";

declare function Hero(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  buttonAction?: Types.Devlink.RuntimeProps;
  buttonText?: React.ReactNode;
  heroBottom?: Types.Devlink.Slot;
}): React.JSX.Element;
