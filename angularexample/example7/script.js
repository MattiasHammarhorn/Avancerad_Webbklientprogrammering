// Definition of a PersonManager object
var PersonManager = function (person){
  // Private variables
  var personInstance = person;
  
  return {
	  getPersonFirstName: function (){
		return personInstance.firstName;
	},
	  getPersonLastName: function (){
		return personInstance.lastName;
	},
	  getPersonFullName: function (separator){
		return personInstance.firstName + separator + personInstance.lastName;
	}
  };
};