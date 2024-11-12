import React from "react";
import { useContext } from "react";
import Context from "../../context/context";
import { ProgressBar } from "react-aqfa-bar";

export const SkillItem = ({ value, title }) => {
  const { colorTheme } = useContext(Context);
  return (
    <div className="w-full flex flex-col">
      <h2 className="ml-4 font-black">{title}</h2>
      <ProgressBar
        barStyle={{ backgroundColor: "#c74343" }}
        value={value}
        barBgStyle={{
          backgroundColor: `${colorTheme == "light" ? "#121212" : "#cccccc"}`,
        }}
        totalValue={100}
        containerStyle={{ width: "95%", backgroundColor: "transparent" }}
      />
    </div>
  );
};
