const images = [
    "https://images2.minutemediacdn.com/image/upload/c_fill,w_360,ar_1:1,f_auto,q_auto,g_auto/shape/cover/sport/jcole-cced85b96e943328a5d43d2753c1a914.jpg",
    "https://www.rollingstone.com/wp-content/uploads/2021/05/J.-Cole_Lead-Promo-Image.jpg",
    "https://miscellanynews.org/wp-content/uploads/2021/05/ganesh-jcole.jpg",
    "https://i.ytimg.com/vi/WILNIXZr2oc/mqdefault.jpg",
    "https://assets.website-files.com/609455ae20bc26057e9ff36f/60946682f3d5d081008305dc_JCOLE-4.jpg",
    "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/c96kuyrgfiyunvhdhnc3/ibrahim-ib-hamad-previews-j-cole-song?fimg-ssr-default",
    "https://ambrosiaforheads.com/wp-content/uploads/2019/01/Jcole-1-19.jpg"
];

// coleify = document.getElementById("coleBtn");

// coleify.addEventListener("click", () => {
//     chrome.tabs.query(
//         { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
//         function(tabs) {
//             const { id: tabId } = tabs[0].url;
//             const code = 'document.querySelector("img")';

//             chrome.tabs.executeScript(tabId, { code }, coleIt(result));
//         }
//     );
// });

// function coleIt(web_images) {
//     for (let i = 0; i < web_images.length; i++){
//         const index = Math.floor(Math.random() * images.length);
//         web_images[i].src = images[index];
//     }
// };

const replaces = document.getElementsByTagName('img');

for (let i = 0; i < replaces.length; i++) {
    const index = Math.floor(Math.random() * images.length);
    replaces[i].src = images[index];
}
