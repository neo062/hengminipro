import React from "react";
import ViedoPart from "./Components/ViedoPart";
import Heading from "./Components/Heaing";
import { AddtoCart } from "./Components/AddtoCart";
import { ProductDescription1 } from "./Components/ProductDescription1.jsx";
import { ProductDescription2 } from "./Components/ProductDescription2.jsx";
import { Specification } from "./Components/Specification";
import { Img } from './Components/Img.jsx';
import imgData from "./Assets/imgData";
import { Slider } from "./Components/Slider";

const [img1, gif1, gif2, gif3, gif4, gif5] = imgData;
function App() {
  return (
    <div className="App">
      <ViedoPart />
      <Slider />
      <AddtoCart />
      <Heading
        className="firstHeading"
        heading1="More than a Desk Lamp"
        heading2="The Henglamp  is a Piece of Art."
        paragrapg="The Heng Balance Lamp is the traditional lamp next door with an unconventional twist that makes it the lamp like no other, ergo it will light up your room like none of the other lamps can."
      />
      <div style={{ "position": "relative", "top": "15vw" }}>
        <ProductDescription1
          top="OPTIMIZE THE SWITCH TO REDUCE MISOPERATION."
          middle="Switch"
          buttom="The two small balls attract each other and the lamp body is light.When turning off the lights, only need to put the bottom ball on the base."
          class="desctype1"
          gif={gif1}
        />
        <ProductDescription2
          top='SIDE TOUCH DIMMER'
          middle='Touch dimming'
          buttom='Tap O to switch between cold and warm light. Touch +,- to adjust the brightness 6-speed mode adjustment'
          gif={gif2}
          class="desctype2"
        />
        <ProductDescription1
          top="LONG LASTING BATTERY LIFE"
          middle="Battery life"
          buttom="Type-C interface, built-in 1500 mAh lithium-ion battery, to meet 4-6 hours of lighting. When the side indicator flashes red, please charge it as soon as possible.  full charge, the changes to green."
          gif={gif3}
          class="desctype3"
        />
        <ProductDescription2
          top='SIDE TOUCH DIMMER'
          middle='Vibrant Colours'
          buttom='This can be a eye catching lamp for your living room or bedroom.The vibrant colourful options makes it perfect for modern art, photography and artists.'
          gif={gif4}
          class="desctype4"
        />

      </div>
      <Heading
        className="secondHeading"
        heading1="Easy Balanced Life"
        heading2="Originality Control Mode"
        paragrapg="When bringing the two wooden balls together they will remain suspended in mid-air and the lighting element embedded in the frame will light up"
      />
      <div style={{ "position": "relative", "top": "25vw" }}>
        <Img
          img={gif5}
        />
        <Specification
          img={img1}
        />
      </div>

    </div>
  );
}

export default App;
