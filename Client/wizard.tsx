import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import SelectName from "./select_name"
import SelectNumber from "./select_number"
import SumNumbers from "./sum_numbers"

export type WizardProps = {}
export type WizardState = { 
  name: string;
  first: number;
  second: number;
  step: 1|2|3|4;
}
export class Wizard extends React.Component<WizardProps, WizardState> {
  constructor(props:WizardProps, context:any) {
    super(props, context)
    this.state = {
      name: "",
      first: 0,
      second: 0,
      step: 1
    }
  }

  render() : JSX.Element {
    switch (this.state.step) {
      case 1:
        return (
          <SelectName name={this.state.name} 
            moveNext={() => this.setState({...this.state, step:2 })} 
            setName={(name) => this.setState({...this.state, name })}>
          </SelectName>
        )

      case 2:
        return (
          <div>
            <h4>Hallo {this.state.name}!</h4>
            <SelectNumber value={this.state.first} 
              step={this.state.step}
              moveNext={() => this.setState({...this.state, step:3 })} 
              movePrev={() => this.setState({...this.state, step:1 })} 
              setNumber={(v) => this.setState({...this.state, first: v })}>
            </SelectNumber>
          </div>
        )

      case 3:
        return (
          <div>
            <h4>Hello {this.state.name}!</h4>
            <SelectNumber value={this.state.second} 
              step={this.state.step}
              moveNext={() => this.setState({...this.state, step:4 })} 
              movePrev={() => this.setState({...this.state, step:2 })} 
              setNumber={(v) => this.setState({...this.state, second: v })}>
            </SelectNumber>
          </div>
        )

      case 4:
        return (
          <div>
            <h4>Hallo {this.state.name}!</h4>
            <SumNumbers first={this.state.first} second={this.state.second}>
            </SumNumbers>
            <a href="/">Start over</a>
          </div>
        )
    }
  }

}

export function wizard(target_element_id:string):void {
  ReactDOM.render(
    <Wizard />,
    document.getElementById(target_element_id)
  )
}