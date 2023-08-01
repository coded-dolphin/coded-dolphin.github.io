const rtl1 = document.getElementById("rtl1")
const rtl2 = document.getElementById("rtl2")
const rtl3 = document.getElementById("rtl3")

function rtl1_clk1(){
    rtl1.style.zIndex = +1;
    rtl2.style.zIndex = 0;
    rtl3.style.zIndex = 0;
}
function rtl2_clk2(){
    rtl2.style.zIndex = +1;
}
function rtl3_clk3(){
    rtl3.style.zIndex = +1;
}