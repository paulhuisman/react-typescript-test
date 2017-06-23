import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"

export type SelectNameProps = { 
  setName: (name:string) => void,
  moveNext: () => void,
  name: string
}
export type SelectNameState = {}
export default class SelectName extends React.Component<SelectNameProps, SelectNameState> {
  render() {
    return (
    <div>
      <p>Naam</p> 
      <p>
        <input type="text" onChange={(e) => this.props.setName(e.currentTarget.value)} value={ this.props.name } />
      </p>
      <p>
        <button onClick={(e) => this.props.moveNext()}>Submit</button>
      </p>
    </div>
    );

  }
}
