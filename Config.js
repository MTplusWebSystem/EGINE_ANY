let limite = 0;
const db = {
  "Servers": [],
  "WarningMsg": "",
  "SecuredShellPort": "22",
  "SecuredShellDropbearPort": "80",
  "SecuredShellSSLPort": "443",
  "OpenVpnTCPPort": "1194",
  "OpenVpnUDPPort": "7300",
  "OpenVpnSSLPort": "443",
  "SquidPort": "8080",
  "ConfigCertOvpn": "",
  "OpenVpnAddLine": "ULTRACONEXAO",
  "WarnMsg": "ED7B68535C996EE1E4D68FA753FA5633",
  "VIP": "vip",
  "Link": "true",
  "LinkVideo": "sim",
  "Dnspp": "nao",
  "Hostpp": "nao"
};

function addConfig() {
  const Dominio = document.querySelector("#Dominio").value;
  const CheckUser = document.querySelector("#CheckUser").value;
  const proxy = document.querySelector("#Dominio").value;
  const Payload = document.querySelector("#Dominio").value;
  const porta = document.querySelector("#Dominio").value;
  const Udp = document.querySelector("#Udp").value;
  const AddConf = {
    "Name": Name,
    "Servidor": ":" + Udp,
    "SPort": "",
    "Prox": proxy + ":" + porta,
    "Payload": Payload,
    "Direct": "",
    "Sni": "",
    "Payssl": "",
    "Certopen": "",
    "Dns1": "",
    "Dns2": "",
    "UrlPainel": CheckUser,
    "VPNMod": 0,
    "VPNTunMod": 1,
    "Info": "CLOUDFLARE:vivo",
    "DefaultProxy": true,
    "CustomSquid": ""
  };
  if (limite == 0) {
    db["Networks"] = [AddConf];
  } else {
    db["Networks"].push(AddConf);
  }
}

function Armazenar() {
  const UrlUpdate = document.querySelector("#UrlUpdate").value;
  const Saudacao = document.querySelector("#Saudacao").value;
  const Version = document.querySelector("#Version").value;
  const UrlIcon = document.querySelector("#UrlIcon").value;
  const UrlBanner = document.querySelector("#UrlBanner").value;
  const Background = document.querySelector("#Background").value;
  const Nota = document.querySelector("#Notas").value;
  db["UrlUpdate"] = UrlUpdate;
  db["LinkIcone"] = UrlIcon;
  db["LinkBanner"] = UrlBanner;
  db["ReleaseNotes"] = [Nota];
  db["LinkBackground"] = Background;
  db["Saudacao"] = Saudacao;
  db["ConfigVersion"] = Version;
}

const Copy = document.querySelector("#Copy");
const EditList = document.querySelector("#EditList");
const value = document.querySelector("#value");
const Save = document.querySelector("#Salvar");
const JSONContent = document.querySelector("#JSONContent");

Save.addEventListener("click", () => {
  if (limite == 0) {
    Armazenar();
    console.log(db);
    addConfig(limite);
    limite += 1;
    value.textContent = limite;

    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    spanElement.textContent = "Config[" + limite + "]Nome";

    li.appendChild(spanElement);
    EditList.appendChild(li);
  } else {
    addConfig(limite);
    limite += 1;
    value.textContent = limite;

    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    spanElement.textContent = "Config[" + limite + "]Nome";

    li.appendChild(spanElement);
    EditList.appendChild(li);
  }
});

function copyToClipboard() {
  const jsonString = JSON.stringify(db);
  JSONContent.textContent = jsonString;
  JSONContent.style.display = "block";

  navigator.clipboard.writeText(jsonString)
    .then(() => {
      const MSG = document.querySelector("#MSG");
      MSG.innerHTML = 'Copiado com sucesso';
      showPopup();

      setTimeout(() => {
        MSG.innerHTML = ''; // Limpa a mensagem após alguns segundos
      }, 3000); // Mostra a mensagem por 3 segundos
    })
    .catch((error) => {
      const MSG = document.querySelector("#MSG");
      MSG.innerHTML = 'Error copying to clipboard: ' + error;
    })
    .finally(() => {
      JSONContent.textContent = "";
      JSONContent.style.display = "none";
    });
}

// Update the event listener for the copy button
Copy.addEventListener("click", copyToClipboard);