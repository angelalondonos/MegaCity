# MegaCity
System Engineering Project 

Clonar Repositorio

	 -git clone https://github.com/angelm05/MegaCity.git

Subir el proyecto

Para añadir todas las fuentes al repositorio, aquí entrarán en juego las exclusiones, con el siguiente comando:
	
	-git add *

Para revisar lo añadido al repositorio podemos ejecutar el siguiente comando:
	
	-git status

Todo lo que devuelva el listado será lo que se suba con el proyecto.

Solo queda hacer un commit, asignar el repositorio remoto y hacer un push
	
	-git commit -m 'Subo la estructura del proyecto al repositorio de GitHub'
	-git remote add origin https://github.com/angelm05/MegaCity.git
	-git push -u origin master


Crea una nueva rama llamada "nombre" y cámbiate a ella usando
	
	-git checkout -b nombre

Vuelve a la rama principal
	
	-git checkout master

Borra la rama
	
	-git branch -d nombre

Una rama nueva no estará disponible para los demás a menos que subas (push) la rama a tu repositorio remoto
	
	-git push origin <branch>

Ver ramas
	
	-git branch
