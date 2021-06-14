// Code your solution in this file!
function distanceFromHqInBlocks(x){
    return Math.abs(x - 42);
}

function distanceFromHqInFeet(x){
    return (Math.abs(x - 42)*264);
}

function distanceTravelledInFeet(start,destination){
    return (Math.abs(start - destination)*264);
}
function calculatesFarePrice(start,destination){
    const farePrice = (Math.abs(start - destination)*264); 
    if (farePrice <= 400) {
        return 0;
    }
    else if (farePrice <= 2000) {
        return ((Math.abs(start - destination)*264) - 400)*0.02;
    }
    else if (farePrice > 2500) {
        return 'cannot travel that far'
    }
    else if (farePrice > 2000) {
        return 25;
    }
 //(((Math.abs(start - destination)*264) - 400)*0.02)+25
    
}