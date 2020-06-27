const apperModalClose = () => {
  const modalBody = document.querySelector(".modal-delete");
  const grayOut = document.querySelector(".gray-out");
  let iconsDeleteCard = Array.from(
    document.querySelectorAll(".pet-action-delete")
  );
  iconsDeleteCard.forEach((icon) => {
    icon.addEventListener("click", () => {
      grayOut.style.display = "flex";
      modalBody.style.display = "flex";
    });
  });
};

const deleteCard = () => {
  const modalBody = document.querySelector(".modal-delete");
  const grayOut = document.querySelector(".gray-out");
  let iconsDeleteCard = document.querySelector(".pet-action-delete");

  let contenedorIcono = iconsDeleteCard.parentNode;
  let contenedorPadre = contenedorIcono.parentNode;
  contenedorPadre.parentNode.removeChild(contenedorPadre);

  modalBody.style.display = "none";
  grayOut.style.display = "none";
};

const modal = () => {
  const modalBody = document.querySelector(".modal-delete");
  const grayOut = document.querySelector(".gray-out");
  const btnCancel = document.querySelector("#no");
  const btnAccept = document.querySelector("#yes");
  console.log({ modalBody, btnCancel, btnAccept });
  btnAccept.addEventListener("click", deleteCard);
  btnCancel.addEventListener("click", () => {
    modalBody.style.display = "none";
    grayOut.style.display = "none";
  });
};
modal();
apperModalClose();
