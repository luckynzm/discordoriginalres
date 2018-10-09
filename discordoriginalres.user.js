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
    
if(url.includes("?")) {
                var newurl = url.substring(0, url.indexOf('?'));
                 location.replace(newurl);  
                }
 
