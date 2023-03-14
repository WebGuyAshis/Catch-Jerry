let jerry = document.getElementById("jerry");

jerry.addEventListener("mouseover", function(){
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    
    let jerryRect = jerry.getBoundingClientRect();
    let jerryWidth = jerryRect.width;
    let jerryHeight = jerryRect.height;
    
    let x = Math.random() * (viewportWidth - jerryWidth);
    let y = Math.random() * (viewportHeight - jerryHeight);
    
    jerry.style.top = y + "px";
    jerry.style.left = x + "px";
    console.log("Mouse Over!");
});
