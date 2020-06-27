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

const addPet = (e) => {
  e.preventDefault();
  console.log("Añadir");
};
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

modal();
apperModalClose();
modalAddCardPet();
