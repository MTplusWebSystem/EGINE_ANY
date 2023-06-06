// Função para adicionar um evento de clique em um elemento e exibir um bloco correspondente
function addClickEventAndDisplay(elementId, displayId) {
  const element = document.getElementById(elementId);
  const display = document.querySelector(`.${displayId}`);

  if (element && display) {
    element.addEventListener('click', () => {
      display.style.display = "flex";
    });

    const close = ["Close1",
      "Close2", "Close3", "Close4", "Close5", "Close6", "Close7"
    ];

    for (const closeId of close) {
      const closeButton = document.querySelector(`#${closeId}`);
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          display.style.display = "none";
        });
      }
    }
  }
}

// Função para exibir o pop-up
function showPopup() {
  const popup = document.querySelector("#popup");
  if (popup) {
    popup.style.transform = "translateX(0)";
    setTimeout(hidePopup, 4000);
  }
}

// Função para esconder o pop-up
function hidePopup() {
  const popup = document.querySelector("#popup");
  if (popup) {
    popup.style.transform = "translateX(-120%)";
  }
}

// Adicionar eventos e exibir elementos correspondentes
addClickEventAndDisplay("Host", "HOST");
addClickEventAndDisplay("Config", "Config");
addClickEventAndDisplay("Description", "Description");
addClickEventAndDisplay("Option", "Option");
addClickEventAndDisplay("Edit", "Edit");
addClickEventAndDisplay("Delet", "Delet");

const openButton = document.querySelector("#Salvar");

// Adicionar evento de clique ao botão para exibir o pop-up
if (openButton) {
  openButton.addEventListener("click", showPopup);
}
