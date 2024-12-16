

const applyBlur = (value) => {
    value ? document.querySelector(".picture").style.filter = "blur(5px)" : document.querySelector(".picture").style.filter = "blur(0px)";

};


const applySepia = (value) => {
    value ? document.querySelector(".picture").style.filter = "sepia(100%)" : document.querySelector(".picture").style.filter = "sepia(0%)";

}


const applyNegative = (value) => {
    value ? document.querySelector(".picture").style.filter = "invert(100%)" : document.querySelector(".picture").style.filter = "invert(0%)";

}

const opacityFun = () => {
    
    document.querySelector(".picture").style.filter = `opacity(${document.querySelector("#opacity").value}%)`
}


const brightnesFun = () =>{
    document.querySelector(".picture").style.filter = `brightness(${document.querySelector("#brightnes").value}%)`
}

const greyStyleApply = () => {
    const img = document.querySelector(".picture");


    const filterValue = getComputedStyle(img).filter;
    console.log(filterValue)
    if (filterValue.includes("grayscale(1)")) {
        
        img.style.filter = "grayscale(0%)";
    } else if (filterValue.includes('none') || filterValue.includes("grayscale(0)")) {
        
        img.style.filter = "grayscale(100%)";
    }
};
