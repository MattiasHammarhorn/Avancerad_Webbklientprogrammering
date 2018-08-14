// Constant variable that shows us debug messages
// and that can only be changed via changing the code
const DebugMode = true;

// Function made for writing a message containing the inputString.
// If DebugMode is false, then it will return return out of the
// function before it reaches the console log command.
function Debug(inputString){
	
	if(!DebugMode)
		return;
	console.log("Debug || " + inputString);
}

// An alias to call the debugWrite-function with less text.
function dwString(inputString){
	debugWrite(inputString);
}