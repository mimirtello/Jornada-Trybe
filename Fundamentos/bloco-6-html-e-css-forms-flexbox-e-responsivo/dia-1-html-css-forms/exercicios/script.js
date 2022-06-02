let enviar=document.querySelector("#enviar")

function handleSubmit(event) {
  event.preventDefault();
}

function clearFields() {
  const formElements = document.querySelectorAll('input')
  const textArea = document.querySelector('textarea')
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = ''
    userInput.checked = false;
  }
  textArea.value = ''
}

// window.onload = function () {
//   const clearBtn = document.querySelector('#apagar')
//   clearBtn.addEventListener('click', clearFields)
//   const submitBtn = document.querySelector('#enviar')
//   submitBtn.addEventListener('click', handleSubmit)
// }

//Bonus

function enableSubmit() {
  const submitBtn = document.querySelector('#enviar');
  const agreement = document.querySelector('#concordo');
  submitBtn.disabled = !agreement.checked;
}

function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#nome').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#why').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}


function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === true) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert('Dados inválidos');
  }
}

window.onload = function() {
  const clearBtn = document.querySelector('#apagar');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#enviar');
  submitBtn.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#concordo');
  agreement.addEventListener('change', enableSubmit);
};