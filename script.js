function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.lenght == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 13) {
        img.setAttribute("src", "fotocriancah.png");
      } else if (idade >= 13 && idade < 22) {
        img.setAttribute("src", "fotojovemh.png");
      } else if (idade >= 22 && idade < 50) {
        img.setAttribute("src", "fotoadultoh.png");
      } else {
        img.setAttribute("src", "fotoidosoh.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 13) {
        img.setAttribute("src", "fotocriancam.png");
      } else if (idade >= 13 && idade < 22) {
        img.setAttribute("src", "fotojovemm.png");
      } else if (idade >= 22 && idade < 50) {
        img.setAttribute("src", "fotoadultom.png");
      } else {
        img.setAttribute("src", "fotoidosom.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos: ${gênero} com ${idade} anos`;
    res.appendChild(img);
  }
}
