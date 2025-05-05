import React from "react";
import "./field.css"
import { useState } from "react";
import { Fieldlayout } from "./Fieldlayout";


export const Field = ({currentPlayer, onCellClick, field}) => {
    return <Fieldlayout field={field} onCellClick={onCellClick}/>
}