import clsx from "clsx";

export const appendUrlParts = (destination:string) => {
    if(destination.startsWith("/")){
        return destination
    }
    const currentPath = new URL(window.location.href).pathname;
    return `${currentPath.split('/').slice(0, -1).join('/')}/${destination}`
}

export const getButtonClasses = (variant:string, className?:string, isDisabled?:boolean) => {
    return clsx(
        "app-primary-button",
        "uppercase",
        "border-[2px]",
        "rounded-[8px]",
        "px-[22px] py-[9px]",
        !isDisabled ? `bg-${variant}` : 'bg-grey-300',
        !isDisabled ? "border-black" : "border-grey-500",
        !isDisabled ? "cursor-pointer" : "cursor-not-allowed",
        "text-white",
        !className?.includes("w-") && "w-max",
        "transition",
        "no-underline",
        "block",
        !isDisabled && `hover:scale-[1.03] bg-${variant}-900`,
        className
      )
}