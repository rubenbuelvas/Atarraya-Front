export const formatPrice = (price) => {
    let str = price.toString();
    if(str.length > 3) {
        let sub1 = str.substr(0, str.length - 3);
        let sub2 = str.substr(str.length - 3, str.length);
        return sub1 + "." + sub2;
    } else return str;
}