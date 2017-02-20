let zIndex = 20141223
export const getUID=function () {
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return S4()+S4()+"_"+S4()+"_"+S4()+"_"+S4()+"_"+S4()+S4()+S4();

}
export const getZIndex = function () {
    return zIndex++
}
