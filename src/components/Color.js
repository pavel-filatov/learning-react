import { FaTrash } from "react-icons/fa";
import { useColors } from "./color-hooks";
import StarRating from "./StarRating";

export default function Color({ id, title, color, rating }) {
    const { removeColor, rateColor } = useColors();
    return <section>
        <h2>{title}</h2>
        <button onClick={() => removeColor(id)}><FaTrash /></button>
        <div style={{ height: 50, backgroundColor: color }} />
        <StarRating selectedStars={rating} onRate={r => rateColor(id, r)} />
    </section>
};