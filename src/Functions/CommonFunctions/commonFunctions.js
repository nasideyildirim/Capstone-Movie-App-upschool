export const editReleaseDate = date => { 
    
    if (date !== null && date !== "") {
        return date.split("-").reverse().join("/")
    }
    else {
        return "No Information"
    }

}
