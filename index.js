function scuberGreetingForFeet(someNumber){
  let ride
  if (someNumber <= 400){
    ride = ("This one is on me!");
  } else if (someNumber > 400 && someNumber < 2000) {
    ride = ("That will be twenty bucks.")
  } else if (someNumber > 2000 && someNumber < 2500) {
    ride = ("I will gladly take your thirty bucks.")
  } else if (someNumber > 2500){
    ride = ("No can do.")
  }
  return ride;
}
const city = "NYC";
function ternaryCheckCity(city){
  return (city == "NYC") ? "Ok, sounds good." : "No go.";
}

const tip = 'generous';
 function switchOnCharmFromTip(tip) {
   switch (tip) {
     case 'generous':
     return ('Thank you so much.');
     
     
     case 'not as generous':
     return ('Thank you.');
     
     
     default:
     return ('Bye.');
   }
 }