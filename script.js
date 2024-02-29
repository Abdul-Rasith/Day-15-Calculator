function create_div(){
    var div = document.createElement("div");
    return div;
}
function create_break(){
    var break1 = document.createElement("br")
    return break1
}
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname)
    element.setAttribute(attr1name,attr1value)
    element.setAttribute(attr2name,attr2value)
    return element;
}





var d1 = create_div();
d1.className = "container"

var d2 = create_div();
d2.className = "calculator"




var form_ele = document.createElement("form")

var d3 = create_div();
d3.className = "display"
var inp1 = input_create("input","type","text","name","display");
d3.append(inp1)


var d4 = create_div();
var inp2 = input_create("input","type","button","value","AC");
inp2.setAttribute("onclick","display.value = ''")
inp2.setAttribute("class","operator ")
var inp3 = input_create("input","type","button","value","DE");
inp3.setAttribute("onclick","display.value = display.value.toString().slice(0,-1)")
inp3.setAttribute("class","operator") 

var inp4 = input_create("input","type","button","value",".");
inp4.setAttribute("onclick","display.value += '.'")
inp4.setAttribute("class","operator") 

var inp5 = input_create("input","type","button","value","/");
inp5.setAttribute("onclick","display.value += '/'")
inp5.setAttribute("class","operator ") 

d4.append(inp2,inp3,inp4,inp5)


var d5 = create_div();
var inp6 = input_create("input","type","button","value","7");
inp6.setAttribute("onclick","display.value += '7'" )
inp6.setAttribute("class","operator ")

var inp7 = input_create("input","type","button","value","8");
inp7.setAttribute("onclick","display.value += '8'")
inp7.setAttribute("class","operator")

var inp8 = input_create("input","type","button","value","9");
inp8.setAttribute("onclick","display.value += '9'" )
inp8.setAttribute("class","operator")

var inp12 = input_create("input","type","button","value","*");
inp12.setAttribute("onclick","display.value += '*'" )
inp12.setAttribute("class","operator ")


d5.append(inp6,inp7,inp8,inp12)

var d6 = create_div();
var inp9 = input_create("input","type","button","value","4");
inp9.setAttribute("onclick","display.value += '4'")
inp9.setAttribute("class","operator ")

var inp10 = input_create("input","type","button","value","5");
inp10.setAttribute("onclick","display.value += '5'")
inp10.setAttribute("class","operator ")

var inp11 = input_create("input","type","button","value","6");
inp11.setAttribute("onclick","display.value += '6'")
inp11.setAttribute("class","operator")

var inp13 = input_create("input","type","button","value","-");
inp13.setAttribute("onclick","display.value += '-'" )
inp13.setAttribute("class","operator")

d6.append(inp9,inp10,inp11,inp13)

var d7 = create_div();
var inp14 = input_create("input","type","button","value","1");
inp14.setAttribute("onclick","display.value += '1'" )
inp14.setAttribute("class","operator")

var inp15 = input_create("input","type","button","value","2");
inp15.setAttribute("onclick","display.value += '2'")
inp15.setAttribute("class","operator ")

var inp16 = input_create("input","type","button","value","3");
inp16.setAttribute("onclick","display.value += '3'")
inp16.setAttribute("class","operator ")

var inp17 = input_create("input","type","button","value","+");
inp17.setAttribute("onclick","display.value += '+'" )
inp17.setAttribute("class","operator ")

d7.append(inp14,inp15,inp16,inp17)
var d8 = create_div();
var inp18 = input_create("input","type","button","value","00");
inp18.setAttribute("onclick","display.value += '00'" )
inp18.setAttribute("class","operator ")

var inp19 = input_create("input","type","button","value","0");
inp19.setAttribute("onclick","display.value += '0'")
inp19.setAttribute("class","operator ")

var inp20 = input_create("input","type","button","value","=");
inp20.setAttribute("onclick","display.value = eval(display.value) ")
inp20.setAttribute("class","equal operator")



d8.append(inp18,inp19,inp20)

form_ele.append(d3,d4,d5,d6,d7,d8)
d2.append(form_ele)
d1.append(d2)

document.body.append(d1)