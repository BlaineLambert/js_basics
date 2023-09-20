function experience(years){
    if (years >= 0 && years <= 1 ){
        return "Beginner";
    }
    else if (years > 1 && years <=3 ){
        return "Intermediate";
    }
    else if (years > 3 && years <=  6 ){
        return "Advanced";
    }
    else if (years >= 7 ){
        return "Master";
    }
    else{
        return undefined;
    }
}

function hasSkill(skills){
    if (skills.includes("Javascript")){
        return true
    }else{
        return false
    }
}




function formatAddress(address){
    return `Hello, my address is ${address.number} ${address.street}, ${address.city}, ${address.state} ${address.zip_code} in the ${address.neighborhood.toLowerCase()} neighborhood.`
}