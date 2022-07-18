import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {githubActions} from "../store/gitHub/github.slice";

const actions = {
    ...githubActions
}

export const useActions = () =>{
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}