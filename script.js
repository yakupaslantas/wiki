var version = "0.0.2"

var sidepanelVersionText
var sidepanelChangelogButton
var changelogContent
var blurOverlay
var mobileTopbar
var active




function updateSidepanelVersionText(){
    sidepanelVersionText.innerHTML = "v" + version

}


function triggeranim(){
    blurOverlay.classList.add("blur")
    sidepanelChangelogButton.classList.add("sidepanel-changelog-button-anim")
    sidepanelChangelogButton.onclick = ""
    setTimeout(() => {
        changelogContent.style.display = "block"
    }, 150)
}


function closeDialog(){
    blurOverlay.classList.remove("blur")
    sidepanelChangelogButton.classList.remove("sidepanel-changelog-button-anim")
    setTimeout(() => {
        changelogContent.style.display = "none"
    }, 300);
    setTimeout(() => {
        sidepanelChangelogButton.onclick = triggeranim
    }, 500)
}


function openNav(){
    mobileTopbar.style.height = "100%"
    mobileTopbar.style.backgroundColor = "#201a12"
    mobileTopbar.classList.add("antiblur")
    document.getElementById("innerMenu").style.display = "block"
    document.getElementById("innerMenu").style.filter = ""
}

function closeNav(){    
    mobileTopbar.style.height = "45px"
    mobileTopbar.style.backgroundColor = "#201a12e5"
    mobileTopbar.classList.remove("antiblur")
    document.getElementById("innerMenu").style.display = "none"
    document.getElementById("innerMenu").style.filter = "blur(15px)"
}


function changediv(num){
    var x = document.getElementById(num)
    var y = document.getElementById("q"+num)
    document.getElementById(active).classList.remove("project-vertical-scroll-active-button")
    document.getElementById("q"+active).style.display = "none"
    x.classList.add("project-vertical-scroll-active-button")
    y.style.display = "block"
    active = num
}



window.onload = function(){
    active = 0
    mobileTopbar = document.getElementById("mobileTopbar")
    sidepanelVersionText = document.getElementById("sidepanelVersionText")
    sidepanelChangelogButton = document.getElementById("changelogButton")
    blurOverlay = document.getElementById("blurOverlay")
    changelogContent = document.getElementById("changelogContent")
    updateSidepanelVersionText()
}