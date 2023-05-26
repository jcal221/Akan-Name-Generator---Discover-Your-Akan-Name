document.getElementById('nameForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const birthdateInput = document.getElementById('birthdate');
    const genderSelect = document.getElementById('gender');
    const resultDiv = document.getElementById('result');
    
    const birthdate = birthdateInput.value;
    const gender = genderSelect.value;
    
    // Validate inputs
    if (!birthdate || !gender) {
      alert('Please fill in all fields.');
      return;
    }
    
    const akanName = generateAkanName(birthdate, gender);
    resultDiv.innerText = `Your Akan name is: ${akanName}`;
  });
  
  function generateAkanName(birthdate, gender) {
    // Convert the birthdate to a Date object
    const date = new Date(birthdate);
  
    // Get the day of the week (0-6, where Sunday is 0)
    const dayOfWeek = date.getDay();
  
    // Define the Akan names based on gender and day of the week
    const maleNames = [
      'Kwasi',
      'Kwadwo',
      'Kwabena',
      'Kwaku',
      'Yaw',
      'Kofi',
      'Kwame'
    ];
  
    const femaleNames = [
      'Akosua',
      'Adwoa',
      'Abenaa',
      'Akua',
      'Yaa',
      'Afua',
      'Ama'
    ];
  
    // Determine the Akan name based on gender and day of the week
    let akanName;
    if (gender === 'male') {
      akanName = maleNames[dayOfWeek];
    } else if (gender === 'female') {
      akanName = femaleNames[dayOfWeek];
    } else {
      akanName = 'Unknown';
    }
  
    return akanName;
  }
  