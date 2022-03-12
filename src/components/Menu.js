import Recipe from "./Recipe";

function Menu({ recipies, title }) {
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="recipies">
                {recipies.map((recipe, i) => (<Recipe key={i} {...recipe} />))}
            </div>
        </article>
    )
};

export default Menu;