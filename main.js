
function showPreview(event) {
    if(event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0])
        var preview = document.getElementById("file-ip-1-preview")
        preview.src = src
        preview.style.display = "block"
    }
}









// ****    english Section Start *****  //
let en_total = document.querySelector('.en-total')
let f_inp = document.querySelector('.f-inp')
let s_inp = document.querySelector('.s-inp')
let eMark = document.querySelector('.e-marks')

let enfv = 0
let ensv = 0
f_inp.onkeyup = function (event) {
    if (f_inp.value > 100) {
        f_inp.value = enfv
    }
    if (f_inp.value == "") {
        f_inp.value = 0
    }
    f_inp.value = parseFloat(f_inp.value) + 0

    enfv = parseFloat(f_inp.value)
    en_total.innerText = ""
    en_total.innerText = enfv + ensv
    con_100()

}
s_inp.onkeyup = function (event) {
    if(s_inp.value > 25){
        s_inp.value = ensv
    }
    if(s_inp.value == ""){
        s_inp.value = 0
    }
    s_inp.value = parseFloat(s_inp.value) + 0
    ensv = parseFloat(s_inp.value)
    en_total.innerText = ""
    en_total.innerText = enfv + ensv
    con_100()
}
function con_100() {
    if (en_total.innerText >= 33) {
        eMark.innerText = "Pass"
    } else {
        eMark.innerText = "Fail"
    }
    gnd_total()
}
// ****    english Section end *****  //




// ****    urdu Section Start *****  //
let un_total = document.querySelector(".un-total")
let u_marks = document.querySelector(".u-marks")
let u_f_inp = document.querySelector(".u-f-inp")
let u_s_inp = document.querySelector(".u-s-inp")

let unfv = 0 
let unsv = 0 

u_f_inp.onkeyup = function(event){
    if(u_f_inp.value > 100){
        u_f_inp.value = unfv 
    }
     if(u_f_inp.value == ""){
        u_f_inp.value = 0
    }
    u_f_inp.value = parseFloat(u_f_inp.value) + 0

    unfv = parseFloat(u_f_inp.value)
    un_total.innerText = "" 
    un_total.innerText = unfv + unsv
    con_85()

}
u_s_inp.onkeyup = function(event){
    if(u_s_inp.value > 25){
        u_s_inp.value =unsv
    }
    if(u_s_inp.value == ""){
        u_s_inp.value = 0
    }
    u_s_inp.value = parseFloat(u_s_inp.value) + 0
    unsv  = parseFloat(u_s_inp.value)
    un_total.innerText = ""
    un_total.innerText = unfv + unsv    
    con_85()

}
function con_85(){
    if(un_total.innerText >= 33){
        u_marks.innerText = "Pass"
    }else{

        u_marks.innerText = "Fail"
    }
    gnd_total()

}
// ****    urdu Section end *****  //


// ****    math Section Start *****  //
let mn_total = document.querySelector(".mn-total")
let m_marks = document.querySelector(".m-marks")
let mf_inp = document.querySelector(".mf-inp")
let ms_inp = document.querySelector(".ms-inp")

let mnfv = 0
let mnsv = 0

mf_inp.onkeyup = function (event){
    if(mf_inp.value > 100){
        mf_inp.value = mnfv
    }
    if (mf_inp.value == ""){

        mf_inp.value = 0
    }

mf_inp.value = parseFloat(mf_inp.value) + 0

mnfv = parseFloat(mf_inp.value)
mn_total.innerText = ""
mn_total.innerText = mnfv + mnsv
con_75()
}
ms_inp.onkeyup = function(event){
    if(ms_inp.value > 25){
        ms_inp.value = mnsv
    }
    if(ms_inp.value == ""){
        ms_inp.value = 0
    }
    ms_inp.value = parseFloat(ms_inp.value) + 0
    mnsv = parseFloat(ms_inp.value)
    mn_total.innerText = ""
    mn_total.innerText = mnfv + mnsv 
    con_75()
}

function con_75(){
    if(mn_total.innerText >= 33){
    m_marks.innerText = "Pass"       
    }else{
        m_marks.innerText = "Fial"
    }
    gnd_total()
}
// ****    math Section end *****  //


//  ****  isl section start  ****  //

let in_total = document.querySelector(".in-total")
let i_marks = document.querySelector(".i-marks")
let if_inp = document.querySelector(".if-inp")
let is_inp = document.querySelector(".is-inp")

let infv = 0
let insv = 0

if_inp.onkeyup = function (event){
    if (if_inp.value > 100){
        if_inp.value = infv
    }
    if (if_inp.value == ""){
        if_inp.value = 0
    } 

if_inp.value = parseFloat(if_inp.value) + 0

infv = parseFloat(if_inp.value)
in_total.innerText = ""
in_total.innerText = infv + insv
con_65()
}

is_inp.onkeyup = function (event){
    if(is_inp.value > 25){
        is_inp.value = insv
    }
    if(is_inp.value == ""){
        is_inp.value = 0
    }
    is_inp.value = parseFloat(is_inp.value) + 0
    insv = parseFloat(is_inp.value)
    in_total.innerText = ""
    in_total.innerText = infv + insv
    con_65()
}
function con_65(){
    if (in_total.innerText > 32){
        i_marks.innerText = "pass"
    }
    else{
        i_marks.innerText = "Fail"
    }
    gnd_total()
}

//  ****  isl section end  ****  //


//  ****  sst section start  ****  //

let sn_total = document.querySelector(".sn-total")
let s_marks = document.querySelector(".s-marks")
let sf_inp = document.querySelector(".sf-inp")
let ss_inp = document.querySelector(".ss-inp")

let snfv = 0
let snsv = 0

sf_inp.onkeyup = function (event) {
    if (sf_inp.value > 100){
        sf_inp.value = snfv       
    }
    if (sf_inp.value == ""){
        sf_inp.value = 0
    }
    sf_inp.value = parseFloat(sf_inp.value) + 0
    snfv = parseFloat(sf_inp.value)
    sn_total.innerText = ""
    sn_total.innerText = snfv + snsv
    con_55()
}
    
ss_inp.onkeyup = function (event) {
    if(ss_inp.value > 25){
        ss_inp.value = snsv
    }
    if(ss_inp.value == ""){
        ss_inp.value = 0
    }
    ss_inp.value = parseFloat(ss_inp.value) + 0
    snsv = parseFloat(ss_inp.value)
    sn_total.innerText = ""
    sn_total.innerText = snfv + snsv
    con_55()
}
function con_55 (){
    if (sn_total.innerText > 32){
        s_marks.innerText = "Pass"
    }
    else {
        s_marks.innerText = "Fail"
    }
    gnd_total()
}
// ***** sst section end  ***** //

// ***** phy section start ***** //

let pf_inp = document.querySelector(".pf-inp")
let ps_inp = document.querySelector(".ps-inp")
let pn_total = document.querySelector(".pn-total")
let p_marks = document.querySelector(".p-marks")

let pnfv = 0
let pnsv = 0

pf_inp.onkeyup = function (event){
    if (pf_inp.value > 75){
        pf_inp.value = pnsv
    }
    if (pf_inp.value == ""){
        pf_inp.value = 0
    }
    pf_inp.value = parseFloat(pf_inp.value) + 0
    pnfv = parseFloat(pf_inp.value)
    pn_total.innerText = ""
    pn_total.innerText = pnfv + pnsv
    con_45()

}
ps_inp.onkeyup = function (event){
    if(ps_inp.value > 25){
        ps_inp.value = pnsv
    }
    if(ps_inp.value == ""){
        ps_inp.value = 0
    }
    ps_inp.value = parseFloat(ps_inp.value) + 0
    pnsv = parseFloat(ps_inp.value)
    pn_total.innerText = ""
    pn_total.innerText = pnfv + pnsv
    con_45()
}
function con_45(){
    if (pn_total.innerText > 32){
        p_marks.innerText = "Pass"
    }
    else{
        p_marks.innerText = "Fail"
    }
    gnd_total()
}
// ***** phy section end ***** //

// *******  che section start ****** //

let cf_inp = document.querySelector(".cf-inp")
let cs_inp = document.querySelector(".cs-inp")
let cn_total = document.querySelector(".cn-total")
let c_marks = document.querySelector(".c-marks")

let cnfv = 0
let cnsv = 0

cf_inp.onkeyup = function (event){
    if(cf_inp.value > 75){
        cf_inp.value = cnfv
    }
    if(cf_inp.value == ""){
        cf_inp.value = 0
    }
    cf_inp.value = parseFloat(cf_inp.value) + 0
    cnfv = parseFloat(cf_inp.value)
    cn_total.innerText = ""
    cn_total.innerText = cnfv + cnsv
    con_35()
}
cs_inp.onkeyup = function (event){
    if(cs_inp.value > 25){
        cs_inp.value = cnsv
    }
    if(cs_inp.value == ""){
        cs_inp.value = 0
    }
    cs_inp.value = parseFloat(cs_inp.value) + 0
    cnsv = parseFloat(cs_inp.value)
    cn_total.innerText = ""
    cn_total.innerText = cnfv + cnsv
    con_35()
}
function con_35(){
    if(cn_total.innerText > 32){
        c_marks.innerText = "Pass"
    }
    else{
        c_marks.innerText = "Fail"
    }
    gnd_total()
}

// **** che section end **** //

// **** bio section start *** //

let bf_inp = document.querySelector(".bf-inp")
let bs_inp = document.querySelector(".bs-inp")
let bn_total = document.querySelector(".bn-total")
let b_marks = document.querySelector(".b-marks")

let bnfv = 0
let bnsv = 0

bf_inp.onkeyup = function (event){
    if (bf_inp.value > 75){
        bf_inp.value = bnfv
    }
    if(bf_inp.value == ""){
        bf_inp.value = 0
    }
    bf_inp.value = parseFloat(bf_inp.value) + 0
    bnfv = parseFloat(bf_inp.value)
    bn_total.innerText = ""
    bn_total.innerText = bnfv + bnsv
    con_25()
}
bs_inp.onkeyup = function (event){
    if(bs_inp.value > 25){
        bs_inp.value = bnsv
    }
    if(bs_inp.value == ""){
        bs_inp.value = 0
    }
    bs_inp.value = parseFloat(bs_inp.value) + 0
    bnsv = parseFloat(bs_inp.value)
    bn_total.innerText = ""
    bn_total.innerText = bnfv + bnsv
    con_25()
}
function con_25 () {
    if(bn_total.innerText > 32){
        b_marks.innerText = "Pass"
    }
    else{
        b_marks.innerText = "Fail"
    }
    gnd_total()
}

// **** bio section end ****  //


// grand total section start **** //

let g_total = document.querySelector(".g-total");
function gnd_total (){
    g_total.innerText = parseInt( en_total.innerText ) + parseInt( un_total.innerText) + parseInt( mn_total.innerText) + parseInt( in_total.innerText ) + parseInt ( sn_total.innerText ) + parseInt( pn_total.innerText ) + parseInt( cn_total.innerText ) + parseInt( bn_total.innerText)
    
    per()
}


let prc = document.querySelector(".perc");
function per(){
    prc.innerText = parseInt (g_total.innerText )*100 / 800
    grad()
}
let grade = document.querySelector(".grade");
function grad(){
    if(prc.innerText >= 91){
        grade.innerText = "A+"
    }else
    if(prc.innerText >= 81 ){
        grade.innerText = "A"
    }else
    if(prc.innerText >= 71 ){
        grade.innerText = "B"
    }else
    if(prc.innerText >= 61 ){
        grade.innerText = "C"
    }else
    if(prc.innerText >= 51 ){
        grade.innerText = "D"
    }else
    if(prc.innerText >= 33 ){
        grade.innerText = "Pass"
    }
    else{
        grade.innerText = "Fail"
    }
}
