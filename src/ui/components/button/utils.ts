export const appendUrlParts = (destination:string) => {
    if(destination.startsWith("/")){
        return destination
    }
    const currentPath = new URL(window.location.href).pathname;
    return `${currentPath.split('/').slice(0, -1).join('/')}/${destination}`
}