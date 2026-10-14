const express = require('express');
const app = express();
const PORT = Math.floor(Math.random() * (9999 - 3000 + 1)) + 3000;
const path = require('path');

app.use(express.static(path.join(__dirname)));
// Untuk parsing query string (biar bisa baca ?file=...)
app.use(express.urlencoded({ extended: true }));

// ====== VARIABEL PENTING ======
// Simpan nama file yang dipilih untuk halaman depan (contoh: "1.html")
let homePageFile = null;  // null artinya belum disetel

// Daftar file bucin yang diizinkan dijadikan tampilan awal
const allowedBucinFiles = ['1.html', '2.html', '3.html', '4.html'];

// ====== ROUTE HALAMAN DEPAN (/) ======
app.get('/', (req, res) => {
    if (homePageFile) {
        // Kirim file bucin yang sudah dipilih
        res.sendFile(path.join(__dirname, homePageFile));
    } else {
        // Halaman default jika belum ada yang disetel
        res.send(`
<!DOCTYPE html><!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]--><!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]--><!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]--><!--[if gt IE 8]><!--><html class="no-js" lang="en-US"><!--<![endif]--><head>



<title>502: Bad Mood :(</title>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="robots" content="noindex, nofollow">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>.container{width:100%}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.border-gray-300{--border-opacity:1;border-color:#ebebeb;border-color:rgba(235,235,235,var(--border-opacity))}.rounded{border-radius:.25rem}.border-solid{border-style:solid}.border-0{border-width:0}.border{border-width:1px}.border-t{border-top-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.table{display:table}.hidden{display:none}.float-left{float:left}.clearfix:after{content:"";display:table;clear:both}.font-mono{font-family:monaco,courier,monospace}.font-light{font-weight:300}.font-normal{font-weight:400}.font-semibold{font-weight:600}.h-12{height:3rem}.h-20{height:5rem}.text-13{font-size:13px}.text-15{font-size:15px}.text-60{font-size:60px}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.leading-tight{line-height:1.25}.leading-normal{line-height:1.5}.leading-relaxed{line-height:1.625}.leading-1\.3{line-height:1.3}.my-8{margin-top:2rem;margin-bottom:2rem}.mx-auto{margin-left:auto;margin-right:auto}.mr-2{margin-right:.5rem}.mb-2{margin-bottom:.5rem}.mt-3{margin-top:.75rem}.mb-4{margin-bottom:1rem}.ml-4{margin-left:1rem}.mt-6{margin-top:1.5rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.mb-10{margin-bottom:2.5rem}.ml-10{margin-left:2.5rem}.mb-15{margin-bottom:3.75rem}.-ml-6{margin-left:-1.5rem}.overflow-hidden{overflow:hidden}.p-0{padding:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-15{padding-top:3.75rem;padding-bottom:3.75rem}.pr-6{padding-right:1.5rem}.pt-10{padding-top:2.5rem}.absolute{position:absolute}.relative{position:relative}.left-1\/2{left:50%}.-bottom-4{bottom:-1rem}.resize{resize:both}.text-center{text-align:center}.text-black-dark{--text-opacity:1;color:#404040;color:rgba(64,64,64,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#999;color:rgba(153,153,153,var(--text-opacity))}.text-red-error{--text-opacity:1;color:#bd2426;color:rgba(189,36,38,var(--text-opacity))}.text-green-success{--text-opacity:1;color:#9bca3e;color:rgba(155,202,62,var(--text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.w-12{width:3rem}.w-240{width:60rem}.w-1\/2{width:50%}.w-1\/3{width:33.333333%}.w-full{width:100%}.transition{-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-transform}body,html{--text-opacity:1;color:#404040;color:rgba(64,64,64,var(--text-opacity));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:16px}*,body,html{margin:0;padding:0}*{box-sizing:border-box}a{--text-opacity:1;color:#2f7bbf;color:rgba(47,123,191,var(--text-opacity));text-decoration:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}a:hover{--text-opacity:1;color:#f68b1f;color:rgba(246,139,31,var(--text-opacity))}img{display:block;width:100%;height:auto}#what-happened-section p{font-size:15px;line-height:1.5}strong{font-weight:600}.bg-gradient-gray{background-image:-webkit-linear-gradient(top,#dedede,#ebebeb 3%,#ebebeb 97%,#dedede)}.cf-error-source:after{position:absolute;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));width:2.5rem;height:2.5rem;--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-ms-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));--transform-rotate:45deg;content:"";bottom:-1.75rem;left:50%;margin-left:-1.25rem;box-shadow:0 0 4px 4px #dedede}@media screen and (max-width:720px){.cf-error-source:after{display:none}}.cf-icon-browser{background-image:url(data:image/svg+xml;utf8,%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20100%2080.7362%22%3E%3Cpath%20d%3D%22M89.8358.1636H10.1642C4.6398.1636.1614%2C4.6421.1614%2C10.1664v60.4033c0%2C5.5244%2C4.4784%2C10.0028%2C10.0028%2C10.0028h79.6716c5.5244%2C0%2C10.0027-4.4784%2C10.0027-10.0028V10.1664c0-5.5244-4.4784-10.0028-10.0027-10.0028ZM22.8323%2C9.6103c1.9618%2C0%2C3.5522%2C1.5903%2C3.5522%2C3.5521s-1.5904%2C3.5522-3.5522%2C3.5522-3.5521-1.5904-3.5521-3.5522%2C1.5903-3.5521%2C3.5521-3.5521ZM12.8936%2C9.6103c1.9618%2C0%2C3.5522%2C1.5903%2C3.5522%2C3.5521s-1.5904%2C3.5522-3.5522%2C3.5522-3.5521-1.5904-3.5521-3.5522%2C1.5903-3.5521%2C3.5521-3.5521ZM89.8293%2C70.137H9.7312V24.1983h80.0981v45.9387ZM89.8293%2C16.1619H29.8524v-5.999h59.977v5.999Z%22%20style%3D%22fill%3A%20%23999%3B%22/%3E%3C/svg%3E)}.cf-icon-cloud{background-image:url(data:image/svg+xml;utf8,%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20152%2078.9141%22%3E%3Cpath%20d%3D%22M132.2996%2C77.9927v-.0261c10.5477-.2357%2C19.0305-8.8754%2C19.0305-19.52%2C0-10.7928-8.7161-19.5422-19.4678-19.5422-2.9027%2C0-5.6471.6553-8.1216%2C1.7987C123.3261%2C18.6624%2C105.3419.9198%2C83.202.9198c-17.8255%2C0-32.9539%2C11.5047-38.3939%2C27.4899-3.0292-2.2755-6.7818-3.6403-10.8622-3.6403-10.0098%2C0-18.1243%2C8.1145-18.1243%2C18.1243%2C0%2C1.7331.258%2C3.4033.7122%2C4.9905-.2899-.0168-.5769-.0442-.871-.0442-8.2805%2C0-14.993%2C6.7503-14.993%2C15.0772%2C0%2C8.2795%2C6.6381%2C14.994%2C14.8536%2C15.0701v.0054h.1069c.0109%2C0%2C.0215.0016.0325.0016s.0215-.0016.0325-.0016%22%20style%3D%22fill%3A%20%23999%3B%22/%3E%3C/svg%3E)}.cf-icon-server{background-image:url(data:image/svg+xml;utf8,%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2095%2075%22%3E%3Cpath%20d%3D%22M94.0103%2C45.0775l-12.9885-38.4986c-1.2828-3.8024-4.8488-6.3624-8.8618-6.3619l-49.91.0065c-3.9995.0005-7.556%2C2.5446-8.8483%2C6.3295L1.0128%2C42.8363c-.3315.971-.501%2C1.9899-.5016%2C3.0159l-.0121%2C19.5737c-.0032%2C5.1667%2C4.1844%2C9.3569%2C9.3513%2C9.3569h75.2994c5.1646%2C0%2C9.3512-4.1866%2C9.3512-9.3512v-17.3649c0-1.0165-.1657-2.0262-.4907-2.9893ZM86.7988%2C65.3097c0%2C1.2909-1.0465%2C2.3374-2.3374%2C2.3374H9.9767c-1.2909%2C0-2.3374-1.0465-2.3374-2.3374v-18.1288c0-1.2909%2C1.0465-2.3374%2C2.3374-2.3374h74.4847c1.2909%2C0%2C2.3374%2C1.0465%2C2.3374%2C2.3374v18.1288Z%22%20style%3D%22fill%3A%20%23999%3B%22/%3E%3Ccircle%20cx%3D%2274.6349%22%20cy%3D%2256.1889%22%20r%3D%224.7318%22%20style%3D%22fill%3A%20%23999%3B%22/%3E%3Ccircle%20cx%3D%2259.1472%22%20cy%3D%2256.1889%22%20r%3D%224.7318%22%20style%3D%22fill%3A%20%23999%3B%22/%3E%3C/svg%3E)}.cf-icon-ok{background-image:url(data:image/svg+xml;utf8,%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%2224%22%20r%3D%2223.4815%22%20style%3D%22fill%3A%20%239bca3e%3B%22/%3E%3Cpolyline%20points%3D%2217.453%2024.9841%2021.7183%2030.4504%2030.2076%2016.8537%22%20style%3D%22fill%3A%20none%3B%20stroke%3A%20%23fff%3B%20stroke-linecap%3A%20round%3B%20stroke-linejoin%3A%20round%3B%20stroke-width%3A%204px%3B%22/%3E%3C/svg%3E)}.cf-icon-error{background-image:url(data:image/svg+xml;utf8,%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2047.9145%2047.9641%22%3E%3Ccircle%20cx%3D%2223.9572%22%20cy%3D%2223.982%22%20r%3D%2223.4815%22%20style%3D%22fill%3A%20%23bd2426%3B%22/%3E%3Cline%20x1%3D%2219.0487%22%20y1%3D%2219.0768%22%20x2%3D%2227.8154%22%20y2%3D%2228.8853%22%20style%3D%22fill%3A%20none%3B%20stroke%3A%20%23fff%3B%20stroke-linecap%3A%20round%3B%20stroke-linejoin%3A%20round%3B%20stroke-width%3A%203px%3B%22/%3E%3Cline%20x1%3D%2227.8154%22%20y1%3D%2219.0768%22%20x2%3D%2219.0487%22%20y2%3D%2228.8853%22%20style%3D%22fill%3A%20none%3B%20stroke%3A%20%23fff%3B%20stroke-linecap%3A%20round%3B%20stroke-linejoin%3A%20round%3B%20stroke-width%3A%203px%3B%22/%3E%3C/svg%3E)}#cf-wrapper .feedback-hidden{display:none}#cf-wrapper .feedback-success{min-height:33px;line-height:33px}#cf-wrapper .cf-button{color:#0051c3;font-size:13px;border-color:#0045a6;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:background-color,border-color,color;transition-property:background-color,border-color,color}#cf-wrapper .cf-button:hover{color:#fff;background-color:#003681}.cf-error-footer .hidden{display:none}.cf-error-footer .cf-footer-ip-reveal-btn{-webkit-appearance:button;-moz-appearance:button;appearance:button;text-decoration:none;background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;color:#0051c3;-webkit-transition:color .15s ease;transition:color .15s ease}.cf-error-footer .cf-footer-ip-reveal-btn:hover{color:#ee730a}.code-label{background-color:#d9d9d9;color:#313131;font-weight:500;border-radius:1.25rem;font-size:.75rem;line-height:4.5rem;padding:.25rem .5rem;height:4.5rem;white-space:nowrap;vertical-align:middle}@media (max-width:639px){.sm\:block{display:block}.sm\:hidden{display:none}.sm\:mb-1{margin-bottom:.25rem}.sm\:mb-2{margin-bottom:.5rem}.sm\:py-4{padding-top:1rem;padding-bottom:1rem}.sm\:px-8{padding-left:2rem;padding-right:2rem}.sm\:text-left{text-align:left}}@media (max-width:720px){.md\:border-gray-400{--border-opacity:1;border-color:#dedede;border-color:rgba(222,222,222,var(--border-opacity))}.md\:border-solid{border-style:solid}.md\:border-0{border-width:0}.md\:border-b{border-bottom-width:1px}.md\:block{display:block}.md\:inline-block{display:inline-block}.md\:hidden{display:none}.md\:float-none{float:none}.md\:text-3xl{font-size:1.875rem}.md\:m-0{margin:0}.md\:mt-0{margin-top:0}.md\:mb-2{margin-bottom:.5rem}.md\:p-0{padding:0}.md\:py-8{padding-top:2rem;padding-bottom:2rem}.md\:px-8{padding-left:2rem;padding-right:2rem}.md\:pr-0{padding-right:0}.md\:pb-10{padding-bottom:2.5rem}.md\:top-0{top:0}.md\:right-0{right:0}.md\:left-auto{left:auto}.md\:text-left{text-align:left}.md\:w-full{width:100%}}@media (max-width:1023px){.lg\:text-sm{font-size:.875rem}.lg\:text-2xl{font-size:1.5rem}.lg\:text-4xl{font-size:2.25rem}.lg\:leading-relaxed{line-height:1.625}.lg\:px-8{padding-left:2rem;padding-right:2rem}.lg\:pt-6{padding-top:1.5rem}.lg\:w-full{width:100%}}
</style>
</head>
<body>
<div id="cf-wrapper">
    <div id="cf-error-details" class="p-0">
        <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
            <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
                <span class="inline-block">Bad Mood :(</span>
                <span class="code-label">Error code 502</span>
            </h1>
            
            
            <div>
                Visit <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
            </div>
            
            <div class="mt-3">1945-8-17 22:22:22 UTC</div>
        </header>
        <div class="my-8 bg-gradient-gray">
          <div class="w-240 lg:w-full mx-auto">
                <div class="clearfix md:px-8">
                
                    <div id="cf-browser-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
                        <div class="relative mb-10 md:m-0">
                            <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
                            <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
                        </div>
                        <span class="md:block w-full truncate">My</span>
                        <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">Mood</h3>
                        <span class="leading-1.3 text-2xl" style="color: #bd2426">Error</span>
                    </div>
                
                    <div id="cf-cloudflare-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
                        <div class="relative mb-10 md:m-0">
                            <span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
                            <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
                        </div>
                        <span class="md:block w-full truncate">Someone new</span>
                        <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3" style="color: #2f7bbf;">Someone</h3>
                        <span class="leading-1.3 text-2xl" style="color: #9bca3e">Working</span>
                    </div>
                
                    <div id="cf-host-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
                        <div class="relative mb-10 md:m-0">
                            <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
                             <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
                        </div>
                        <span class="md:block w-full truncate">My</span>
                        <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">Heart</h3>
                        <span class="leading-1.3 text-2xl" style="color: #bd2426">Error</span>
                    </div>
                
                </div>
            </div>
        </div>

        <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
            <div class="clearfix">
                <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
                    <p>The winner takes it All.</p>
                </div>
                <div class="w-1/2 md:w-full float-left leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
                    <p>Please I need you</p>
                </div>
            </div>
        </div>

        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
            <p class="text-13">
                <span class="cf-footer-item sm:block sm:mb-1">Ray ID: <strong class="font-semibold">954e985c2d34488e</strong></span>
                <span class="cf-footer-separator sm:hidden">"</span>
                <br></br>
                <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
                    Click To Open API:
                    <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
                    <span class="hidden" id="cf-footer-ip">https://kaizen-api.vercel.app/kaizen/home</span>
                    <span class="cf-footer-separator sm:hidden">"</span>
                    <br></br>
                </span>
                
                <span class="cf-footer-item sm:block sm:mb-1"><span>Performance & security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/" id="brand_link" target="_blank">Cloudflare</a></span>

                
                
            </p>
        </div><!-- /.error-footer -->
    </div>
</div>
<script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9accb5e78e12f5d7',t:'MTc2NTUzNzE0OA=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script><script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" data-cf-beacon="{" version":"2024.11.0","token":"b6e02fc0e81a4ea890fc7f86311c307d","r":1,"server_timing":{"name":{"cfcachestatus":true,"cfedge":true,"cfextpri":true,"cfl4":true,"cforigin":true,"cfspeedbrain":true},"location_startswith":null}}"="" crossorigin="anonymous"></script>
<script> 
setTimeout(function() {
    window.location.href = "/1";
}, 7000);
</script>
</body></html>`);
    }
});

// ====== ENDPOINT UNTUK MENGUBAH TAMPILAN AWAL ======
app.get('/set-homepage', (req, res) => {
    const file = req.query.file;  // misal: "1.html"
    if (!file || !allowedBucinFiles.includes(file)) {
        return res.status(400).send('File tidak diizinkan. Hanya template bucin yang bisa jadi halaman depan.');
    }
    homePageFile = file;
    console.log(`✅ Halaman depan diubah ke: ${file}`);
    res.send('OK');
});

// ====== ADMIN PANEL (tidak berubah banyak, hanya ditambah fitur tombol "Ubah Tampilan Awal") ======
app.get('/admin-panel', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Buka URL — YogaxD</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            :root {
                --bg: #FDF7E4;
                --bg-secondary: #FFFFFF;
                --text-primary: #1A1A1A;
                --text-secondary: #555555;
                --border: #1A1A1A;
                --accent: #FF6B35;
                --accent-secondary: #FFD23F;
                --accent-green: #2DD881;
                --accent-blue: #4ECDC4;
                --accent-purple: #9B5DE5;
                --accent-pink: #F15BB5;
                --shadow: 4px 4px 0px #1A1A1A;
                --shadow-lg: 6px 6px 0px #1A1A1A;
                --shadow-hover: 8px 8px 0px #1A1A1A;
                --radius: 12px;
            }
            body {
                font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
                background: var(--bg);
                color: var(--text-primary);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 24px;
                line-height: 1.6;
                background-image:
                    radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 210, 63, 0.15) 0%, transparent 50%);
            }
            .container { max-width: 700px; width: 100%; }
            .back-link {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: var(--text-primary);
                text-decoration: none;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 20px;
                padding: 10px 16px;
                background: var(--accent-secondary);
                border: 3px solid var(--border);
                border-radius: var(--radius);
                box-shadow: var(--shadow);
                transition: all 0.15s ease;
            }
            .back-link:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-hover); }
            .card {
                background: var(--bg-secondary);
                border: 4px solid var(--border);
                border-radius: 20px;
                padding: 32px;
                box-shadow: var(--shadow-lg);
            }
            .header {
                text-align: center;
                margin-bottom: 28px;
                padding-bottom: 20px;
                border-bottom: 4px dashed var(--border);
            }
            .header-badge {
                display: inline-block;
                background: var(--accent);
                color: white;
                padding: 6px 16px;
                border-radius: 50px;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 12px;
                border: 3px solid var(--border);
                box-shadow: 3px 3px 0px var(--border);
            }
            .header h1 {
                font-size: 26px;
                font-weight: 700;
                margin-bottom: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            .header p { color: var(--text-secondary); font-size: 14px; font-weight: 500; }
            .form-group { margin-bottom: 20px; }
            .form-label {
                display: block;
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 8px;
            }
            .form-select {
                width: 100%;
                padding: 14px 18px;
                background: var(--bg);
                border: 3px solid var(--border);
                border-radius: var(--radius);
                color: var(--text-primary);
                font-size: 14px;
                font-family: inherit;
                font-weight: 500;
                cursor: pointer;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 16px center;
            }
            .form-select:focus {
                outline: none;
                box-shadow: var(--shadow);
                transform: translate(-2px, -2px);
            }
            .total-box {
                background: linear-gradient(135deg, var(--accent-secondary) 0%, #FFE066 100%);
                border: 3px solid var(--border);
                border-radius: var(--radius);
                padding: 16px;
                margin-bottom: 20px;
            }
            .total-display {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 12px 16px;
                background: var(--bg-secondary);
                border: 3px solid var(--border);
                border-radius: 8px;
                word-break: break-all;
            }
            .total-display span {
                font-size: 14px;
                font-weight: 600;
                color: var(--text-primary);
            }
            .btn {
                width: 100%;
                padding: 18px 26px;
                background: var(--accent);
                border: 4px solid var(--border);
                border-radius: var(--radius);
                color: white;
                font-size: 16px;
                font-weight: 700;
                font-family: inherit;
                cursor: pointer;
                transition: all 0.15s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                text-decoration: none;
                box-shadow: var(--shadow-lg);
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 12px;
            }
            .btn:last-child { margin-bottom: 0; }
            .btn:hover {
                transform: translate(-3px, -3px);
                box-shadow: 10px 10px 0px var(--border);
            }
            .btn:active {
                transform: translate(3px, 3px);
                box-shadow: none;
            }
            .btn:disabled {
                opacity: 0.4;
                cursor: not-allowed;
                transform: none;
                box-shadow: var(--shadow);
            }
            .hidden { display: none !important; }
            .footer-decoration {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-top: 20px;
            }
            .footer-decoration span {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 2px solid var(--border);
            }
            .footer-decoration span:nth-child(1) { background: var(--accent); }
            .footer-decoration span:nth-child(2) { background: var(--accent-secondary); }
            .footer-decoration span:nth-child(3) { background: var(--accent-green); }
            .footer-decoration span:nth-child(4) { background: var(--accent-blue); }
            .footer-decoration span:nth-child(5) { background: var(--accent-pink); }
            @media (max-width: 600px) {
                body { padding: 16px; }
                .card { padding: 20px; }
                .header h1 { font-size: 22px; }
                .btn { padding: 14px 20px; font-size: 14px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <a href="/" class="back-link">← Kembali ke Home</a>

            <div class="card">
                <div class="header">
                    <div class="header-badge">Buka URL</div>
                    <h1>🔗 Pilih Tujuan</h1>
                    <p>Pilih kategori dan opsi di bawah, lalu klik tombol untuk membuka URL</p>
                </div>

                <div class="form-group">
                    <label class="form-label">📂 Kategori</label>
                    <select id="categorySelect" class="form-select">
                        <option value="">-- Pilih Kategori --</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">🎯 Opsi</label>
                    <select id="optionSelect" class="form-select" disabled>
                        <option value="">-- Pilih Kategori dulu --</option>
                    </select>
                </div>

                <div class="total-box" id="totalBox" style="display: none;">
                    <label class="form-label">🔗 Linknya</label>
                    <div class="total-display">
                        <span id="targetUrlLink"></span>
                    </div>
                </div>
                
                <button class="btn" id="openChangeBtn" disabled> Ubah Tampilan Awal</button>
                <button class="btn" id="openCopyBtn" disabled>📋 Salin Link</button>
                <button class="btn" id="openUrlBtn" disabled>🔗 Buka URL</button>

                <div class="footer-decoration">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
            </div>
        </div>

        <script>
            const categories = {
                "sosmed": {
                    name: "Html Bucin",
                    icon: "📱",
                    services: {
                        "tp1": { name: "Template 1 — Halo Sayang", url: "/1" },
                        "tp2": { name: "Template 2 — Tema Cinta", url: "/2" },
                        "tp3": { name: "Template 3 — Paksa Sayang", url: "/3" },
                        "tp4": { name: "Template 4 — Cinta Banget", url: "/4" }
                    }
                },
                "mesin-cari": {
                    name: "Mesin Pencari",
                    icon: "🔍",
                    services: {
                        "tiktokstalk": { name: "Tiktok Stalk — Terbaru", url: "/tikstalk" },
                        "bing": { name: "Bing", url: "https://bing.com" }
                    }
                },
                "belajar": {
                    name: "Platform Belajar",
                    icon: "📚",
                    services: {
                        "yt": { name: "YouTube", url: "https://youtube.com" },
                        "w3s": { name: "W3Schools", url: "https://w3schools.com" }
                    }
                }
            };

            let selectedCategoryKey = null;
            let selectedServiceKey = null;
            let selectedURL = null;

            const categorySelect = document.getElementById('categorySelect');
            const optionSelect = document.getElementById('optionSelect');
            const totalBox = document.getElementById('totalBox');
            const targetUrlLink = document.getElementById('targetUrlLink');
            const openUrlBtn = document.getElementById('openUrlBtn');
            const openCopyBtn = document.getElementById('openCopyBtn');
            const openChangeBtn = document.getElementById('openChangeBtn');

            function populateCategories() {
                categorySelect.innerHTML = '<option value="">-- Pilih Kategori --</option>';
                for (const [key, cat] of Object.entries(categories)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = cat.icon + ' ' + cat.name;
                    categorySelect.appendChild(option);
                }
            }

            function populateOptions(categoryKey) {
                optionSelect.innerHTML = '<option value="">-- Pilih Opsi --</option>';
                const category = categories[categoryKey];
                if (!category) return;
                for (const [key, svc] of Object.entries(category.services)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = svc.name;
                    optionSelect.appendChild(option);
                }
                optionSelect.disabled = false;
            }

            function resetSelection() {
                optionSelect.innerHTML = '<option value="">-- Pilih Kategori dulu --</option>';
                optionSelect.disabled = true;
                totalBox.style.display = 'none';
                targetUrlLink.textContent = '';
                openUrlBtn.disabled = true;
                openCopyBtn.disabled = true;
                openChangeBtn.disabled = true;   // <-- ikut dimatikan
                selectedServiceKey = null;
                selectedURL = null;
            }

            function updateURLDisplay() {
                if (selectedCategoryKey && selectedServiceKey) {
                    const service = categories[selectedCategoryKey]?.services[selectedServiceKey];
                    if (service) {
                        selectedURL = service.url;
                        targetUrlLink.textContent = service.url;
                        totalBox.style.display = 'block';
                        openUrlBtn.disabled = false;
                        openCopyBtn.disabled = false;

                        // Hanya aktifkan tombol Ubah Tampilan Awal jika kategori = sosmed (Html Bucin)
                        if (selectedCategoryKey === 'sosmed') {
                            openChangeBtn.disabled = false;
                        } else {
                            openChangeBtn.disabled = true;
                        }
                    } else {
                        resetSelection();
                    }
                } else {
                    totalBox.style.display = 'none';
                    openUrlBtn.disabled = true;
                    openCopyBtn.disabled = true;
                    openChangeBtn.disabled = true;
                }
            }

            categorySelect.addEventListener('change', () => {
                const catKey = categorySelect.value;
                if (catKey) {
                    selectedCategoryKey = catKey;
                    populateOptions(catKey);
                    selectedServiceKey = null;
                    updateURLDisplay();
                    optionSelect.value = '';
                } else {
                    selectedCategoryKey = null;
                    resetSelection();
                }
            });

            optionSelect.addEventListener('change', () => {
                const svcKey = optionSelect.value;
                if (svcKey && selectedCategoryKey) {
                    selectedServiceKey = svcKey;
                    updateURLDisplay();
                } else {
                    selectedServiceKey = null;
                    updateURLDisplay();
                }
            });

            // Tombol Buka URL (tetap)
            openUrlBtn.addEventListener('click', () => {
                if (selectedURL) {
                    window.open(selectedURL, '_blank');
                }
            });

            // Tombol Salin Link (tetap)
            openCopyBtn.addEventListener('click', async () => {
                if (!selectedURL) return;
                try {
                    await navigator.clipboard.writeText(selectedURL);
                    const originalText = openCopyBtn.textContent;
                    openCopyBtn.textContent = '✅ Tersalin!';
                    openCopyBtn.disabled = true;
                    setTimeout(() => {
                        openCopyBtn.textContent = originalText;
                        openCopyBtn.disabled = false;
                    }, 2000);
                } catch (err) {
                    alert('Gagal menyalin link');
                }
            });

            // ====== TOMBOL UBAH TAMPILAN AWAL (FITUR BARU) ======
            openChangeBtn.addEventListener('click', async () => {
                if (!selectedURL) return;
                // Ambil nama file dari URL, misal "/1" -> "1.html"
                const file = selectedURL.replace('/', '') + '.html';
                try {
                    const response = await fetch('/set-homepage?file=' + file);
                    if (response.ok) {
                        alert('✅ Tampilan awal berhasil diubah ke ' + file);
                        // Opsional: langsung pindah ke halaman depan
                        window.location.href = '/';
                    } else {
                        alert('❌ Gagal mengubah tampilan awal. Hanya template bucin yang diizinkan.');
                    }
                } catch (err) {
                    alert('❌ Terjadi kesalahan.');
                }
            });

            populateCategories();
        </script>
    </body>
    </html>`);
});

// ====== ROUTE UNTUK TEMPLATE BUCIN ======
app.get("/1", (req, res) => {
    res.sendFile(path.join(__dirname, '1.html'));
});
app.get("/2", (req, res) => {
    res.sendFile(path.join(__dirname, '2.html'));
});
app.get("/3", (req, res) => {
    res.sendFile(path.join(__dirname, '3.html'));
});
app.get("/4", (req, res) => {
    res.sendFile(path.join(__dirname, '4.html'));
});
app.get("/tikstalk", (req, res) => {
    res.sendFile(path.join(__dirname, 'tikstalk.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
