/*
Cargar y procesar imágenes BMP de 24bits con C++
http://www.widget-101.com/
Autor: Christiam Mena
*/
#include <Windows.h>
#include <stdio.h>       
#include "BMP.h"


int main(int argc, char** argv)
{
	LARGE_INTEGER tinicio, tfin, frec;
	double mcseg;
	BMP bmp("nature.bmp");
	//bmp.printHeader();
	//bmp.blueChannel();

	QueryPerformanceFrequency(&frec);
	QueryPerformanceCounter(&tinicio);

	bmp.fromRGBtoGRAY();

	QueryPerformanceCounter(&tfin);

	mcseg = (double)(tfin.QuadPart - tinicio.QuadPart);
	mcseg = mcseg / frec.QuadPart;
	printf("%lf\n", mcseg * 1000);

	

	bmp.save("gris.bmp");

	getchar();  // Con esta línea evitaremos que se cierre la consola
	return 0;
}