//  btn.addEventlistener('click',function(e){
    //     alert("Hellow world1!")
    // }),
    // btn.addEventlistener('click',function(e){
    //     alert("Hellow world1!")
    // })
    // let a = prompt("what is your favorite number?")
    // let c = "hellow";
    // console.log(c)
    // // console.log(a)
    // // Q#1: Syncronous programing?
    // Syncronous action are the action that initait and finish one-by-one.
    // let a = prompt("What is your name?");
    // let b = prompt("What is your age?");
    // let c = prompt("What is your color?");
    // let d = prompt("What is your education?");
    // console.log(a + "is"+b +"year old and has"+ c+ "favorite color.");
    
    // Q#2: Asynchronous programing?
    // Asynchronous action are the action that we initiate now and they finish leter eg.setTimeout.
    // console.log("Start")
    // setTimeout[funstion(),{
    // console:log("Hey I am good")
    //     } ,3000]
    //     console.log("End")
    
    // Q#3: Callback Function?
    // A Callback function is a function passed into anather
    // function as an argument.
    //  function LoadScript(src){
    //     var Script =document.createElement("script");
    //     Script.src = src;
    //     Script.onload =function(){
    //         console.log("loaded script whith src:" + src)
    //     }
    //     document.body.appendChild(script);
    // }
    // // LoadScript("")
    
    // function hellow(name) {
    //     alert('hellow World' +name);
    // }
    
    
    // function goodmoorning() {
    //     alert('goodmoorning');
    // }
    
    
    // function hey() {
    //     alert('hey');
    // }
    
 
    
    function goodmoorning(eroor,src) {
      if (eroor) {
        console.log(eroor)
     sendEmergencyMeesageToCeo();
     return  
    }
      alert('good morning'+ src)

    }
    
    LoadScript(src+'goodmoorning')
