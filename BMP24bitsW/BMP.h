/*
Cargar y procesar imágenes BMP de 24bits con C++
http://www.widget-101.com/
Autor: Christiam Mena
*/

#pragma once

#ifndef BMP_H
#define BMP_H

#include <stdio.h>
#include <math.h>

#define BYTE  unsigned char		// 8-bits
#define WORD  unsigned short	// 16-bits
#define DWORD unsigned int		// 32-bits

#define CLAMP(x)  (((x) > (255)) ? (255) : (((x) < (0)) ? (0) : (x)))
#define RGB2GRAY(r,g,b) (BYTE)( (b)*0.3 + (g)*0.59 + (r)*0.11 )

typedef struct
{
	WORD   identifier;             // Magic number: BM
	DWORD  size;                   // tamaño del archivo
	DWORD  reserved;               //
	DWORD  bitoffset;              // offset para comenzar a leer la data	
	DWORD  headerSize;             // tamaño de la cabecera
	DWORD  width;                  // ancho
	DWORD  height;                 // alto
	WORD   planes;                 // numero de planos del bitmap
	WORD   bitsPerPixel;           // bit por pixel
	DWORD  compression;            // especificacion de la compresion
	DWORD  imageSize;              // tamaño de la seccion de datos
	DWORD  hresolution;            // resolucion horizontal medida en pixeles por metro
	DWORD  vresolution;            // resolucion vertical medida en pixeles por metro
	DWORD  numberOfColours;        // numero de colores ( 2^bitsPerPixel )
	DWORD  importantColours;       // numero de colores importantes( si = 0: todos los colores son importantes )

}BMPHeader;

typedef struct
{
	BYTE b;
	BYTE g;
	BYTE r;
	BYTE a;

}Color;

class BMP
{
private:
	BMPHeader header;		// Cabecera	
	BYTE* pImageData;		// Pixeles
	bool isImageLoaded;		// Bandera para saber cuando la imagen se ha cargado con exito

	Color getPixel(int x, int y);
	void setPixel(int x, int y, Color color);

public:
	BMP(const char* name);
	~BMP(void);

	void save(const char* name);
	void printHeader(void);
	void negative(void);
	void brightness(const int u);
	void fromRGBtoGRAY(void);
	void redChannel(void);
	void greenChannel(void);
	void blueChannel(void);
};

#endif