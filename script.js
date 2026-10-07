const VIDEOS = [
  { title:"Landing de lanzamiento",  category:"Landing pages",  desc:"Video de presentación para la portada de una app.",          tools:"45 s · Premiere Pro",      src:"https://drive.google.com/file/d/1xkRibzMvN8cWWWET8K1NxKoL7McpZNTI/view?usp=drive_link", poster:"/portadas/Uzcudun.png" },
  { title:"Demo de producto",         category:"Landing pages",  desc:"Explicación animada de cómo funciona el servicio.",          tools:"1 min · After Effects",   src:"https://drive.google.com/file/d/117hjX6IwETQHzj1bCZkJzzmCuGHO7vmN/view?usp=drive_link", poster:"/portadas/Mundo de las tartas.png" },
  { title:"Unboxing y detalles",      category:"Tiendas online", desc:"Video de producto para la ficha de un artículo.",            tools:"40 s · Premiere Pro",     src:"https://drive.google.com/file/d/1FttmGVn4Qo_4eV9J_lJt5h-Ms9NoaP6s/view?usp=drive_link", poster:"/portadas/Mundo de las tartas2.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1uT9_Y8B5d4cOhEsLZXbDK3j4yEXKDGyx/view?usp=drive_link", poster:"/portadas/Mundo de las tartas3.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1V61VBF970jeFd5C8slTUwFBMrjbiYkx-/view?usp=drive_link", poster:"/portadas/mundoCanal.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1P7BewZX-yH9ogQQjilSFfxZwVg7vPxbQ/view?usp=drive_link", poster:"/portadas/mundoAmigo.png" },
  { title:"Recorrido del local",      category:"Restaurantes",   desc:"Ambiente, platos y horarios para la web de un restaurante.", tools:"1 min · Premiere Pro",    src:"https://drive.google.com/file/d/1FW2GJ4FLwxdW6rLwdLWhPdocwCm_eNyp/view?usp=drive_link", poster:"/portadas/Capriata.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1nxvppl-eIaf-_ixmO9mS2el-zv9SnfWj/view?usp=drive_link", poster:"/portadas/capriataCatering.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1S8WwegtBhS9-e5vRhiUfWVC3KvO8Y1r4/view?usp=drive_link", poster:"/portadas/capriataUbicacion.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1HVkGC8j3k9p5nBOUwkj_s3Z1w1ITP2Fe/view?usp=drive_link", poster:"/portadas/capriataEatBox.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1ghkOMn7T6jPi873SkgBYWAwqxVVDnsAF/view?usp=drive_link", poster:"/portadas/capriataCarro.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/194hxtbwzH6HC12UGnPkAthRf8GG7b2wm/view?usp=drive_link", poster:"/portadas/capriataCumpleaños.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1xI3w-iAw-7IaNrpj0nCLHkxPj1m1klJ8/view?usp=drive_link", poster:"/portadas/capriataDiciembre.png" },
  { title:"Colección de temporada",   category:"Tiendas online", desc:"Anuncio para la portada de una tienda de ropa.",             tools:"30 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1BUXWmKBdgpXVCeACID-75se67zpIEaPp/view?usp=drive_link", poster:"/portadas/Monza.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1KUuyCNIrWUplctqq42g152o5GAIbND2I/view?usp=drive_link", poster:"/portadas/Monza2.png" },
  { title:"Recorrido del local",      category:"Restaurantes",   desc:"Ambiente, platos y horarios para la web de un restaurante.", tools:"1 min · Premiere Pro",    src:"https://drive.google.com/file/d/1RnZ-dNkQAiqM3u6P08S41C9aUW-3qequ/view?usp=drive_link", poster:"/portadas/Hasta la coronita.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1HgI_G1VS7UwXElXZ-aFFosiAMb74ROvC/view?usp=drive_link", poster:"/portadas/Daimon.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1t-pES0-wLOtVx1p4qXKSnFbt9DW1spGx/view?usp=drive_link", poster:"/portadas/daimonMujer.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1U6I23fAMMu86VxU7iQTkQpGHQc_Nb42t/view?usp=drive_link", poster:"/portadas/daimonNavidad.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1X9_fkiOq-p-IOMiBtyrUF85nmwtFcdcg/view?usp=drive_link", poster:"/portadas/Irigoyen Aires.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1Yhn9bhj1vq4aulxbYjG5MdUEjkC6yDvX/view?usp=drive_link", poster:"/portadas/airesLimpieza.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1QiyONiML-2BHJ6eKCCJ8V9Zv6PgAKI0K/view?usp=drive_link", poster:"/portadas/mockupAsti.png" },
  { title:"Presentación personal",    category:"Portfolios",     desc:"Video de bienvenida para el sitio de un profesional.",       tools:"50 s · DaVinci Resolve",  src:"https://drive.google.com/file/d/1yLK1_6d_1ZTYXjA8r-u2EmKvNCKYQlMn/view?usp=drive_link", poster:"/portadas/dePilar.png" }
];

const TOOLS_EDIT = ["Adobe Premiere Pro","Vidma","CapCut","Shotcut","YouCut","Photoroom"];
const TOOLS_AI   = ["ChatGPT","Gemini","Copilot","Cursor"];

const TOOL_COLORS = {
  "Adobe Premiere Pro":"tool-blue",
  "Vidma":"tool-blue",
  "CapCut":"tool-green",
  "YouCut":"tool-green",
  "Shotcut":"tool-green",
  "Photoroom":"tool-violet"
};
document.getElementById("tools-edit").innerHTML = TOOLS_EDIT.map(t=>`<li class="${TOOL_COLORS[t] || ""}">${esc(t)}</li>`).join("");
document.getElementById("tools-ai").innerHTML = TOOLS_AI.map(t=>`<li>${esc(t)}</li>`).join("");

const ALL = "Todos";
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const modal = document.getElementById("modal");
const player = document.getElementById("player");
const cap = document.getElementById("cap");
const PLAY = '<svg viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0l10 6-10 6z"/></svg>';
let active = ALL;

function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

function renderFilters(){
  const cats = [ALL, ...new Set(VIDEOS.map(v=>v.category))];
  filtersEl.innerHTML = cats.map(c=>`<button type="button" aria-pressed="${c===active}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
}

function renderGrid(){
  const list = VIDEOS.map((v,i)=>({v,i})).filter(({v})=>active===ALL||v.category===active);
  if(!list.length){grid.innerHTML='<p class="none">Todavía no hay videos en esta categoría.</p>';return}
  grid.innerHTML = list.map(({v,i})=>{
    const has = !!v.src;
    const bg = v.poster ? `style="background-image:url('${esc(v.poster)}')"` : "";
    return `<article class="card">
      <button type="button" class="thumb ${has?"":"empty"}" ${bg} data-i="${i}" ${has?"":"disabled"} aria-label="${has?"Reproducir":"Video pendiente:"} ${esc(v.title)}">
        <span class="btn">${PLAY}</span>
        <span class="tag">${has?esc(v.category):"Video pendiente"}</span>
      </button>
      <div class="info">
        <h3>${esc(v.title)}</h3>
        <p>${esc(v.desc)}</p>
        ${v.tools?`<p class="meta">${esc(v.tools)}</p>`:""}
      </div>
    </article>`;
  }).join("");
}

/* Detecta si es YouTube, Vimeo o archivo propio */
function buildPlayer(src){
  let m = src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if(m) return `<iframe src="https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="Video"></iframe>`;
  m = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if(m) return `<iframe src="https://player.vimeo.com/video/${m[1]}?autoplay=1" allow="autoplay; picture-in-picture; fullscreen" allowfullscreen title="Video"></iframe>`;
  m = src.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]+)/);
  if(m) return `<iframe src="https://drive.google.com/file/d/${m[1]}/preview" allow="autoplay; fullscreen" allowfullscreen title="Video"></iframe>`;
  return `<video src="${esc(src)}" controls autoplay playsinline></video>`;
}

function openVideo(i){
  const v = VIDEOS[i]; if(!v||!v.src) return;
  player.innerHTML = buildPlayer(v.src);
  cap.textContent = v.title;
  modal.showModal();
}
function closeVideo(){ modal.close(); }
modal.addEventListener("close",()=>{player.innerHTML=""});
modal.addEventListener("click",e=>{if(e.target===modal) closeVideo()});
document.getElementById("close").addEventListener("click",closeVideo);

filtersEl.addEventListener("click",e=>{
  const b = e.target.closest("button[data-cat]"); if(!b) return;
  active = b.dataset.cat; renderFilters(); renderGrid();
});
grid.addEventListener("click",e=>{
  const b = e.target.closest("button[data-i]"); if(b) openVideo(+b.dataset.i);
});

/* Modo claro / oscuro */
const root = document.documentElement;
document.getElementById("theme").addEventListener("click",()=>{
  const dark = root.dataset.theme ? root.dataset.theme==="dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
});

const header = document.querySelector("header");
const menuToggle = document.getElementById("menu-toggle");
function closeMenu(){
  header.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded","false");
  menuToggle.setAttribute("aria-label","Abrir menú");
}
menuToggle.addEventListener("click",()=>{
  const isOpen = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded",String(isOpen));
  menuToggle.setAttribute("aria-label",isOpen?"Cerrar menú":"Abrir menú");
});
document.getElementById("site-nav").addEventListener("click",e=>{
  if(e.target.closest("a")) closeMenu();
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&header.classList.contains("menu-open")){
    closeMenu();
    menuToggle.focus();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
renderFilters(); renderGrid();
