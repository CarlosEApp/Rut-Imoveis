

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

//iniciar apresentação de imóveis

var db = firebase.firestore();
var itens = [];
var index = 0;
// 🔹 Carrega todos os documentos da coleção
db.collection("GeralColl").get().then(snapshot => {
snapshot.forEach(doc => {
itens.push(doc.data());
});
// Inicia o ciclo de exibição
if (itens.length > 0) {
mostrarItem();
setInterval(mostrarItem, 5000); // muda a cada 7 segundos
}
}).catch(err => console.error("Erro ao carregar dados:", err));
// 🔹 Função que atualiza a imagem e os textos
function mostrarItem() {
const item = itens[index];
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
dtb.collection("GeralColl").get().then(snapshot => {
var li = document.getElementById('list');
//li.innerHTML = ''; // limpa a lista uma única vez

snapshot.forEach(docSnap => {
var data = docSnap.data();

if (data.IMV_Disponivel == 'ativo') {
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
var BTN_Editar = document.createElement('button');
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
label_tres.id = 'label_quatro';
divFlex.id = 'flexDiv';
BTN_Editar.id = 'editarBTN';
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


IMG_Imovel.src = data.Imagem1;
label_um.textContent = ` ${data.Titulo}`;
label_tres.textContent = `${data.Código}`;

if(data.Tranzação==='Venda'||data.Tranzação==='Lançamento'){
  label_dois.innerHTML = ` ${data.Tranzação}:<b id='spamm'>${data.Valor_Venda}</b>` ;

}else if(data.Tranzação==='Locação'|| data.Tranzação==='Temporada'){
   label_dois.innerHTML = ` ${data.Tranzação}:<b id='spamm'>${data.Valor_Locação}</b>` ;

}else if(data.Tranzação==='Locação e Venda'){
 label_dois.innerHTML = ` ${data.Tranzação}:<b id='spamm'>${data.Valor_Venda} <br> ${data.Valor_Locação}</b>` ;
 }else{

  }
BTN_Editar.textContent = '';

BTN_Mais.className = 'fa-solid fa-car';

BTN_Mais.title = 'Ver mais informações';

BTN_Editar.title = 'Editar informações do cadastro';
IMG_Imovel.title = 'imagem do Imóvel';
parag.textContent = '';


img1.src='src/regua.png';
img2.src='src/cama-de-solteiro.png';
img3.src='src/chuveiro.png';
img4.src='src/carro.png';

if(!data.Area_Const || data.Area_Const==''){
  parag2.textContent='00 m²?';
  parag2.className='smai'

}else{
  parag2.textContent=`${data.Area_Const} m²`
  
};

if(!data.Quartos || data.Quartos==''){
  parag3.textContent=' quartos?';
  parag3.className='smai'

}else{
  parag3.textContent=`${data.Quartos} quartos`
};

if(!data.Banheiros || data.Banheiros==''){
  parag4.textContent='banh ?';
  parag4.className='smai'

}else{
  parag4.textContent=`${data.Banheiros} banh.`
};

if(!data.Vagas_G || data.Vagas_G==''){
  parag5.textContent='vaga ?';
  parag5.className='smai'

}else{
  parag5.textContent=`${data.Vagas_G} Vagas`
};

//img5.src='';


conntainer.appendChild(parag);
div_imagem.appendChild(IMG_Imovel);
div_label.appendChild(label_um);
div_label.appendChild(label_dois);
div_label.appendChild(label_tres);
div_botao.appendChild(BTN_Editar);
div_botao.appendChild(BTN_Mais);
div_cvc.appendChild(img1);
div_cvc.appendChild(img2);
div_cvc.appendChild(img3);
div_cvc.appendChild(img4);
//div_cvc.appendChild(img5);
div_cvic.appendChild(parag2)   
div_cvic.appendChild(parag3)
div_cvic.appendChild(parag4)
div_cvic.appendChild(parag5)
div_cvic.appendChild(parag6)             

div_label.appendChild(div_botao)
conntainer.appendChild(div_imagem);
conntainer.appendChild(div_label);
conntainer.appendChild(div_cvc);
conntainer.appendChild(div_cvic);
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
//document.getElementById('respPesquisasadiv',).style.display='none'
//var listy = document.getElementById('listpesqRes');
//listy.innerHTML = ''
var termo = document.getElementById("PesquInput").value.toLowerCase();
if(termo){
var itens = 0
setTimeout(function(){
//Listaitens()
},2000)
var dbP= firebase.firestore()
dbP.collection("GeralColl").get().then(snapshot => {
snapshot.forEach(docSnap => {
var data = docSnap.data();
itens++
if (data.Rua && data.Rua.toLowerCase().includes(termo) || data.Bairro && data.Bairro.toLowerCase().includes(termo)  ||data.Código && data.Código.toLowerCase().includes(termo) ||data.Titulo && data.Titulo.toLowerCase().includes(termo) ||data.Cidade && data.Cidade.toLowerCase().includes(termo))  {
var rua = data.Rua ? data.Rua.toLowerCase() : ""; var bairro = data.Bairro? data.Bairro.toLowerCase() : ""; var cod = data.Código ? data.Código.toLowerCase() : ""; var titulo = data.Titulo ? data.Titulo.toLowerCase() : ""; var cidade = data.Cidade ? data.Cidade.toLowerCase() : "";

if (rua.includes(termo) || termo.includes(rua)||cod.includes(termo) || termo.includes(cod)||bairro.includes(termo) || termo.includes(bairro) || titulo.includes(termo) || termo.includes(titulo) || cidade.includes(termo) || termo.includes(cidade)) {
//alert(data.Titulo)
if(data.IMV_Disponivel=='ativo'){
alert(data.Titulo)

sessionStorage.setItem('itens',iten)
} else{
}
}
}
})
})
}else{
Swal.fire('','Preencha o campo de pesquisa!','')
}
}

//document.getElementById('DivPesquisador').style.display='none'
//fucção pesquisa
function funçaoPesquisa(){
document.getElementById('DivPesquisador').style.display='block'
}