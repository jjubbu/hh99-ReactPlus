//Lodash, Debounce, throttle 사용예시

import React from "react";
import _ from "lodash";

const Search = () => {

    const [text, setText] = React.useState("");

    //마지막의 1초후 실행
    const debounce = _.debounce((e)=>{
        console.log("debounce :::",e.target.value);
    }, 1000)
    
    //1초마다 실행
    const throttle = _.throttle((e)=>{
        console.log("throttle:::",e.target.value);
    },1000)

    const keyPressDebounce = React.useCallback(debounce,[]);
    const keyPressThrottle = React.useCallback(throttle,[]);

    const onChange = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
        keyPressDebounce(e);
        keyPressThrottle(e);
    }

    

    return (
    <div>
        <input type="text" onChange={onChange} value={text}/>
    </div>
    )
}

export default Search;