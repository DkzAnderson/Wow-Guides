// contendores
const containerRaidGuides = document.querySelector('#container__raid-guides');
const containerLevelingGuides = document.querySelector('#container__leveling-guides');
const containerArticles = document.querySelector('#container-articles');
const containerClassGuides = document.querySelector('#container__class-guides');
const links = {
    // links para los articulos principales
    ICC25H  :"https://www.youtube.com/watch?v=FcXGOdiNxqc&list=PLWyyFcu7HkEjGEH4Dl39QM4zn2MAS39cE&ab_channel=Viinnsselchami",
    ToC25H  :"https://www.youtube.com/watch?v=re1YDu4tUxA&ab_channel=Alegos",
    Rubi25H :"https://www.youtube.com/watch?v=FAfEc-obAqs&ab_channel=StatesAndImmortal",
    WarFury :"https://www.wowaura.com/v2/foros/index.php?topic=43969.0",
    HuntAim :"https://demoniclords.foroactivo.com/t32-guia-cazador-pve-3-3-5-por-xkylar",
    DkFrost :"https://www.wowaura.com/v2/foros/index.php?topic=33078.0",
    LvlHorde:"https://www.wowaura.com/v2/foros/index.php?topic=35682.0",
    LvlAli  :"https://www.wowaura.com/v2/foros/index.php?topic=33015.0"
}
//boton del header
const headerButton = document.querySelector('#header-button');
// 
const navList = document.querySelector('.navlist');


// boton del header ( solo para movil )
function menu(){
    if(navList.style.display == 'none'){
        containerArticles.style.display = 'none'
        navList.style.display = 'flex'
    } else{
        containerArticles.style.display = 'flex'
        navList.style.display = 'none'
    }
    
    
}

// funciones para mostrar/ocultar secciones de la barra de navegación
function showClassGuides(){
    if(containerClassGuides.style.display == 'none'){
        containerClassGuides.style.display = 'flex'
    } else {
        containerClassGuides.style.display = 'none'
    }

}

function showRaidGuides(){
    if(containerRaidGuides.style.display == 'none'){
        containerRaidGuides.style.display = 'flex'
    } else {
        containerRaidGuides.style.display = 'none'
    }
}

function showLevelingGuides(){
    if(containerLevelingGuides.style.display == 'none'){
        containerLevelingGuides.style.display = 'flex'
    } else {
        containerLevelingGuides.style.display = 'none'
    }
}

// funcion para los articulos principales

function principalArticles(item){
    let url

    switch (item) {
        case 'ICC25H':
            url = links.ICC25H
            break;

        case 'ToC25H':
            url = links.ToC25H
            break;
        case 'Rubi25H':
            url = links.Rubi25H
            break;
        case 'WarFury':
            url = links.WarFury
            break;
        case 'HuntAim':
            url = links.HuntAim
            break;
        case 'DkFrost':
            url = links.DkFrost
            break;
        case 'LvlAli':
            url = links.LvlAli
            break;
        case 'LvlHorde':
            url = links.LvlHorde
            break;
        default:
            break;
    }
    // abrimos una pestaña con la url del articulo seleccionado
    let abrirUrl = window.open(url,'_blank');
    abrirUrl.focus();
    
}



