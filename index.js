document.querySelector(".amz_logo").addEventListener("click", function () {
    window.location.href = "https://www.amazon.in/";
    
})

// location popup model.....
const location_popup = document.getElementById("locationmodel");
const location_popupOpen_botton = document.querySelector(".location_box");
const location_popupClose_botton = document.getElementById("cross_botton");
const overlay = document.getElementById("overlay");

// // show the popup when click on the icon
location_popupOpen_botton.addEventListener("click", ()=>{
    location_popup.style.display = "block";
    overlay.style.display = "block";
    document.body.classList.add("modal-open");
});
// // close
location_popupClose_botton.addEventListener("click",()=> {
    location_popup.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("modal-open")
});
//close when click on the overlay
overlay.addEventListener("click", ()=>{
    location_popup.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("modal-open");
})

// All option list
const categories = [
    "All Categories","Alexa Skills","Amazon Devices","Amazon Fashion","Amazon Fresh","Amazon Fresh Meat","Amazon Pharmacy",
    "Appliances","Apps & Games","Audible Audiobooks","Baby","Beauty","Books","Car & Motorbike","Clothing & Accessories",
    "Collectibles","Computers & Accessories","Deals","Electronics","Furniture","Garden & outdoor","Garden & Outdoors",
    "Gift Cards","Grocery & Gourmet Foods","Health & Personal Care","Home & Kitchen","Industrial & Scientific",
    "Jewellery","Kindle Store","Luggage & Bags","Luxury Beauty","Movies & TV Shows","MP3 Music","Music","Musical Instruments",
    "Office Products","Pet Supplies","Prime Video","Shoes & Handbags","Software","Sports, Fitness & Outdoors",
];

const selectionBox= document.querySelector(".select_box");
const dropdownList = document.querySelector(".dropdown_list");
const selectedText = document.getElementById("selected_text");

categories.forEach(element =>{
    const li = document.createElement("li");
    li.textContent = element;
    li.addEventListener("click", ()=>{
        // selectedText.textContent = element;  Not needed.
        dropdownList.style.display = "none" // hide after selection
        overlay.style.display = "none";
    });
    dropdownList.appendChild(li);
});

selectionBox.addEventListener("click", ()=>{
    const isopen = dropdownList.style.display === "block";
    dropdownList.style.display = isopen? "none":"block";
    overlay.style.display = isopen ? "none":"block";
    document.body.classList.add("modal-open")
});
overlay.addEventListener("click", ()=>{
    dropdownList.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("modal-open");
});



