var job_name = ["Teacher", "Lawyer", "Doctor", "CEO "];
var city_name = ["Dallas", "Houston","Austin","San Antonio"];
var spouse_name = ["Samantha","Jessica","Sofia", "Mia"];
var number_of_kids = [0,1,2,3];

var xx = Math.floor(Math.random() * 4 )

function fortune(job_name,city_name,spouse_name,number_of_kids) {
document.write("You will be a " + job_name + " in " + city_name + ", and married to " + spouse_name + " with " + number_of_kids + " kids.");
}

fortune(job_name[xx],city_name[xx],spouse_name[xx],number_of_kids[xx])
