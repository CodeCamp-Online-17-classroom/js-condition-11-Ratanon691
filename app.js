let user = prompt(`Who are you?`)
if(user == `` || user == null || user !== `codecamp`){
let user = `Guest`
  alert(`You logged in as a ${user}`)
}
else if(user == `codecamp`){
  let password = prompt(`Password?`)
  if(password == 123456){
    alert(`Hello, ${user}`)
  }
  else{
    alert(`Wrong password`)
  }
}
