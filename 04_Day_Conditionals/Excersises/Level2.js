// 1

let score = prompt('Please enter yoru score')

if (score >= 80 && score <= 100) 
    console.log('A')
else if(score >= 70 && score <= 79)
    console.log('B')
else if(score >= 60 && score <= 69)
    console.log('C')
else if(score >= 50 && score <= 59)
    console.log('D')
else if(score >= 0 && score <= 49)
    console.log('F')
else
    console('incorretly entered')

// 2

let season = prompt('Which month are you?')

switch(season) {
    case 'January':
        console.log('January is a winter season') 
        break;
    case 'February':
        console.log('February is a winter season')
        break;
    case 'March':
        console.log('March is a spring season')
        break;
    case 'April':
        console.log('April is a spring season')
        break;
    case 'May':
        console.log('May is a spring season')
        break;
    case 'June':
        console.log('June is a summer season')
        break;
    case 'July':
        console.log('July is a summer season')
        break;
    case 'August':
        console.log('August is a summer season')
        break;
    case 'September':
        console.log('September is a autumn season')
        break;
    case 'October':
        console.log('October is a autumn season')
        break;
    case 'November':
        console.log('November is a autumn season')
        break;
    case 'December':
        console.log('December is a winter season')
        break;
    default:
        console.log('incorrectly value')       
}

// 3

let day = prompt('What is the day today?')

switch(day) {
    case 'Monday':
        console.log('Monday is a working day') 
        break;
    case 'Tuesday':
        console.log('Tuesday is a working day')
        break;
    case 'Wednesday':
        console.log('Wednesday is a working day')
        break;
    case 'Thursday':
        console.log('Thursday is a working day')
        break;
    case 'Friday':
        console.log('Friday is a working day')
        break;
    case 'Satuday':
        console.log('Saturday is a weekend')
        break;
    case 'Sunday':
        console.log('Sunday is a weekend')
        break;
    default:
        console.log('incorrectly value')       
}


// or 

if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday')
    console.log(`${day} is a working day`)
else if(day == 'Saturday' || day == 'Sunday')
    console.log(`${day} is a weekend`)