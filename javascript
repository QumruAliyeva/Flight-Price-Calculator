document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const tripType = document.getElementById('tripType').value;
    const classType = document.getElementById('classType').value;
    const country = document.getElementById('country').value;

   
    const distances = {
        "USA": 3000,
        "Canada": 2500,
        "UK": 4000,
        "Australia": 8000,
        "Germany": 4500,
        "Japan": 6000
    };

    const distance = distances[country];

    if (!country) {
        displayResult("Please select a valid country.", true);
        return;
    }

    let price = 0;

    if (tripType === 'one-way') {
        price = distance * (classType === 'economy' ? 0.1 : 0.2);
    } else if (tripType === 'round-trip') {
        price = distance * (classType === 'economy' ? 0.15 : 0.25) * 2;
    }

    displayResult(`Estimated Price: $${price.toFixed(2)}`, false);
});

function displayResult(message, isError) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
    resultDiv.style.display = 'block';

    if (isError) {
        resultDiv.classList.add('error');
        resultDiv.classList.remove('success');
    } else {
        resultDiv.classList.add('success');
        resultDiv.classList.remove('error');
    }
}
