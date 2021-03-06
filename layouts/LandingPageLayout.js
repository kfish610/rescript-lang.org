// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Meta from "../components/Meta.js";
import * as React from "react";
import * as Footer from "../components/Footer.js";
import * as Markdown from "../components/Markdown.js";
import Link from "next/link";
import * as Navigation from "../components/Navigation.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as React$1 from "@mdx-js/react";

function LandingPageLayout$CallToActionButton(Props) {
  var children = Props.children;
  return React.createElement("button", {
              className: "transition-colors duration-200 inline-block text-base text-white hover:bg-fire-80 hover:text-white bg-fire rounded border border-fire-80 px-5 py-2"
            }, children);
}

function LandingPageLayout$SubtleButton(Props) {
  var children = Props.children;
  return React.createElement("button", {
              className: "transition-colors duration-200 inline-block text-base text-fire rounded border-2 border-fire-80 hover:bg-fire-10 px-5 py-2"
            }, children);
}

function LandingPageLayout(Props) {
  var componentsOpt = Props.components;
  var children = Props.children;
  var components = componentsOpt !== undefined ? Caml_option.valFromOption(componentsOpt) : Markdown.$$default;
  var overlayState = React.useState(function () {
        return false;
      });
  return React.createElement(React.Fragment, undefined, React.createElement(Meta.make, {}), React.createElement("div", {
                  className: "mt-4 xs:mt-16"
                }, React.createElement("div", {
                      className: "text-night text-lg"
                    }, React.createElement(Navigation.make, {
                          overlayState: overlayState
                        }), React.createElement("div", {
                          className: "absolute top-18 w-full"
                        }, React.createElement("div", {
                              className: "flex justify-center overflow-hidden",
                              style: {
                                backgroundColor: "#0E1529"
                              }
                            }, React.createElement("div", {
                                  className: "max-w-1280 w-full"
                                }, React.createElement("div", {
                                      className: "relative overflow-hidden w-full",
                                      style: {
                                        paddingBottom: "23.5587189%"
                                      }
                                    }, React.createElement("img", {
                                          className: "absolute top-0 left-0 object-cover w-full h-full",
                                          src: "/static/hero.jpg"
                                        })))), React.createElement("div", {
                              className: "relative flex xs:justify-center overflow-hidden pb-32"
                            }, React.createElement("main", {
                                  className: "mt-10 min-w-320 lg:align-center w-full px-4 md:px-8 max-w-1280 "
                                }, React.createElement(React$1.MDXProvider, {
                                      components: components,
                                      children: React.createElement("div", {
                                            className: "flex justify-center"
                                          }, React.createElement("div", {
                                                className: "w-full max-w-705"
                                              }, React.createElement("div", undefined, React.createElement("h1", {
                                                        className: "text-80 xs:text-100 font-semibold"
                                                      }, "ReScript"), React.createElement("p", {
                                                        className: "text-21 font-bold mb-2"
                                                      }, "The JavaScript-like language you have been waiting for."), React.createElement("p", {
                                                        className: "text-14 italic"
                                                      }, "Previously known as BuckleScript and Reason (", React.createElement(Link, {
                                                            href: "/bucklescript-rebranding",
                                                            children: React.createElement("a", {
                                                                  className: "text-fire hover:pointer hover:underline"
                                                                }, "Learn more")
                                                          }), ")")), React.createElement("div", {
                                                    className: "mt-16 text-center flex space-y-4 flex-col xs:space-y-0 xs:flex-row xs:space-x-8 pb-48"
                                                  }, React.createElement(Link, {
                                                        href: "/docs/manual/latest/installation",
                                                        children: React.createElement("a", undefined, React.createElement(LandingPageLayout$CallToActionButton, {
                                                                  children: "Getting started"
                                                                }))
                                                      }), React.createElement(Link, {
                                                        href: "/docs/manual/latest/introduction",
                                                        children: React.createElement("a", undefined, React.createElement(LandingPageLayout$SubtleButton, {
                                                                  children: "Read the Documentation"
                                                                }))
                                                      })), children))
                                    }))), React.createElement(Footer.make, {})))));
}

var make = LandingPageLayout;

export {
  make ,
  
}
/* Meta Not a pure module */
