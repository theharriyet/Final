//左欄工具列
const menuItems = document.querySelectorAll('.menu-item');

//右欄訊息
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message  = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//主題
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//-------------工具列點擊項目左側標籤樣式-----------------//
//移除active效果
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

//當點擊側邊欄menu-item項目的時候，會有標籤樣式顯示出來，表示已經選到項目。
menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        //希望每次點擊的時候都可以叫出remove active的功能
        changeActiveItem();
        item.classList.add('active');
        //叫出通知跳出畫面
        //當id不等於notification的時候，就不會有通知跳出的畫面出現。
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        } else{
            //當id等於notification的時候，點擊通知就會出現通知跳出畫面。
            document.querySelector('.notification-popup').
            style.display = 'block';
            //當點擊通知的時候，未讀通知的紅色標示會消失。
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

//--------------------右欄訊息列------------------//
messagesNotification.addEventListener('click', () => {
    //點擊左邊工具列"訊息"的時候，右邊訊息欄會增加陰影變得較為突出。
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    //右邊訊息欄的陰影會在1.5秒後消失（用毫秒計算）。
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 1500);
    //點擊左邊工具列"訊息"的時候，未讀通知的紅色標示會消失。
    messagesNotification.querySelector('.notification-count').style.display = 'none';
})

//--------------------主題色變換--------------------//
const openThemeModal = () => {
    //把主題更換介面叫出來
    themeModal.style.display = 'grid';
}

//把主題更換介面收掉
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);


//---------------------字體大小調整-------------------//
//移除字體大小active效果
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        
        //點選拉桿的時候會有顏色顯示
        size.classList.toggle('active');
        //如果classList裡面含有不同的字體大小class，會對應到不同的字體大小
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.5rem')
            root.style.setProperty('--sticky-top-right', '5.5rem')
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.5rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }

        //改變html裡面的root element的文字大小
        document.querySelector('html').style.fontSize = fontSize;
    })

})


//----------------------主題改變顏色-------------//
//消除調整顏色按鈕的active白邊
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//顏色變化調整調整
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        //消除調整顏色按鈕的active白邊
        changeActiveColorClass();
        //如果classList裡面含有
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        //按鈕按下去會有邊框標示
        color.classList.add('active'); 
        root.style.setProperty('--primary-color-hue', primaryHue);

    })
})

//-----------------------改變介面背景顏色------------------//
let lightColor;
let whiteColor;
let darkColor;

//改變介面顏色
const changeBG = () => {
    root.style.setProperty('--light-color', lightColor)
    root.style.setProperty('--dark-color', darkColor)
    root.style.setProperty('--white-color', whiteColor)
}

Bg1.addEventListener('click', () => {
    //增加active class
    Bg1.classList.add('active');
    //移除除了bg1之外的active標示
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColor = '95%';
    whiteColor = '20%';
    lightColor = '15%';

    //增加active class
    Bg2.classList.add('active');
    //移除除了bg2之外的active標示
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColor = '95%';
    whiteColor = '10%';
    lightColor = '0%';

    //增加active class
    Bg3.classList.add('active');
    //移除除了bg3之外的active標示
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})
