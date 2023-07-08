export function errorHandler(e: unknown){
    if(typeof e == "string"){ throw (new Error(e as string)); }
    else if(e instanceof Error){ throw (new Error(e.message)); }
    return <never>{};
}