function count(num) {
    console.log(num); 
    if (num <= 0) {
        return; 
    } else {
        count(num - 1); 
}
}


count(1000);
