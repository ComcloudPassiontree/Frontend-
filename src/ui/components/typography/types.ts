import { ReactNode } from "react"
import { ComponentTypes } from "../types"

export interface TypographyTypes extends ComponentTypes {
    bold?: boolean
    children: ReactNode
}