function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <ul className="ingredients">
                {ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}
            </ul>
            <section className="instructions">
                <h2>Cooking instructions</h2>
                <ol>
                    {steps.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
            </section>
        </section>
    )
};

export default Recipe;