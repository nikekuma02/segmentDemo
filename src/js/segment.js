$(document)
    .ready(function () {
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
        analytics.load("rjsUUaoGM3P29yqPFCLAvG49E0HOVZb8");
        analytics.page();
        }}();

        $("form#userDetail").submit(function(){
            var userDetail = {
                "email": $(this).find("input[aria-label='email']").val() || "niketnavy02@gmail.com",
                "name": $(this).find("input[aria-label='name']").val() || "niket kumar"
            }

            var message =  $(this).find("input[placeholder='Your message']").val() || "Your message"
            
            analytics.identify(userDetail.email, userDetail);

            analytics.track("submit", {
                email: userDetail.email, 
                name: userDetail.name,
                message: message
              });
        })


        $("#newsletter").find("button").click(function(){
            var userDetail = {
                "email": $(this).find("input[placeholder='Enter email']").val() || "niketnavy02@gmail.com",
                "name": $(this).find("input[placeholder='Enter Name']").val() || "niket kumar"
            }

            analytics.track("click", {
                email: userDetail.email, 
                name: userDetail.name
              });
        })
    });