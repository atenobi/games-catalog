export const pageReloader = async (ms) => {
    return errTimeout = setTimeout(()=>{
        window.location.reload(true);
    }, ms)
};
