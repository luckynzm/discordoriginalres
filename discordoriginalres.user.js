// ==UserScript==
// @name         Discordoriginalres
// @namespace    https://www.github.com/luckynzm/
// @version      0.1
// @description  fixes discord's stupid image downscaling
// @author       luckynzm
// @match        https://*.discordapp.net/*
// @run-at       document-start
// ==/UserScript==



    var url = document.URL;
    
if(url.includes("?width=446&height=335")) {
                var newurl = url.replace("?width=446&height=335",'');
                 location.replace(newurl);  
                }
 
