import React from "react";
import CarouselComp from "./contents/CarouselComp";
import MainInfoSect from "./contents/MainInfoSect";
import SectionComp from "./contents/SectionComp";

export default function Main() {
  /******************************** Main ******************************

Slider:
every 3 second slides to next picture
right left arrows will redirect to next or previous images
images will be 100% width of screen!
contents must have max-width so that it can look better in wider screen
Info-panel:
Only information texts and icons, DO NOT INCLUDE SCREENSHOTS OF FIGMA
Categories:
Design a Single Category and map over the Categories that from
back-end and render every category in row order
Every Category filters the foods (by name) and map over 4 of the foods
and send the information to Card component to render
When Бүгдийг харах button clicked Open Menu component with selected category
*******************************************************************************/

  return (
    <>
      <CarouselComp />
      <MainInfoSect />
      <SectionComp />
    </>
  );
}