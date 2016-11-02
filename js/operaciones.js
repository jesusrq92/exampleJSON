// EJEMPLO DE JSON

        var objetoJSON = 
        {
            "nombre": "Jorge",
            "edad": 23,
            "ocupacion": "estudiante"
        };

        document.getElementById('contenido').innerHTML = 
        	"Nombre: " + objetoJSON.nombre + "<br>" + 
        	"Edad: " +  objetoJSON.edad + "<br/>" + 
        	"Ocupacion: " + objetoJSON.ocupacion;


        var objetosJSON = {"Paises": [
        	{
        		"Pais": "Francia",
        		"Poblacion": "alta",
        		"Habitantes" : 32312
        	},
        	{
        		"Pais": "Inglaterra",
        		"Poblacion": "media",
        		"Habitantes" : 19812
        	},
        	{
        		"Pais": "Rusia",
        		"Poblacion": "baja",
        		"Habitantes" : 34812
        	}
        ]};

        document.getElementById('contenidoPaises').innerHTML = 
        	objetosJSON.Paises[0].Pais + " " + objetosJSON.Paises[0].Poblacion + " " + objetosJSON.Paises[0].Habitantes + "</br>" +
    		objetosJSON.Paises[1].Pais + " " + objetosJSON.Paises[1].Poblacion + " " + objetosJSON.Paises[1].Habitantes + "</br>" +
    		objetosJSON.Paises[2].Pais + " " + objetosJSON.Paises[2].Poblacion + " " + objetosJSON.Paises[2].Habitantes;
   
    
