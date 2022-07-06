import React from "react";
import Recipes from "./Recipies";

import "./styles/index.scss";

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Hi, React</h1>
                </section>
            </main>
            <Recipes />
        </>
    );
}

export default App;