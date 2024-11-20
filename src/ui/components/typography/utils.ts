export const TYPOGRAPHY_CLASSES = "text-[40px] font-primary"
export const BOLD_FONT_WEIGHT = 700

export const getTypographyClasses = (customClassName?:string, bold?:boolean) => {
    let classNames = [TYPOGRAPHY_CLASSES];
    if(bold){
        classNames.push(`font-[${BOLD_FONT_WEIGHT}]`)
    }
    if(customClassName){
        classNames.push(customClassName)
    }
    return classNames
}