import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    

    const[input, setInput] = useState("");
    const[recentPrompt, setRecentPrompt] = useState("");
    const[previousPrompt, setPreviousPrompt] = useState([]);
    const[displayResult, setDisplayResult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState("");
    
    const delayPara = (index, nextWord)=>{}

    const onSent = async (prompt)=>{

        setResultData("")   // remove previous response
        setLoading(true)
        setDisplayResult(true)
        setRecentPrompt(input)
        const response = await run(input)
        let responseArray = response.split("**");
        let newResponse;
        for(let i=0; i < responseArray.length; i++){
            if(i==0 || i%2 == 1){
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        setResultData(newResponse)
        setLoading(false)
        setInput("")    // reset input
    }

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        displayResult,
        loading,
        resultData,
        input,
        setInput,
        

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider