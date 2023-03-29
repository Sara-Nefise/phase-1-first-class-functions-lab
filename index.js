const drivers = ['Antonia', 'Nuru', 'Imran', 'Amari', 'Mo'];
function returnFirstTwoDrivers(list){
    let newArray=list.slice(0, 2)
return newArray
}

// console.log(fareDoubler()(10))


function returnLastTwoDrivers(list){
    let newArray=list.slice(-2)
return newArray
}

function createFareMultiplier(){
    return function(item){
        return item*item
    }
}
function fareDoubler(item){
    
        return item*2
}

function fareTripler(item){
        return item*3
}
function selectDifferentDrivers(arrayOfDrivers, callback,){
return callback(arrayOfDrivers)
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[1])