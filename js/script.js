
function checkPassword() {
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("message");
  if (pass === "eren") {
    msg.textContent = "Şifre doğru, 3 saniye bekleyiniz...";
    setTimeout(() => {
      window.location.href = "panel.html";
    }, 3000);
  } else {
    msg.textContent = "Hatalı şifre";
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function createCard(data) {
  let html = '<div class="card">';
  for (const key in data) {
    html += `
      <div class="card-row">
        <span><strong>${key}</strong></span>
        <input type="text" value="EREN" readonly />
      </div>`;
  }
  html += '</div>';
  return html;
}

window.onload = () => {
  const bakimData = Array(120).fill({
    "YER": "", "BİNA ADI": "", "KAPI ŞİFRESİ": "", "YÖNETİCİ ADI": "",
    "GÖREVLİ TEL NO": "", "BAKIM ÜCRETİ": "", "KONUM.BİLGİLERİ": ""
  });
  const revizyonData = Array(40).fill({
    "YER": "", "BİNA İSMİ": "", "KONUM": "", "ETİKET RENGİ": "",
    "EKSİKLER": "", "GEREKEN MALZEME": "", "YAPILDI/YAPILMADI": ""
  });
  const arizaData = Array(50).fill({
    "YER": "", "BİNA ADI": "", "TARİH": "", "GÖREVLİ TEL NO": "",
    "ARIZA NEDENİ": "", "DEĞİŞEN PARÇA": "", "DEĞİŞEN PARÇA FİYATI": ""
  });
  const montajData = Array(20).fill({
    "YER": "", "BİNA ADI": "", "KONUM": "", "ETİKET ALINDI": "", "ETİKET ALINMADI": ""
  });

  document.getElementById("bakim").innerHTML = bakimData.map(createCard).join("");
  document.getElementById("revizyon").innerHTML = revizyonData.map(createCard).join("");
  document.getElementById("ariza").innerHTML = arizaData.map(createCard).join("");
  document.getElementById("montaj").innerHTML = montajData.map(createCard).join("");
};
