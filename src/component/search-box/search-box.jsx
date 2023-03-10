import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({className,placeholder,onChangeHandler}) => {
    return(
        <input 
            type = "search" 
            className = {className}
            placeholder = {placeholder}
            onChange = {onChangeHandler}
        />
    )
}
  
// class SearchBox extends Component{
//     render(){
//         return(
//             <input 
//                 type = "search" 
//                 className = {this.props.className}
//                 placeholder = {this.props.placeholder}
//                 onChange = {this.props.onChangeHandler}
//             />
//         )
//     }
// }
export default SearchBox