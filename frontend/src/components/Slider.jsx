import { useState, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useFilters } from "../Context/FilterContext";

function PriceSlider() {
  const { updateFilters, batch } = useFilters();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [value, setValue] = useState([min, max]);
  useEffect(() => {
    // Construit l'URL avec le paramètre batch
    const url = `http://localhost:3310/api/display-adverts-byprice?batch=${batch}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.minPrice && data.maxPrice) {
          setMin(data.minPrice);
          setMax(data.maxPrice);
          setValue([data.minPrice, data.maxPrice]);
        }
      })
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des prix min et max:",
          error
        )
      );
  }, [batch]);

  const handleInput = (newValue) => {
    const minGap = 1;

    let newLowerValue = newValue[0];
    let newUpperValue = newValue[1];

    if (newUpperValue - newLowerValue < minGap) {
      if (newLowerValue > value[0]) {
        newUpperValue = newLowerValue + minGap;
      } else if (newUpperValue < value[1]) {
        newLowerValue = newUpperValue - minGap;
      }
    }

    if (newLowerValue >= min && newUpperValue <= max) {
      setValue([newLowerValue, newUpperValue]);
    }

    console.info("Nouvelles valeurs :", [newLowerValue, newUpperValue]);
    updateFilters({ priceMin: newValue[0], priceMax: newValue[1] });
  };

  console.info("Valeur de batch dans PriceSlider :", batch);

  return (
    <div className="price-slider-container">
      <div className="min-max-labels">
        <span>{min} €</span>
        <span>{max} €</span>
      </div>
      <RangeSlider
        className="double-thumb"
        value={value}
        min={min}
        max={max}
        onInput={handleInput}
      />
      <div className="values-display">
        <span className="slider-value slider-value-left">{value[0]} €</span>
        <span className="slider-value slider-value-right">{value[1]} €</span>
      </div>
    </div>
  );
}

export default PriceSlider;
