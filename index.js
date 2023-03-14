var selectedRow = null
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); 

 
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const dob = new Date(document.querySelector('#dob').value);
  const dobInput = document.querySelector('#dob');
  const dobValue = dobInput.value;

  
  const ageDiffMs = Date.now() - dob.getTime();
  const ageDate = new Date(ageDiffMs); // Epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  
  const isValidAge = age >= 18 && age <= 55;

  
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  const emailCell = document.createElement('td');
  emailCell.textContent = email;
  const passwordCell = document.createElement('td');
  passwordCell.textContent = password;
  const dobCell = document.createElement('td');
  dobCell.textContent = dobValue;
  const validAgeCell = document.createElement('td');
  validAgeCell.textContent = isValidAge ? 'true' : 'false';
  row.appendChild(nameCell);
  row.appendChild(emailCell);
  row.appendChild(passwordCell);
  row.appendChild(dobCell);
  
  row.appendChild(validAgeCell);

  
  const results = document.querySelector('#results');
  results.appendChild(row);

  
  form.reset();

  
  document.querySelector('#name').focus();
});
