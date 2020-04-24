export const checkError = async (res) => {
    if (res.status >= 200 && res.status < 300) return await res; 
    if (res.status == 401) throw new TypeError("Unauthorized");
    if (res.status == 404) throw new TypeError("Not found");
    if (res.status == 400) return await res;
    return await emptyError(res.text(), res.status)
}
const emptyError = async (error, stateCode) => {
    const body = { error: error, code: stateCode };
    return { json: () => body };
}