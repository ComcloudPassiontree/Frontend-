export const TYPOGRAPHY_CLASSES = "font-primary"

export const getTypographyClasses = (customClassName?:string, bold?:boolean) => {
    let classNames = [TYPOGRAPHY_CLASSES];
    if(bold){
        classNames.push(`font-[700]`)
    }
    if(customClassName){
        classNames.push(customClassName)
    }
    return classNames
}