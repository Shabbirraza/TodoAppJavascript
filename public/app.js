var i = 0
var currentId = ''
function addtodo() {
    i++
    console.log(i)
    // Getting value of input and empting input
    var inputval = document.getElementById('inputtodo').value
    document.getElementById('inputtodo').value = ''

    // Creating NewDiv and adding it to the dom
    var divnew = document.createElement('div')
    divnew.setAttribute("class", "todos")

    var maindiv = document.getElementsByClassName('tododiv')
    var textval = document.createTextNode(inputval)
    maindiv[0].appendChild(divnew)

    console.log(textval)
    var newpara = document.createElement('p')
    var iden = 'todohere' + i
    newpara.setAttribute('class', 'para')
    newpara.setAttribute('id', iden)
    divnew.appendChild(newpara)
    document.getElementById(iden).innerHTML = inputval

    // ADDING DEL BUTTON
    var nid = "btn" + i
    var newbtn = document.createElement('button')
    divnew.appendChild(newbtn)
    newbtn.setAttribute('class', "delBtn")
    newbtn.setAttribute('id', nid)
    //   document.getElementById(nid).setAttribute("onClick", 'defunc(this.id)')
    console.log(nid)
    document.getElementById(nid).setAttribute("onClick", 'defunc(this.id)')
    newbtn.innerHTML = "del"


    var eid = "ebtn" + i
    var newbtn2 = document.createElement('button')
    divnew.appendChild(newbtn2)
    newbtn2.setAttribute('class', "editBtn")
    newbtn2.setAttribute('id', eid)
    document.getElementById(eid).setAttribute("onClick", 'efunc(this.id)')
    document.getElementById(eid).setAttribute("data-toggle", 'modal')
    document.getElementById(eid).setAttribute("data-target", '#exampleModal')
    newbtn2.innerHTML = "edit"
}
function defunc(cid) {

     document.getElementById(cid).parentNode.setAttribute('style', 'display : none')
}

function efunc(edid) {


    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })


     currentId =  document.getElementById(edid).previousElementSibling.previousElementSibling.id
    //  console.log(currentId)
   
}
function saveChange (){
    console.log(currentId)
    var editDis = document.getElementById('recipient-name').value
    if(editDis == ''){
        return
    }
    document.getElementById(currentId).innerHTML = editDis
    document.getElementById('recipient-name').value = ''
}

