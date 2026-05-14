
function funçaocad(){
window.open('html/Cadastro.html','_self')
}
// Iniciar Firebase
var firebaseConfig = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfig);
/////////////////////////////////////////////////////////////////
// Tela Cheia
function toggleFullScreen() {
if ((document.fullScreenElement && document.fullScreenElement !== null) ||
(!document.mozFullScreen && !document.webkitIsFullScreen)) {
if (document.documentElement.requestFullScreen) {
document.documentElement.requestFullScreen();
} else if (document.documentElement.mozRequestFullScreen) {
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullScreen) {
document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
}
} else {
if (document.cancelFullScreen) {
document.cancelFullScreen();
} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if (document.webkitCancelFullScreen) {
document.webkitCancelFullScreen();
}
}
}
//Data e Hora
setInterval(function() {
const newDate = new Date()
var dia = String(newDate.getDate()).padStart(2, '0');
var mes = String(newDate.getMonth() + 1).padStart(2, '0');
var ano = String(newDate.getFullYear()).padStart(2, '0')
var data = `${dia}/${mes}/${ano}`
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;
//const lbl_data = document.getElementById('lbl-data');
//lbl_data.innerHTML = `${data}`
//localStorage.setItem('data', data)
sessionStorage.setItem('hora', timeString)
sessionStorage.setItem('data', data)
}, 1000)

document.getElementById("imgHeader").src ='src/Bannerjpg2.png';
document.getElementById("imgDoisHeader").src ='src/bannerMenor.png';
// iniciar banners Gif
var banner = [];
var index3 = 0;
var dbnn = firebase.firestore();
dbnn.collection("CoLL_Banners").get().then(snapshot => {
snapshot.forEach(doc => {
banner.push(doc.data());
});
// Inicia o ciclo de exibição
if (banner.length > 0) {
mostrarbanner();
setInterval(mostrarbanner, 12000); // muda a cada 7 segundos
}
}).catch(err => console.error("Erro ao carregar dados:", err));
// 🔹 Função que atualiza a imagem e os textos
function mostrarbanner() {
var bann = banner[index3];
var img = document.getElementById("imgHeader")

document.getElementById("imgHeader").src = bann.Imagem; // campo da imagem no Firestore

index3 = (index3 + 1) % banner.length; // avança e reinicia no final
};

//Menor
var banner2 = [];
var index2 = 0;
var dbnnM = firebase.firestore();
dbnnM.collection("CoLL_BannersMenores").get().then(snapshot => {
snapshot.forEach(doc => {
banner2.push(doc.data());
});
// Inicia o ciclo de exibição
if (banner2.length > 0) {
mostrarbanner_2();
setInterval(mostrarbanner_2, 10000); // muda a cada 7 segundos
}
}).catch(err => console.error("Erro ao carregar dados:", err));
// 🔹 Função que atualiza a imagem e os textos
function mostrarbanner_2() {
var banne = banner2[index2];
var img = document.getElementById("imgDoisHeader")

document.getElementById("imgDoisHeader").src = banne.Imagem; // campo da imagem no Firestore

index2 = (index2 + 1) % banner2.length; // avança e reinicia no final
};




//iniciar apresentação de imóveis
var db = firebase.firestore();
var itens = [];
var index = 0;
// 🔹 Carrega todos os documentos da coleção
db.collection("GeralColl").where("IMV_Disponivel", "==", "ativo").get()
.then(snapshot => {
snapshot.forEach(doc => {
itens.push(doc.data());
});
// Inicia o ciclo de exibição
if (itens.length > 0) {
mostrarItem();
setInterval(mostrarItem, 7000); // muda a cada 7 segundos
}
}).catch(err => console.error("Erro ao carregar dados:", err));
// 🔹 Função que atualiza a imagem e os textos
function mostrarItem() {
var item = itens[index];
var img = document.getElementById("IMGAP")

document.getElementById("IMGAP").src = item.Imagem1; // campo da imagem no Firestore
document.getElementById("ALBAP2").innerHTML = ``;

//document.getElementById("LBLAP").textContent = ` ${ item.Cidad} ${item.UF}`// campo do título
setTimeout(function(){
document.getElementById("ALBAP2").innerHTML = 
`📌 Bairro: ${item.Bairro}<br> ${item.Cidade} - ${item.UF}`;
// campo da descrição

},1000)
index = (index + 1) % itens.length; // avança e reinicia no final
};
function initList(){
var Itens=1
var dtb = firebase.firestore();
dtb.collection("GeralColl").where("IMV_Disponivel", "==", "ativo").get()
.then(snapshot => {
var li = document.getElementById('list');
snapshot.forEach(docSnap => {
var data = docSnap.data();
if(!data.Destaque|| data.Destaque==''){
}else{
    
Itens++
if (Itens <= 7){
var conntainer = document.createElement('div');
var divFlex = document.createElement('div');
var div_label = document.createElement('div');
var div_botao = document.createElement('div');
var div_imagem = document.createElement('div');
var div_cvc = document.createElement('div');
var div_cvic= document.createElement('div');
var label_um = document.createElement('label');
var label_dois = document.createElement('label');
var label_tres = document.createElement('label');
var label_quatro = document.createElement('label');
var BTN_Compart = document.createElement('button');
var BTN_Mais = document.createElement('button');
var IMG_Imovel = document.createElement('img');
var parag = document.createElement('p');
var img1=document.createElement('img');
var img2=document.createElement('img');
var img3=document.createElement('img');
var img4=document.createElement('img');
var img5=document.createElement('img');
var parag2 = document.createElement('p');
var parag3 = document.createElement('p');
var parag4 = document.createElement('p');
var parag5 = document.createElement('p');
var parag6 = document.createElement('p');
conntainer.id = 'ConntDiv';
div_label.id = 'divLabel';
div_imagem.id = 'divIMG';
div_botao.id = 'divBotao';
IMG_Imovel.id = 'ImagemIMV';
label_um.id = 'label_um';
label_dois.id = 'label_dois';
label_tres.id = 'label_tres';
label_quatro.id = 'label_quatro';
divFlex.id = 'flexDiv';
BTN_Compart.id= 'CompartBTN';
BTN_Mais.id = 'maisBTN';
img1.id='img_icom';
img2.id='img_icom';
img3.id='img_icom';
img4.id='img_icom';
img5.id='img_icom';
div_cvc.id='cvc';
div_cvic.id='cvic';
parag2.id='paraG';
parag3.id='paraG';
parag4.id='paraG';
parag5.id='paraG';
parag6.id='paraG';
// cria o elemento da imagem principal
var IMG_Imovel = document.createElement('img');
IMG_Imovel.id = 'ImagemIMV';
IMG_Imovel.className = 'fade'; // classe para transição suave
IMG_Imovel.title = 'imagem do Imóvel';

// monta array com todas as imagens disponíveis
var imagens = [];
for (let i = 1; i <= 3; i++) {
  const key = `Imagem${i}`;
  if (data[key]) {
    imagens.push(data[key]);
  }
}

// inicializa com a primeira imagem
// inicializa com a primeira imagem

let index = 0;
IMG_Imovel.src = imagens[index];
IMG_Imovel.classList.add('slide-in');

// troca automática a cada 5 segundos
setInterval(() => {
  index++;
  if (index >= imagens.length) {
    index = 0;
  }

  // aplica saída lateral

  setTimeout(() => {
  
    IMG_Imovel.classList.remove('slide-out');
    IMG_Imovel.classList.add('slide-in'); // entra de lado
  },1200); // tempo da animação de saída
    IMG_Imovel.classList.remove('slide-in');
  IMG_Imovel.classList.add('slide-out');
  IMG_Imovel.src = imagens[index]; // troca imagem
}, 9000);// 5 segundos

label_um.textContent = `🏡 ${data.Titulo}`;
label_tres.textContent = `${data.Código}`;
if(data.Tranzação==='Venda'||data.Tranzação==='Lançamento'){
label_dois.innerHTML = `✅ ${data.Tranzação}:<b id='spamm'>${data.Valor_Venda}</b>` ;
}else if(data.Tranzação==='Locação'|| data.Tranzação==='Temporada'){
label_dois.innerHTML = `✅ ${data.Tranzação}:<b id='spamm'>${data.Valor_Locação}</b>` ;
}else if(data.Tranzação==='Locação e Venda'){
label_dois.innerHTML = `✅ ${data.Tranzação}: <b id='spamm'>${data.Valor_Locação} <br> ${data.Valor_Venda}</b>` ;
label_dois.id = 'label_dois_';
}else{
}
BTN_Mais.className = 'fa-solid fa-eye';
BTN_Mais.title = 'Ver mais informações';
IMG_Imovel.title = 'imagem do Imóvel';
BTN_Compart.className='fa-solid fa-share-nodes';
BTN_Compart.title='Compartilhar'
parag.textContent = '';
img1.src='src/regua.png';
img2.src='src/cama-de-solteiro.png';
img3.src='src/chuveiro.png';
img4.src='src/carro.png';
if(!data.Area_Const || data.Area_Const==''){
parag2.textContent='00 m²?';
parag2.className='smai';
img1.title='Area Construida, sem informação!'
}else{
parag2.textContent=`${data.Area_Const} m²`
img1.title=`Area Construida: ${data.Area_Const} m²`
};
if(!data.Quartos || data.Quartos==''|| data.Quartos=='0'){
parag3.textContent=' quartos?';
parag3.className='smai';
img2.title='Sem Quartos!'
}else{
parag3.textContent=`${data.Quartos} quartos`
img2.title=`${data.Quartos} Quartos`
};
if(!data.Banheiros || data.Banheiros==''|| data.Banheiros=='0'){
parag4.textContent='banh ?';
parag4.className='smai';
img3.title='Sem Banheiros!'
}else{
parag4.textContent=`${data.Banheiros} banh.`
img3.title=`${data.Banheiros} Banheiros`
};
if(!data.Vagas_G || data.Vagas_G==''|| data.Vagas_G=='0'){
parag5.textContent='vaga ?';
parag5.className='smai';
img4.title='Sem vaga de garagem!'
}else{
parag5.textContent=`${data.Vagas_G} Vagas`
img4.title=`${data.Vagas_G} Vagas de garagem `
};
conntainer.appendChild(parag);
div_imagem.appendChild(IMG_Imovel);
div_label.appendChild(label_um);
div_label.appendChild(label_dois);
div_label.appendChild(label_tres);
div_botao.appendChild(BTN_Compart);
div_botao.appendChild(BTN_Mais);
div_cvc.appendChild(img1);
div_cvc.appendChild(img2);
div_cvc.appendChild(img3);
div_cvc.appendChild(img4);
div_cvic.appendChild(parag2)   
div_cvic.appendChild(parag3)
div_cvic.appendChild(parag4)
div_cvic.appendChild(parag5)
div_cvic.appendChild(parag6)             
conntainer.appendChild(div_botao)
conntainer.appendChild(div_imagem);
conntainer.appendChild(div_label);
conntainer.appendChild(div_cvc);
conntainer.appendChild(div_cvic);
conntainer.appendChild(div_botao)
li.appendChild(conntainer);
}
}
});
})
};
initList()
// Pesquisar
sessionStorage.setItem('itens','')
function pesquisar() {
sessionStorage.setItem('itens','')
var termo = document.getElementById("PesquInput").value.toLowerCase();

if (!termo) {
Swal.fire('', 'Preencha o campo de pesquisa!', '')
return;
}
var dbP = firebase.firestore();
dbP.collection("GeralColl").get().then(snapshot => {
snapshot.forEach(docSnap => {
var data = docSnap.data();
// Verifica se algum campo contém o termo
let campos = [data.Rua, data.Bairro, data.Código, data.Titulo, data.Cidade];
if (campos.some(c => c && c.toLowerCase().includes(termo))) {
if (data.IMV_Disponivel?.toLowerCase() === 'ativo') {
alert(data.Titulo);
sessionStorage.setItem('itens', JSON.stringify(data));
}
}
});
});
}
//document.getElementById('DivPesquisador').style.display='none'
//fucção pesquisa
function funçaoPesquisa(){
document.getElementById('DivPesquisador').style.display='block'
}
//document.querySelector('.diValores').style.display='block'
//document.querySelector('.classeCodigo').style.display='block'
//Cadastro de pesquisa codigo e valor
function ICodigo(){
var I_resp=document.getElementById('i_codigo_imovel');
var resp= document.querySelector('.classeCodigo');
if(resp.style.display=='block'){
resp.style.display='none';
I_resp.className='fa-solid fa-eye';
}else{
resp.style.display='block';
I_resp.className='fa-solid fa-eye-slash';
}

};
function IValaor(){
var I_resp_=document.getElementById('i_valor_imovel');
var resp_= document.querySelector('.diValores');
if(resp_.style.display=='block'){
resp_.style.display='none';
I_resp_.className='fa-solid fa-eye';
}else{
resp_.style.display='block';
I_resp_.className='fa-solid fa-eye-slash';
}


}