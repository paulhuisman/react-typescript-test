import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from './api'

export type SumNumbersProps = { 
  first: number,
  second: number
}
export type SumNumbersState = {
    sum: number | "calculating"
}
export default class SumNumbers extends React.Component<SumNumbersProps, SumNumbersState> {
 constructor(props) {
    super(props);
    this.state = { sum: "calculating" } ;
  }
  render() {
    return (
    <div>
        <p>
            The sum of your numbers is ... { this.state.sum == "calculating" ? "calculating data.." : this.state.sum  }
        </p> 
    </div>
    );

  }

  api_sum_numbers() {
      let list = Immutable.List<number>([this.props.first, this.props.second])
      Api.addNumbers(list).then((e) => {
        this.setState({...this.state,  sum: e })  
      }).catch((e) => {
        // Failed
        setTimeout((e) => this.api_sum_numbers(), 200)
      })
  }
  
  componentDidMount() {
      this.api_sum_numbers()
  }
}

