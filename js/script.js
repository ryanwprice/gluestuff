var adhesives = [
    {m1: "wood", m2: "paper", a1: "w"},
    {m1: "wood", m2: "fabric", a1: "c", a2:"w"},
    {m1: "wood", m2: "felt", a1: "sp", a2:"c"},
    {m1: "wood", m2: "leather", a1: "w", a2:"c", a3: "ca"},
    {m1: "wood", m2: "rubber", a1: "c", a2:"ca"},
    {m1: "wood", m2: "foam", a1: "c"},
    {m1: "wood", m2: "styrofoam", a1: "2k", a2:"h"},
    {m1: "wood", m2: "plastic", a1: "l", a2:"c"},
    {m1: "wood", m2: "metal", a1: "2k", a2:"c", a3: "l"},
    {m1: "wood", m2: "ceramic", a1: "c", a2:"ca"},
    {m1: "wood", m2: "glass", a1: "c", a2:"ca"},
    {m1: "wood", m2: "balsa", a1: "w"},
    {m1: "wood", m2: "cork", a1: "w"},
    {m1: "wood", m2: "wood", a1: "l", a2:"w"},
    {m1: "cork", m2: "paper", a1: "h", a2:"w"},
    {m1: "cork", m2: "fabric", a1: "h", a2:"l"},
    {m1: "cork", m2: "felt", a1: "w"},
    {m1: "cork", m2: "leather", a1: "ca", a2:"c"},
    {m1: "cork", m2: "rubber", a1: "ca", a2:"c"},
    {m1: "cork", m2: "foam", a1: "2k"},
    {m1: "cork", m2: "styrofoam", a1: "w"},
    {m1: "cork", m2: "plastic", a1: "l", a2:"ca"},
    {m1: "cork", m2: "metal", a1: "c", a2:"ca"},
    {m1: "cork", m2: "ceramic", a1: "l", a2:"ca"},
    {m1: "cork", m2: "glass", a1: "si"},
    {m1: "cork", m2: "balsa", a1: "w"},
    {m1: "cork", m2: "cork", a1: "w"},
    {m1: "balsa", m2: "paper", a1: "w"},
    {m1: "balsa", m2: "fabric", a1: "h", a2:"w"},
    {m1: "balsa", m2: "felt", a1: "w"},
    {m1: "balsa", m2: "leather", a1: "ca", a2:"c"},
    {m1: "balsa", m2: "rubber", a1: "c", a2:"ca"},
    {m1: "balsa", m2: "foam", a1: "c"},
    {m1: "balsa", m2: "styrofoam", a1: "2k", a2:"h"},
    {m1: "balsa", m2: "plastic", a1: "l", a2:"ca"},
    {m1: "balsa", m2: "metal", a1: "2k", a2:"ca"},
    {m1: "balsa", m2: "ceramic", a1: "l", a2:"ca"},
    {m1: "balsa", m2: "glass", a1: "c", a2:"ca"},
    {m1: "balsa", m2: "balsa", a1: "w"},
    {m1: "glass", m2: "paper", a1: "a", a2:"w"},
    {m1: "glass", m2: "fabric", a1: "a"},
    {m1: "glass", m2: "felt", a1: "a"},
    {m1: "glass", m2: "leather", a1: "a", a2:"ca"},
    {m1: "glass", m2: "rubber", a1: "ca"},
    {m1: "glass", m2: "foam", a1: "sp"},
    {m1: "glass", m2: "styrofoam", a1: "sk", a2:"sp"},
    {m1: "glass", m2: "plastic", a1: "c", a2:"l"},
    {m1: "glass", m2: "metal", a1: "2k", a2:"c"},
    {m1: "glass", m2: "ceramic", a1: "2k", a2:"c", a3:"l"},
    {m1: "glass", m2: "glass", a1: "2k", a2:"l"},
    {m1: "ceramic", m2: "paper", a1: "a", a2:"h"},
    {m1: "ceramic", m2: "fabric", a1: "ca", a2:"a"},
    {m1: "ceramic", m2: "felt", a1: "ca", a2:"a"},
    {m1: "ceramic", m2: "leather", a1: "ca", a2:"a", a3: "c"},
    {m1: "ceramic", m2: "rubber", a1: "c", a2:"ca"},
    {m1: "ceramic", m2: "foam", a1: "a"},
    {m1: "ceramic", m2: "styrofoam", a1: "ce", a2:"c"},
    {m1: "ceramic", m2: "plastic", a1: "l", a2:"ca", a3: "c"},
    {m1: "ceramic", m2: "metal", a1: "2k", a2:"c", a3: "l"},
    {m1: "ceramic", m2: "ceramic", a1: "ce", a2:"ca"},
    {m1: "metal", m2: "paper", a1: "a", a2:"h"},
    {m1: "metal", m2: "fabric", a1: "a"},
    {m1: "metal", m2: "felt", a1: "c"},
    {m1: "metal", m2: "leather", a1: "c", a2:"ca"},
    {m1: "metal", m2: "rubber", a1: "c", a2:"ca"},
    {m1: "metal", m2: "foam", a1: "c"},
    {m1: "metal", m2: "styrofoam", a1: "2k", a2:"h"},
    {m1: "metal", m2: "plastic", a1: "2k", a2:"c"},
    {m1: "metal", m2: "metal", a1: "2k", a2:"c"},
    {m1: "plastic", m2: "paper", a1: "h", a2:"sp"},
    {m1: "plastic", m2: "fabric", a1: "sp", a2:"c"},
    {m1: "plastic", m2: "felt", a1: "sp", a2:"c"},
    {m1: "plastic", m2: "leather", a1: "sp", a2:"ca"},
    {m1: "plastic", m2: "rubber", a1: "c", a2:"ca"},
    {m1: "plastic", m2: "foam", a1: "ca"},
    {m1: "plastic", m2: "styrofoam", a1: "ca", a2:"c"},
    {m1: "plastic", m2: "plastic", a1: "l", a2:"ca", a3: "2k"},
    {m1: "styrofoam", m2: "paper", a1: "sp", a2:"c"},
    {m1: "styrofoam", m2: "fabric", a1: "a", a2:"h"},
    {m1: "styrofoam", m2: "felt", a1: "sp"},
    {m1: "styrofoam", m2: "leather", a1: "a"},
    {m1: "styrofoam", m2: "rubber", a1: "l"},
    {m1: "styrofoam", m2: "foam", a1: "l", a2:"a"},
    {m1: "styrofoam", m2: "styrofoam", a1: "a", a2:"sp"},
    {m1: "foam", m2: "paper", a1: "sp"},
    {m1: "foam", m2: "fabric", a1: "sp"},
    {m1: "foam", m2: "felt", a1: "sp"},
    {m1: "foam", m2: "leather", a1: "c"},
    {m1: "foam", m2: "rubber", a1: "c"},
    {m1: "foam", m2: "foam", a1: "sp"},
    {m1: "rubber", m2: "paper", a1: "ca", a2:"c"},
    {m1: "rubber", m2: "fabric", a1: "a", a2:"c"},
    {m1: "rubber", m2: "felt", a1: "c"},
    {m1: "rubber", m2: "leather", a1: "ca"},
    {m1: "rubber", m2: "rubber", a1: "ca"},
    {m1: "leather", m2: "paper", a1: "f", a2:"sp"},
    {m1: "leather", m2: "fabric", a1: "f"},
    {m1: "leather", m2: "felt", a1: "2k"},
    {m1: "leather", m2: "leather", a1: "c", a2:"f"},
    {m1: "felt", m2: "paper", a1: "a", a2:"h"},
    {m1: "felt", m2: "fabric", a1: "f", a2:"h"},
    {m1: "felt", m2: "felt", a1: "f", a2:"h"},
    {m1: "fabric", m2: "paper", a1: "a", a2:"h"},
    {m1: "fabric", m2: "fabric", a1: "f", a2:"h"},
    {m1: "paper", m2: "paper", a1: "a", a2:"w"},
];

var material1 = document.getElementById("material1");
var material2 = document.getElementById("material2");
var display= document.getElementById("display");
var adhesiveIndex;
var country = geoplugin_countryName();


function getMaterials(){
    //clears old glue list
    display.innerHTML = `<p>To adhere <em>${material1.value}</em> to <em>${material2.value}</em>, you should use:</p>`
    //checks m1 for material
    for (i=0; i < adhesives.length; i++) {
        if (material1.value == adhesives[i].m1) {
            if (material2.value == adhesives[i].m2) {
                adhesiveIndex = i;
                findAdhesive();
                return;
            };
        };
    };
    
    //checks m2 for material
    for (i=0; i < adhesives.length; i++) {
        if (material1.value == adhesives[i].m2) {
            if (material2.value == adhesives[i].m1) {
                adhesiveIndex = i;
                findAdhesive();
                return;
            };
        };
    };
};

function findAdhesive() {
    if(adhesives[adhesiveIndex].a1) {
        console.log(adhesives[adhesiveIndex].a1);
        var adhesive = adhesives[adhesiveIndex].a1;
        displayAdhesives(adhesive);
    };
    
    if(adhesives[adhesiveIndex].a2) {
        console.log(adhesives[adhesiveIndex].a2);
        var adhesive = adhesives[adhesiveIndex].a2;
        displayAdhesives(adhesive);
    };
    
    if(adhesives[adhesiveIndex].a3) {
        console.log(adhesives[adhesiveIndex].a3);
        var adhesive = adhesives[adhesiveIndex].a3;
        displayAdhesives(adhesive);
    };
}

function displayAdhesives(adhesive){ 
    console.log("display");
    var adhesiveText = document.createElement("div");
    adhesiveText.className = "adhesive";

    switch (adhesive) {
        case 'a':
            adhesiveText.innerHTML = "All-purpose glue"
            break;
        case 'f':
            adhesiveText.innerHTML = "Fabric glue"
            break;
        case 'sp':
            adhesiveText.innerHTML = "Spray adhesive"
            break;
        case 'h':
            adhesiveText.innerHTML = "Hot glue"
            break;
        case 'c':
            adhesiveText.innerHTML = "Contact adhesive"
            break;
        case 'l':
            adhesiveText.innerHTML = "Construction adhesive"
            break;
        case 'ce':
            adhesiveText.innerHTML = "Ceramic glue"
            break;
        case 'si':
            adhesiveText.innerHTML = "Silicone"
            break;
        case 'w':
            adhesiveText.innerHTML = `Wood Glue`
            
            break;
        case 'ca':
            adhesiveText.innerHTML = "Cyanoacrylate (super glue)"
            break;
        case '2k':
            adhesiveText.innerHTML = `Two-component adhesive (epoxy)`
            break;
      default:
        console.log('oops! something went wrong');
    };
    
    display.appendChild(adhesiveText);
    
};



// listeners for both dropdowns
material1.addEventListener("change", getMaterials);
material2.addEventListener("change", getMaterials);