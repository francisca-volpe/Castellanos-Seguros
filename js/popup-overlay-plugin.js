var _____WB$wombat$assign$function_____ = function(name) {
    return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name)) || globalThis[name];
};
if (!globalThis.__WB_pmw) {
    globalThis.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function() {
        function d() {
            document.querySelector("html").classList.contains("is-builder") || (document.querySelectorAll(".mbr-popup").forEach(function(a) {
                if ("undefined" !== typeof bootstrap)
                    if ("undefined" !== typeof bootstrap.Modal.getInstance)
                        a.addEventListener("show.bs.modal", function(a) {
                            var b = this;
                            setTimeout(function() {
                                document.querySelectorAll(".modal-backdrop").forEach(function(c) {
                                    c.style.backgroundColor = b.getAttribute("data-overlay-color");
                                    c.style.opacity = b.getAttribute("data-overlay-opacity")
                                })
                            }, 0)
                        });
                    else {
                        if ("undefined" !== typeof jQuery)
                            $(a).on("show.bs.modal", function(a) {
                                var b = this;
                                setTimeout(function() {
                                    document.querySelectorAll(".modal-backdrop").forEach(function(c) {
                                        c.style.backgroundColor = b.getAttribute("data-overlay-color");
                                        c.style.opacity = b.getAttribute("data-overlay-opacity")
                                    })
                                }, 0)
                            })
                    }
                else if ("undefined" !== typeof jQuery)
                    $(a).on("show.bs.modal", function(a) {
                        var b = this;
                        setTimeout(function() {
                            document.querySelectorAll(".modal-backdrop").forEach(function(a) {
                                a.style.backgroundColor = b.getAttribute("data-overlay-color");
                                a.style.opacity = b.getAttribute("data-overlay-opacity")
                            })
                        }, 0)
                    })
            }),
            document.querySelectorAll(".mbr-popup").forEach(function(a) {
                a.addEventListener("hide.bs.modal", function(a) {
                    document.querySelectorAll(".modal-backdrop").forEach(function(a) {
                        a.style.opacity = 0
                    })
                })
            }))
        }
        "complete" === document.readyState || "interactive" === document.readyState ? d() : document.addEventListener("DOMContentLoaded", function() {
            d()
        })
    }
    )();

}
