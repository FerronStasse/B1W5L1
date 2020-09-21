var beantwoord = prompt("Is de kaas geel?");
var LowerBeantwoord = beantwoord.toLowerCase();

if(LowerBeantwoord == "ja"){
	var vraag2 = prompt("Zitten er gaten in?");
	var Lowervraag2 = vraag2.toLowerCase();
    }

	    if(Lowervraag2 == "ja"){
		    var vraag3 = prompt("Is de kaas belachelijk duur?");
		    var Lowervraag3 = vraag3.toLowerCase();
	            }


	        if(Lowervraag3 == "ja"){
	    	    alert("Emmenthaler")
	    	        document.write("Je had op, is de kaas geel?: " + Lowervraag3 + " gezegd," + "<br>");
	    	        document.write("Je had op, zitten er gaten in?: Ja gezegd," + "<br>");
	    	        document.write("Je had op, is de kaas belachelijk duur?: Ja gezegd," + "<br>" + "Uitkomst = Emmenthaler");
	            }
	        else if(Lowervraag3 == "nee"){
	        	alert("Leerdammer")
	                document.write("Je had op, is de kaas geel?: Ja gezegd," + "<br>");
	             	document.write("Je had op, zitten er gaten in?: Ja gezegd," + "<br>");
	    	        document.write("Je had op, is de kaas belachelijk duur?: Nee gezegd," + "<br>" + "Uitkomst = Leerdammer");
	            }

	else if(Lowervraag2 == "nee"){;
		var vraag4 = prompt("Is de kaas hard als steen?");
		var Lowervraag4 = vraag4.toLowerCase();
	            }


	        if(Lowervraag4 == "ja"){
	        	alert("Pamigiano reggiano")
	                document.write("Je had op, is de kaas geel?: Ja gezegd," + "<br>");
	    	        document.write("Je had op, zitten er gaten in?: Nee gezegd," + "<br>");
	    	        document.write("Je had op, is de kaas belachelijk duur?: Ja gezegd," + "<br>" + "Uitkomst = pamigiano reggiano");
	            }
	        else if(Lowervraag4 == "nee"){
	       	    alert("Goudese kaas")
	                document.write("Je had op, is de kaas geel?: Ja gezegd," + "<br>");
	    	        document.write("Je had op, zitten er gaten in?: Nee gezegd," + "<br>");
	    	        document.write("Je had op, is de kaas belachelijk duur?: Nee gezegd," + "<br>" + "Uitkomst = Goudese kaas");
	            }


    else if(LowerBeantwoord == "nee"){
	    var vraag5 = prompt("Heeft de kaas blauwe schimmels");
	    var Lowervraag5 = vraag5.toLowerCase();
                }


    if(Lowervraag5 == "ja"){
    	var vraag6 = prompt("Heeft de kaas een  korst?")
    	var Lowervraag6 = vraag6.toLowerCase();
                }


            if(Lowervraag6 == "ja"){
    	        alert("Bleu de Rochbaron")
    	          	document.write("Je had op, is de kaas geel?: Nee gezegd," + "<br>");
	    	        document.write("Je had op, zitten er gaten in?: Ja gezegd," + "<br>");
	               	document.write("Je had op, is de kaas belachelijk duur?: Jaa gezegd," + "<br>" + "Uitkomst = Bleu de Rochbaron");
                }
            else if(Lowervraag6 == "nee"){
    	        alert("Foume D'Ambert")
    		        document.write("Je had op, is de kaas geel?: nee gezegd," + "<br>");
	    	        document.write("Je had op, zitten er gaten in?: Ja gezegd," + "<br>");
	    	        document.write("Je had op, is de kaas belachelijk duur?: Nee gezegd," + "<br>" + "Uitkomst = Foume D'Ambert");
                }

    if(Lowervraag5 == "nee"){
    	var vraag7 = prompt("Heeft de kaas een korst?")
    	var Lowervraag7 = vraag7.toLowerCase();

                }
            if(Lowervraag7 == "ja"){
    	        alert("Camembert")
    		        document.write("Je had op, is de kaas geel?: Nee gezegd," + "<br>");
	    	        document.write("Je had op, zitten er gaten in?: Nee gezegd," + "<br>");
	    	        document.write("Je had op, is de kaas belachelijk duur?: Jaa gezegd," + "<br>" + "Uitkomst = Camembert");
                }
            else if(Lowervraag7 == "nee"){
    	        alert("Mozzarella")
    	           	document.write("Je had op, is de kaas geel?: Nee gezegd," + "<br>");
	    	        document.write("Je had op, zitten er gaten in?: Nee gezegd," + "<br>");
	    	        document.write("Je had op, is de kaas belachelijk duur?: Nee gezegd," + "<br>" + "Uitkomst = Mozzarella");
    }