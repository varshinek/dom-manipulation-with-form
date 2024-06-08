function create_label(tagname, attrname, attrvalue, content)
{
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname , attrvalue);
    label_ele.innerHTML = content;
    return label_ele;
}
function break_create()
{
    var break_ele = document.createElement("br");
    return break_ele;
}
function create_input(tagname, attrname1, attrvalue1,classname,classvalue, attrname2, attrvalue2, attrname3, attrvalue3)
{
    var input_ele = document.createElement(tagname);
    input_ele.setAttribute(attrname1 , attrvalue1);
    input_ele.setAttribute(classname , classvalue);
    input_ele.setAttribute(attrname2 , attrvalue2);
    input_ele.setAttribute(attrname3 , attrvalue3);
    return input_ele;
}
function create_button(tagname,attrname1, attrvalue1,classname,classvalue,idname,idvalue,attrname2, attrvalue2, content)
{
    var button_ele = document.createElement(tagname);
    button_ele.setAttribute(attrname1 , attrvalue1);
    button_ele.setAttribute(classname,classvalue)
    button_ele.setAttribute(idname,idvalue)
    button_ele.setAttribute(attrname2 , attrvalue2);
    button_ele.innerHTML = content;
    return button_ele;
}
function result()
{
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var address = document.getElementById("address").value
    var gender = document.querySelector('input[name="gender"]:checked').value
    var food_ele = document.getElementsByClassName("food")
    var food = [];
    for(var i = 0 ; i<food_ele.length;i++)
    {
        if(food_ele[i].checked)
        {
            food.push(food_ele[i].value);
        }
    }
    var pin = document.getElementById("pincode").value
    var state = document.getElementById("state").value
    var country = document.getElementById("country").value

    console.log(`first name:${firstname}`)
    console.log(`last name:${lastname}`)
    console.log(`address: ${address}`)
    console.log(`gender: ${gender}`)
    console.log(`food: ${food}`)
    console.log(`pin: ${pin}`)
    console.log(`state: ${state}`)
    console.log(`country: ${country}`)

    var table = document.querySelector("table tbody")
    var newRow = table.insertRow();
    newRow.insertCell(0).textContent = firstname;
    newRow.insertCell(1).textContent = lastname;
    newRow.insertCell(2).textContent = `${address}`;
    newRow.insertCell(3).textContent = pin;
    newRow.insertCell(4).textContent = gender;
    newRow.insertCell(5).textContent = food.join(", ");
    newRow.insertCell(6).textContent = state;
    newRow.insertCell(7).textContent = country;

    
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

var container = document.createElement("div");
container.className = "marginc";

var row = document.createElement("div");
row.setAttribute("class","row modified d-flex justify-content-between")

var col = document.createElement("div");
col.className = "col-sm-12 col-md-12 col-lg-3";

var form = document.createElement("form");
form.setAttribute("id","form");

var h2 = document.createElement("h1");
h2.setAttribute("id","title")
h2.innerHTML = "Form Sumbission:"

var p = document.createElement("p");
p.id = "description";
p.innerHTML = "Form manipulation is created using DOM";

form.append(h2);
form.append(p)

// first name
var first = document.createElement("div");
first.className = "form-group";
var fname = create_label("label","for", "firstname", "First Name:");
first.append(fname);
var finput = create_input("input","type","text", "class", "form-control","id","first-name","placeholder","First Name");
finput.setAttribute("required", "true");
first.append(finput)

form.append(first)

// last name
var last = document.createElement("div");
last.className = "form-group";
var lname = create_label("label","for", "lastname", "Last Name:");
last.append(lname);
var linput = create_input("input","type","text", "class", "form-control","id","last-name","placeholder","Last Name");
linput.setAttribute("required", "true");
last.append(linput)

form.append(last)

// address 1
/*var address1 = document.createElement("div");
address1.className = "form-group";
var a1 = create_label("label","for", "address1", "Address Line 1:");
address1.append(a1);
var a1input = create_input("input","type","text", "class", "form-control","id","address1","placeholder","Address Line 1");
a1input.setAttribute("required", "true");
address1.append(a1input)

form.append(address1)

// address 2
var address2 = document.createElement("div");
address2.className = "form-group";
var a2 = create_label("label","for", "address2", "Address Line 2:");
address2.append(a2);
var a2input = create_input("input","type","text", "class", "form-control","id","address2","placeholder","Address Line 2");
a2input.setAttribute("required", "true");
address2.append(a2input)

form.append(address2)*/

//address
var address = document.createElement("div");
address.className = "form-group";
var alabel = create_label("label", "for", "address", "Address:");
address.append(alabel);
var ainput = document.createElement("textarea");
ainput.setAttribute("class", "form-control");
ainput.setAttribute("id", "address");
ainput.setAttribute("placeholder", "Address");
address.append(ainput);

form.append(address);

// pin
var pin = document.createElement("div");
pin.className = "form-group";
var pname = create_label("label","for", "pin", "PIN:");
pin.append(pname);
var pinput = create_input("input","type","text", "class", "form-control","id","pincode","placeholder","PIN");
pinput.setAttribute("required", "true");
pin.append(pinput)

form.append(pin)

// gender
var gender = document.createElement("div");
gender.className = "form-group";
var gname = create_label("label","for", "gender", "Gender:");
gender.append(gname);
var gbreak = break_create();
gender.append(gbreak)

var minput = create_input("input","type","radio", "name", "gender","id","male","value","male");
gender.append(minput)
var male = create_label("label","for", "male", "Male");
gender.append(male);

var finput = create_input("input","type","radio", "name", "gender","id","female","value","female");
gender.append(finput)
var female = create_label("label","for", "female", "Female");
gender.append(female);

form.append(gender)

// food
var food = document.createElement("div");
food.className = "form-group";
var choice = create_label("label","for","food","Choice of Food:")
food.append(choice);
var span = create_label("span","class","itallic"," (must choose at least 2 out of 5)");
food.append(span)
var fbreak = break_create();
food.append(fbreak)

// north India
var northbox = create_input("input","type","checkbox", "class", "food","id","north","value"," North Indian");
food.append(northbox)
var north  = create_label("label","for", "north", "North Indian");
food.append(north)
var northbreak = break_create();
food.append(northbreak)

// south Indian
var southbox = create_input("input","type","checkbox", "class", "food","id","south","value","South Indian");
food.append(southbox)
var south  = create_label("label","for", "south", "South Indian");
food.append(south)
var southbreak = break_create();
food.append(southbreak)

// Chinese
var chinesebox = create_input("input","type","checkbox", "class", "food","id","chinese","value","Chinese");
food.append(chinesebox)
var chinese  = create_label("label","for", "chinese", "Chinese");
food.append(chinese)
var chinesebreak = break_create();
food.append(chinesebreak)

// Japanese
var japanesebox = create_input("input","type","checkbox", "class", "food","id","japanese","value","Japanese");
food.append(japanesebox)
var japanese  = create_label("label","for", "japanese", "Japanese");
food.append(japanese)
var japanesebreak = break_create();
food.append(japanesebreak)

// Sea food
var seabox = create_input("input","type","checkbox", "class", "food","id","sea","value","Sea Food");
food.append(seabox)
var sea  = create_label("label","for", "sea", "Sea Food");
food.append(sea)
var seabreak = break_create();
food.append(seabreak)


form.append(food)

// state
var state = document.createElement("div");
state.className = "form-group";
var sname = create_label("label","for", "state", "State:");
state.append(sname);
var sinput = create_input("input","type","text", "class", "form-control","id","state","placeholder","State");
state.append(sinput)

form.append(state)

// country
var country = document.createElement("div");
country.className = "form-group";
var cname = create_label("label","for", "country", "Country:");
country.append(cname);
var cinput = create_input("input","type","text", "class", "form-control","id","country","placeholder","Country");
country.append(cinput)

form.append(country)

// submit button
var button = create_button("button","type","button","class","form-control btn btn-primary","id","submit","onclick","result()","SUBMIT");
/*button.setAttribute("type","button");
button.setAttribute("class","form-control btn btn-secondary");
button.setAttribute("id","submit");
button.setAttribute("onclick","result()");*/

form.append(button);

col.append(form);
row.append(col);
container.append(row);
document.body.append(container);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var col1 = document.createElement("div");
col1.className = "col col-sm-12 col-md-12 col-lg-8";

var h1 = document.createElement("h1");
h1.setAttribute("id","title")
h1.innerHTML = "Temporary Database"
col1.append(h1);

var table = document.createElement("table");
table.setAttribute("class","table table-striped")

var thead = document.createElement("thead")
thead.setAttribute("class","bg-dark text-light");

var head = document.createElement("tr");

var headth1 = document.createElement("td");
headth1.innerHTML = "First Name"
head.append(headth1);

var headth2 = document.createElement("td");
headth2.innerHTML = "Last Name"
head.append(headth2);

var headth3 = document.createElement("td");
headth3.innerHTML = "Address"
head.append(headth3);

var headth4 = document.createElement("td");
headth4.innerHTML = "Pincode"
head.append(headth4);

var headth5 = document.createElement("td");
headth5.innerHTML = "Gender"
head.append(headth5);

var headth6 = document.createElement("td");
headth6.innerHTML = "Food"
head.append(headth6);

var headth7 = document.createElement("td");
headth7.innerHTML = "State"
head.append(headth7);

var headth8 = document.createElement("td");
headth8.innerHTML = "Country"
head.append(headth8);

thead.append(head)
table.append(thead)

var tbody = document.createElement("tbody");
table.append(tbody)

col1.append(table)
row.append(col1)
container.append(row)
document.body.append(container)
