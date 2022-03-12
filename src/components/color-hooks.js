import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
import colorData from "../data/color-data.json";



export const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) => {
        const newColor = { id: v4(), title, color, rating: 0 };
        setColors([...colors, newColor]);
    };

    const removeColor = (id) => {
        const updatedColors = colors.filter(c => c.id !== id);
        setColors(updatedColors);
    };

    const rateColor = (id, rating) => {
        const updatedColors = colors.map(c => (c.id === id ? { ...c, rating } : c));
        setColors(updatedColors)
    };

    return <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
        {children}
    </ColorContext.Provider>;
};

