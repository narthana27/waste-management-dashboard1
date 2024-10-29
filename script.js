// Initialize quantities
let wasteData = {
    plastic: 5,
    metal: 3,
    organic: 2,
    glass: 10
};


function addWaste() {
    const category = document.getElementById("category").value;
    const quantity = parseFloat(document.getElementById("quantity").value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    wasteData[category] += quantity;

    
    document.getElementById('${category}-quantity').innerText = wasteData[category].toFixed(1);


    document.getElementById("quantity").value = '';
}