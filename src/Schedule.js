import React, {Component} from 'react'
import Tabletop from 'tabletop'


//schedule is currently a demo and will need to be changed by STC, also the spreadsheet should be changed incase of a special schedule
//https://docs.google.com/spreadsheets/d/10vPuNBvhVqgznb-boGDCB__LI_0YPuemINi-GFVBb5s/edit?usp=sharing
class Schedule extends Component {
    constructor() {
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '10vPuNBvhVqgznb-boGDCB__LI_0YPuemINi-GFVBb5s',
            callback: googleData => {
                this.setState({
                    data: googleData
                })
            },
            simpleSheet: true
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div className="App"> {
                    data.map(obj => {
                            return (
                                <table>
                                <tr>
                                    <div key={obj.time}>
                                        <td>{obj.time}</td>
                                        <td>{obj.period}</td>
                                    </div>
                                </tr>
                                </table>
                        )
                    })
                }
        </div>
    )
  }
}

export default Schedule