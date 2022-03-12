import { useColors } from "./color-hooks";
import { useInput } from "./hooks";


export default function AddColorForm() {
    const { addColor } = useColors();
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const onSubmit = (e) => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return <form onSubmit={onSubmit}>
        <input type="text" placeholder="Color name" {...titleProps} required />
        <input type="text" {...colorProps} required />
        <button>ADD</button>
    </form>
}