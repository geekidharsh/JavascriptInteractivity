/*Name this external file gallery.js*/
/*@author: Harshvardhan Pandey, Week 2 assignment*/
/*Completed as part of project work given by Collen Van Lent, School of Information, University of Michigan */
/*This file is avaialable here for educational purposes only */


function upDate(previewPic){
 
  document.getElementById('image').innerHTML = previewPic.alt;
 
  document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
  
  
  
	}

	function unDo(){
     
document.getElementById('image').innerHTML = "Hover over an image below to display here";
      document.getElementById('image').style.backgroundImage = "url('')";
    
    
    /* the function is going to change the image back to the original one and the text back to the one in div orginially */
		
	}
