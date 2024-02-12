// Write a loop that makes the following pattern using console.log():
// turkish: console.log() kullanarak aşağıdaki deseni yapan bir döngü yazın:

// #
// ##
// ###
// ####
// #####
// ######
// #######


// for loop
for (let i = 0; i <= 7; i++) {
    console.log('#'.repeat(i)) 
}
// Output:

/*
#
##
###
####
#####
######
#######
*/

// or 
for (let i = 1; i <= 7; i++) 
{
    for (let j = 1; j <= i; j++) 
    {
        console.log('#')
    }
}