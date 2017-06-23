import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from './api'

export type SelectNumberProps = { 
  setNumber: (a:number) => void,
  moveNext: () => void,
  movePrev: () => void,
  step: number,
  value: number
}
export type SelectNumberState = {
  api_numbers: Immutable.List<number> | "loading"
}
export default class SelectNumber extends React.Component<SelectNumberProps, SelectNumberState> {
  constructor(props) {
    super(props);
    this.state = { api_numbers: "loading" } ;
  }

  render() {
    return (
    <div>
      <p>Select your {(this.props.step - 1 == 1 ? 'first': 'second')} number</p> 
      <p>
        { this.state.api_numbers == "loading" ? <div>Loading..</div> :
        <select name="available_numbers" onChange={ (e) => this.props.setNumber(parseInt(e.currentTarget.value)) }>
          <option value="0" key="0" selected>- Select number -</option>
          { this.state.api_numbers.map(e => <option value={e} key={e}>{e}</option> ) }
          </select> }
      </p>
      <p>
        <button onClick={(e) => this.props.movePrev()}>Back</button>
        <button onClick={(e) => this.props.moveNext()}>Submit</button>
      </p>
    </div>
    );

  }
  
  componentDidMount(){
    Api.getAvailableNumbers().then((e) => {
      this.setState({...this.state,  api_numbers: e })  
    })  
  }
}

