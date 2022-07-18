export const asyncExecutor = async (ms, func) => {
    return errTimeout = setTimeout(()=>{
        func()
    }, ms)
};
