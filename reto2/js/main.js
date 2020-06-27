//Modal añadir Pet Formulario
const modalAddCardPet = () => {
  const btnAddPet = document.querySelector(".add-pet");
  const grayOut = document.querySelector(".gray-out");
  const formAddPet = document.querySelector("#formAddPet");
  const modalDelete = document.querySelector(".modal-delete");
  //botones
  const btnCancel = document.querySelector("#cancel");
  const btnAccept = document.querySelector("#add");
  btnAddPet.addEventListener("click", () => {
    modalDelete.style.display = "none";
    formAddPet.style.display = "flex";
    grayOut.style.display = "flex";
  });

  //Añadir una card
  btnAccept.addEventListener("click", addPet);

  //Cerrar modal
  btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    formAddPet.style.display = "none";
    grayOut.style.display = "none";
    return false;
  });
};
//Funcion eliminar card
const deleteCard = () => {
  const modalBody = document.querySelector(".modal-delete");
  const grayOut = document.querySelector(".gray-out.close");
  let iconsDeleteCard = document.querySelector(".pet-action-delete");

  let contenedorIcono = iconsDeleteCard.parentNode;
  let contenedorPadre = contenedorIcono.parentNode;
  contenedorPadre.parentNode.removeChild(contenedorPadre);

  modalBody.style.display = "none";
  grayOut.style.display = "none";
};

//Modal close
const apperModalClose = () => {
  const modalBody = document.querySelector(".modal-delete");
  const grayOut = document.querySelector(".gray-out.close");
  const formAddPet = document.querySelector("#formAddPet");

  let iconsDeleteCard = Array.from(
    document.querySelectorAll(".pet-action-delete")
  );
  iconsDeleteCard.forEach((icon) => {
    icon.addEventListener("click", () => {
      formAddPet.style.display = "none";
      grayOut.style.display = "flex";
      modalBody.style.display = "flex";
      console.log("clcik");
    });
  });
};

//Modal de pregunta si es que quiere eliminar la cards
const modal = () => {
  const modalBody = document.querySelector(".modal-delete");
  const grayOut = document.querySelector(".gray-out.close");
  const btnCancel = document.querySelector("#no");
  const btnAccept = document.querySelector("#yes");
  btnAccept.addEventListener("click", deleteCard);
  btnCancel.addEventListener("click", () => {
    modalBody.style.display = "none";
    grayOut.style.display = "none";
  });
};

const modalEdit = () => {
  const btnEdit = document.querySelector(".pet-action-edit");
  const modalEdit = document.querySelector(".gray-out.edit");
  const btnCancel = document.querySelector("#cancel2");
  btnEdit.addEventListener("click", () => {
    formEditPet.style.display = "flex";
    modalEdit.style.display = "flex";
  });

  // const cardInformation = document.querySelector(".pet-information");
  const namePet = document.querySelector(".pet-name");
  const countryPet = document.querySelector(".pet-country");
  const phonePet = document.querySelector(".pet-phone");
  const mailPet = document.querySelector(".pet-mail");
  const desclPet = document.querySelector(".pet-description");
  //Inputs
  document.getElementById("nameEdit").value = namePet.textContent;
  document.getElementById("phoneEdit").value = phonePet.textContent;
  document.getElementById("emailEdit").value = mailPet.textContent;
  document.getElementById("countryEdit").value = countryPet.textContent;
  document.getElementById("descriptionEdit").value = desclPet.textContent;

  //Cerrar modal
  btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    formEditPet.style.display = "none";
    modalEdit.style.display = "none";
  });

  function update() {
    const btnUpdate = document.querySelector("#addEdit");
    btnUpdate.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
  update();
};

const addPet = (e) => {
  e.preventDefault();
  //Traer los datos del formulario
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let country = document.getElementById("country").value;
  let description = document.getElementById("description").value;
  const contenedorPadre = document.querySelector(".pet > .wrapper");
  const formAddPet = document.querySelector("#formAddPet");
  const grayOut = document.querySelector(".gray-out");

  const petInfo = {
    nombre: name,
    celular: phone,
    correo: email,
    pais: country,
    descripcion: description,
  };
  contenedorPadre.innerHTML += `<article class="pet-card"><div class="pet-action"><span class="pet-action-edit"><i class="far fa-edit"></i>Edit</span><span class="pet-action-delete"><i class="fas fa-times"></i>Delete</span></div><img src="https://placedog.net/500" alt="img-pets" /><div class="pet-information"><div class="pet-name">${petInfo.nombre}</div><div class="pet-phone-mail"><span class="pet-phone">${petInfo.celular}</span><span class="pet-separator">|</span><span class="pet-mail">${petInfo.correo}</span></div><div class="pet-country">${petInfo.pais}</div><div class="pet-description">${petInfo.descripcion}</div></div></article>`;

  modal();
  apperModalClose();
  modalEdit();
  limpiarInputs();
  formAddPet.style.display = "none";
  grayOut.style.display = "none";
};
function limpiarInputs() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("country").value = "";
  document.getElementById("description").value = "";
}

modalAddCardPet();
