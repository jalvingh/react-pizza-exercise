import React from "react";
import AddPizzaForm from "./AddPizzaForm";
import { connect } from "react-redux";

class AddPizzaFormContainer extends React.Component {
  addPizza = (pizza) => {
    this.props.dispatch({
      type: "ADD_PIZZA",
      payload: { ...pizza }
    })
  }

  render() {
    return <AddPizzaForm addPizza={this.addPizza} />
  }
}

export default connect()(AddPizzaFormContainer);