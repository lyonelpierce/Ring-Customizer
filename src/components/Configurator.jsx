import { useState } from "react";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    gem,
    setGem,
    materialType,
    setMaterialType,
    setEngrave,
    karats,
    setKarats,
  } = useCustomization();
  const [engraveInputValue, setEngraveInputValue] = useState("");

  const handleEngraveInputChange = (event) => {
    setEngraveInputValue(event.target.value);
  };

  const handleEngraveButtonClick = () => {
    setEngrave(engraveInputValue);
  };

  const getPrice = (gem, materialType, karats) => {
    // Base prices
    const gemPrices = {
      white: 700,
      red: 500,
      green: 400,
      aquamarine: 150,
      blue: 300,
    };
    const materialPrices = {
      gold: 500,
      rosegold: 300,
    };
    const karatPrices = {
      "10K": 200,
      "14K": 500,
      "18K": 1000,
    };
    const engravePrice = 10;

    // Calculate gem price
    const gemPrice = gemPrices[gem];

    // Calculate material price
    const materialPrice = materialPrices[materialType];

    // Calculate karat price
    const karatPrice = karatPrices[karats];

    // Calculate total price
    let totalPrice = gemPrice + materialPrice + karatPrice;

    return totalPrice;
  };

  const getPriceDifference = (gem1, gem2) => {
    const gemPrices = {
      white: 700,
      red: 500,
      green: 400,
      aquamarine: 150,
      blue: 300,
    };

    const gem1Price = gemPrices[gem1];
    const gem2Price = gemPrices[gem2];

    const difference = Math.abs(gem1Price - gem2Price);

    return difference;
  };

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Gem</div>
        <div className="configurator__section__values">
          <div className="tooltip">
            <span className="tooltiptext">Diamond</span>
            <div
              className={`circle ${gem === "white" ? "circle--active" : ""}`}
              onClick={() => setGem("white")}
            ></div>
          </div>
          {/* Item */}
          <div className="tooltip">
            <span className="tooltiptext">Ruby</span>
            <div
              className={`circle-red ${
                gem === "red" ? "circle-red--active" : ""
              }`}
              onClick={() => setGem("red")}
            ></div>
          </div>
          {/* Item */}
          <div className="tooltip">
            <span className="tooltiptext">Emerald</span>
            <div
              className={`circle-green ${
                gem === "green" ? "circle-green--active" : ""
              }`}
              onClick={() => setGem("green")}
            ></div>
          </div>
          {/* Item */}
          <div className="tooltip">
            <span className="tooltiptext">Aquamarine</span>
            <div
              className={`circle-aquamarine ${
                gem === "aquamarine" ? "circle-aquamarine--active" : ""
              }`}
              onClick={() => setGem("aquamarine")}
            ></div>
          </div>
          {/* Item */}
          <div className="tooltip">
            <span className="tooltiptext">Blue Sapphire</span>
            <div
              className={`circle-sapphire ${
                gem === "blue" ? "circle-sapphire--active" : ""
              }`}
              onClick={() => setGem("blue")}
            ></div>
          </div>
        </div>
        <div className="configurator__section__title">Material</div>
        <div className="configurator__section__values">
          {/* Item */}

          <div className="tooltip">
            <span className="tooltiptext">Gold</span>
            <div
              className={`circle-gold ${
                materialType === "gold" ? "circle-gold--active" : ""
              }`}
              onClick={() => setMaterialType("gold")}
            ></div>
          </div>
          {/* Item */}

          <div className="tooltip">
            <span className="tooltiptext">Rose gold</span>
            <div
              className={`circle-rosegold ${
                materialType === "rosegold" ? "circle-rosegold--active" : ""
              }`}
              onClick={() => setMaterialType("rosegold")}
            ></div>
          </div>
        </div>
        <div className="configurator__section__title">Karats</div>
        <div className="configurator__section__values">
          <div
            className={`karats ${karats === "10K" ? "karats--active" : ""}`}
            onClick={() => setKarats("10K")}
          >
            10K
          </div>

          <div
            className={`karats ${karats === "14K" ? "karats--active" : ""}`}
            onClick={() => setKarats("14K")}
          >
            14K
          </div>
          <div
            className={`karats ${karats === "18K" ? "karats--active" : ""}`}
            onClick={() => setKarats("18K")}
          >
            18K
          </div>
        </div>

        <div className="configurator__section__title">Size</div>
        <div className="configurator__section__values">
          <select>
            <option>5</option>
            <option>5.5</option>
            <option>6</option>
            <option>6.5</option>
            <option>7</option>
            <option>7.5</option>
            <option>8</option>
            <option>8.5</option>
            <option>9</option>
            <option>9.5</option>
            <option>10</option>
          </select>
        </div>
        <div className="configurator__section__title">Engrave</div>
        <div className="configurator__section__values">
          <input
            className="engrave"
            id="engrave-input"
            type="text"
            value={engraveInputValue}
            placeholder="Type here..."
            onChange={handleEngraveInputChange}
            maxLength={25}
          />
          <button onClick={handleEngraveButtonClick}>Ok</button>
        </div>
        <div className="configurator__section__title">Price</div>
        <h3 className="price">${getPrice(gem, materialType, karats)}.00</h3>
      </div>
    </div>
  );
};

export default Configurator;
