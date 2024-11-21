import { CSSProperties, ReactNode } from "react"

export interface ComponentTypes {
    testId?:string
    style?: CSSProperties
    className?: string
    children?:ReactNode
}


export interface BaseComponentTypes extends ComponentTypes {}
export interface BaseComponentProps extends ComponentTypes {}