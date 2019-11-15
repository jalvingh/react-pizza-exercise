import React from "react";

export default function PizzaDetails(props) {
    console.log(props);
    
  const pizza = props.pizza;
  return (
    <div>
      <h2>{ pizza.name }</h2>

      <p>
        <i>{ pizza.description }</i>
      </p>

      <ul>
        {pizza.ingredients.map(ingredient => {
          return (
            <li key={ingredient}>{ ingredient }</li>
          );
        })}
      </ul>
    </div>
  );
}