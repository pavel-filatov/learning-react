import AddColorForm from "./AddColorForm";
import { useColors } from "./color-hooks";
import ColorList from "./ColorList";


export default function ColorOrganizer() {
    const { addColor, removeColor, rateColor } = useColors();
    return <>
        <ColorList
            onRemoveColor={removeColor}
            onRate={rateColor}
        />
        <AddColorForm onNewColor={addColor} />
    </>
};
