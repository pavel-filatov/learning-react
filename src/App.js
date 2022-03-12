import ColorProvider from "./components/color-hooks";
import ColorOrganizer from "./components/ColorOrganizer";
import Menu from "./components/Menu";
import StarRating from "./components/StarRating";
import data from "./data/recipies.json";



export default function App() {
    return <ColorProvider>
        <h1>Menu</h1>
        <Menu recipies={data} title="Delicious Recipies" />
        <h1>Star Rating</h1>
        <StarRating />
        <h1>Color Data</h1>
        <ColorOrganizer />
    </ColorProvider>
};
