function resultForm(){
  event.preventDefault();

  alert ('Form has been submitted')
  var calender2 = document.getElementById("date").value;
  var newMale = ["Kwasi", "Kwaduo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var newFemale = ["Akosua", "Adwoa", "Abeena", "Akua", "Yaa", "Afua", "Ama"];
  // if(document.myForm.date.value == "" || document.myForm.date.value > ){ 
  //     alert("Your date is overdue");
  //     return(false);
  // } 

  var calender = new Date (calender2);
  var dayIndex = calender.getDay();
  
  if(document.getElementById("male").checked){
      var maleNames = newMale[dayIndex];
      document.getElementById("card").innerHTML = 'Your Ankan name is' + maleNames ;
  };

  if(document.getElementById("female").checked){
      var femaleNames = newFemale[dayIndex];
      document.getElementById("card").innerHTML = ' Your Ankan name is' + femaleNames ;

}

}
