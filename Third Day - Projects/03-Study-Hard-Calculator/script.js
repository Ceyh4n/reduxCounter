//Study hard timetable
//day 3 project 3

function getStudyHours(day) {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 9;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 4;
        break;
      case 'sunday':
        return 8;
        break;
      default:
        alert('You entered incorrectly....');
        break;
    }
  }
  
  function getActualStudyHours (){
    return 8+5+7+9+5+4+8;
    //let totalHours = getStudyHours('monday')+getStudyHours('tuesday')+getStudyHours('wednesday')+getStudyHours('thursday')+getStudyHours('friday')+getStudyHours('saturday')+getStudyHours('sunday');
    //return totalHours;
  }
  
  function getIdealStudyHours(hour) {
    //let idealHours = 7.5;
    return hour*7;
  }
  
  function calculateStudyDebt() {
    let hour = 8;
    let actualStudyHours = getActualStudyHours();
    let idealStudyHours = getIdealStudyHours(hour);
    
    if (actualStudyHours === idealStudyHours) {
      console.log("Perfect amount of study");
    } else if (actualStudyHours > idealStudyHours) {
      console.log("More study than planned");
    } else {
      console.log("create some empty time to study");
    }
  }
  
  calculateStudyDebt();