
   function disableselect(e) {
     return false
   }
   
   function reEnable() {
     return true
   }
   
   document.onselectstart = new Function ("return false")
   
   if (window.sidebar) {
     document.onmousedown = disableselect
     document.onclick = reEnable
   }


   document.onkeypress = function (event) {  
   event = (event || window.event);  
   if (event.keyCode == 123) {  
   return false;  
   }  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
            return false;
         }
   }  
   document.onmousedown = function (event) {  
   event = (event || window.event);  
   if (event.keyCode == 123) {  
   return false;  
   }  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
            return false;
         }
   }  
   document.onkeydown = function (event) {  
   event = (event || window.event);  
   if (event.keyCode == 123) {  
   return false;  
   }  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
            return false;
         }
   }  

document.addEventListener('contextmenu', event => event.preventDefault());