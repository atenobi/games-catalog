export const checkMailPassword = (arr, value, pass) => {
    const result = {
        status: '',
        name: '',
    }

    arr.find(el => {
       if (el.mail === value) {
        if (el.pass === pass) {
            result.status = true;
            result.name = el.name;
            result.mail = el.mail;
            result.pass = el.pass;
        }
       } 
    })
   
    return result;
}