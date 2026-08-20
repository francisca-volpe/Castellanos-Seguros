var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");

(function(){function d(){document.querySelector("html").classList.contains("is-builder")||document.querySelectorAll(".mbr-popup[data-on-timer-delay]").forEach(function(b){var c=b.getAttribute("data-on-timer-delay"),a;"undefined"!==typeof bootstrap?("undefined"!==typeof bootstrap.Modal.getInstance&&(a=bootstrap.Modal.getInstance(b)),a||(a=new bootstrap.Modal(b),{keyboard:!1}),setTimeout(function(){a.show()},1E3*c)):"undefined"!==typeof jQuery&&setTimeout(function(){$(b).modal({keyboard:!1})},1E3*c);
setTimeout(function(){a.show()},1E3*c)})}"complete"===document.readyState||"interactive"===document.readyState?d():document.addEventListener("DOMContentLoaded",function(){d()})})();

}