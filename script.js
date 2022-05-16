var comp = 0
var player = 0
function play(){
    
    setTimeout(function() {
        document.querySelector(".You").disabled = false 
        document.querySelector(".CPU").disabled = false 
        document.querySelector(".You").style.opacity = "0"
        document.querySelector(".CPU").style.opacity = "0"
        document.querySelector(".play").style.opacity = "0"
        document.getElementById("scissor").style.opacity = "0"
        document.getElementById("rock").style.opacity = "0"
        document.getElementById("paper").style.opacity = "0"
        document.querySelector(".start").style.opacity = "0"
        
        document.querySelector(".container3").style.opacity = "0"
        console.log("rock")
        document.querySelector(".container").style.opacity = "100"
    },0 )
    
    setTimeout(function() {
        document.querySelector(".container").style.opacity = "0"
        console.log("paper")
        document.querySelector(".container2").style.opacity = "100"
    },1500 )
    
    setTimeout(function() {
        document.querySelector(".container2").style.opacity = "0"
        console.log("scissor")
        document.querySelector(".container3").style.opacity = "100"    
    
    },2500 ) 
    setTimeout(function() {
        document.querySelector(".play").style.opacity = "100"
    },4000)
    
    setTimeout(function() {
        document.querySelector(".CPU").style.opacity = "100"
    },4100)
    
    setTimeout(function() {
        document.querySelector(".You").style.opacity = "100"
    },4200)
    
    setTimeout(function() {
        var choice = Math.floor(Math.random()*3)
        if (choice === 0){
            document.querySelector(".container3").style.opacity = "0"
            document.getElementById("rock").style.opacity = "100"
    }
    if (choice === 1){
        document.querySelector(".container3").style.opacity = "0"
        document.getElementById("paper").style.opacity = "100"
    }
    if (choice === 2){
        document.querySelector(".container3").style.opacity = "0"
        document.getElementById("scissor").style.opacity = "100"
    }},3500)
    console.log(choice)
}

document.querySelector(".start").addEventListener("click",function() {
    play()
})

document.querySelector(".play").addEventListener("click",function() {
    play()
})

document.querySelector(".CPU").addEventListener("click",function() {
    comp = comp + 1
    document.querySelector(".cscr").textContent = comp
    console.log("lolfuck")
    document.querySelector(".CPU").disabled = true 
    document.querySelector(".You").disabled = true 
})

document.querySelector(".You").addEventListener("click",function() {
    player = player + 1
    document.querySelector(".pscr").textContent = player
    console.log("lolsuck")
    document.querySelector(".CPU").disabled = true 
    document.querySelector(".You").disabled = true 

})