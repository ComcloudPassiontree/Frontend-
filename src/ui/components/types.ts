import React, { CSSProperties, ReactNode } from "react"


export interface ComponentTypes extends React.HTMLAttributes<any>{
    testId?:string
    style?: CSSProperties
    className?: string
    children?:ReactNode
}


export interface BaseComponentTypes extends ComponentTypes {}
export interface BaseComponentProps extends ComponentTypes {}


export interface BaseInputComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
    testId?:string
    style?: CSSProperties
    className?: string
    children?:ReactNode
    label?: string;
    hasError?:boolean;
    errorText?:string;
    hasSuccess?:boolean
    successText?:string;
}