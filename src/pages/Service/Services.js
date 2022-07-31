import React, {Component} from 'react'
import Register from "../LoginRegister/Register";


class Services extends Component{
  constructor(props, context, register) {
    super(props, context);
    }
  render() {
    return (
        <div className="container">
          <Register/>
        </div>
    )
  }


}
export default Services;