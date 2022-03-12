import Color from "./Color";
import { useColors } from "./color-hooks";


export default function ColorList() {
    const { colors } = useColors();

    if (!colors.length) return <div>No colors listed.</div>;
    else {
        return <>
            {colors.map(color => <Color key={color.id} {...color} />)}
        </>
    }
};
