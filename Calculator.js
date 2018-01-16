
document.addEventListener(chrome.browserAction.onClicked.addListener, function () {//
	var table = document.getElementById("dataGrid").getElementsByTagName("TR");
	var x=0;
	var grades=[];
	var gpa=[];
	var classtype=[];
	for(x=1;x<table.length;i++){
		classtype[x-1] = table[x].getElementsByTagName("TD")[3].innerHtml;
		grades[x-1] = table[x].getElementsByTagName("TD")[6].innerHtml;
	}
	//assign grades based on cp
	for(x=0;x<grades.length;x++){
		if(grades[x].indexOf("A")!=-1){
			gpa[x]=4;
		}
		else if (grades[x].indexOf("B")!=-1){
			gpa[x]=3;
		}
		else if (grades[x].indexOf("C")!=-1){
			gpa[x]=2;
		}
		else if (grades[x].indexOf("D")!=-1){
			gpa[x]=1;
		}
		// add 
		if(grades[x].indexOf("+")!=-1){
			gpa[x]+=0.33;
		}
		else if(grades[x].indexOf("-")!=-1){
			gpa[x]-=0.33;
		}
	}
	//add honors/ap credit
	for(x=0;x<classtype.length;x++){
		if(classtype[x].indexOf("h")!=-1||classtype[x].indexOf("H")!=-1){
			gpa[x]+=0.33;
		}
		else if(classtype[x].indexOf("a")!=-1||classtype[x].indexOf("A")!=-1){
			gpa[x]+=1;
		}
	}
	var totalGpa = 0;
	for(x=0;x<grades.length;x++){
		totalGpa+=gpa[x];
	}
	totalGpa = totalGpa/grades.length;
	
	var display = document.createElement("p");
	display.innerHTML = String(totalGpa);
	var element = document.getElementById("messageWindow");
	element.appendChild(display);
	
	console.log("end reached");
});
