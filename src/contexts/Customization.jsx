import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [gem, setGem] = useState("white");
  const [materialType, setMaterialType] = useState("gold");
  const [engraveInputValue, setEngrave] = useState("");
  const [karats, setKarats] = useState("10K");
  return (
    <CustomizationContext.Provider
      value={{
        gem,
        setGem,
        materialType,
        setMaterialType,
        engraveInputValue,
        setEngrave,
        karats,
        setKarats,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
