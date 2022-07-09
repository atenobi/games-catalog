export const pageReloader = async (ms, func) => {
    return errTimeout = setTimeout(()=>{
        func();
    }, ms)
};
