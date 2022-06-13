import React from "react"
export const Filter = ({ value, onChange }) => {
            return <>
                    <h2>Find contacts by name</h2>
            <input type="text" value={value} onChange= {onChange} />
        </>
}
// export class Filter extends Component {

//     onChangeHandler = (e) => {
//     this.setState({filter: e.currentTarget.value})
// }


//     render() {
//         return <>
//             <h2>Find contacts by name</h2>
//             <input type="text" value="" />
//         </>
//     }
// }
