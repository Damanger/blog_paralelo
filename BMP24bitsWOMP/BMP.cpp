/*
Cargar y procesar imágenes BMP de 24bits con C++
http://www.widget-101.com/
Autor: Christiam Mena
*/

#include "BMP.h"

BMP::BMP(const char* name)
{
	if (!name) return;

	// Reinicio de las variables
	isImageLoaded = false;
	pImageData = NULL;

	// Apertura del archivo
	FILE* pFile = fopen(name, "rb");

	// Si se pudo cargar el archivo
	if (pFile)
	{
		// Cargo la cabecera
		fread(&header.identifier, 1, sizeof(WORD), pFile);
		fread(&header.size, 1, sizeof(DWORD), pFile);
		fread(&header.reserved, 1, sizeof(DWORD), pFile);
		fread(&header.bitoffset, 1, sizeof(DWORD), pFile);
		fread(&header.headerSize, 1, sizeof(DWORD), pFile);
		fread(&header.width, 1, sizeof(DWORD), pFile);
		fread(&header.height, 1, sizeof(DWORD), pFile);
		fread(&header.planes, 1, sizeof(WORD), pFile);
		fread(&header.bitsPerPixel, 1, sizeof(WORD), pFile);
		fread(&header.compression, 1, sizeof(DWORD), pFile);
		fread(&header.imageSize, 1, sizeof(DWORD), pFile);
		fread(&header.hresolution, 1, sizeof(DWORD), pFile);
		fread(&header.vresolution, 1, sizeof(DWORD), pFile);
		fread(&header.numberOfColours, 1, sizeof(DWORD), pFile);
		fread(&header.importantColours, 1, sizeof(DWORD), pFile);

		// Si el archivo no es de 8bpp, termino la ejecución
		if (header.bitsPerPixel != 24) {
			fclose(pFile);
			return;
		}

		// Cargo los datos de la imagen
		pImageData = new BYTE[header.width * header.height * 3];
		fseek(pFile, header.bitoffset, SEEK_SET);
		fread(pImageData, 1, header.width * header.height * 3, pFile);

		isImageLoaded = true;

		// Cierro el archivo
		fclose(pFile);
	}
}

BMP::~BMP(void)
{
	if (pImageData != NULL) delete[] pImageData;
}

void BMP::printHeader(void)
{
	if (isImageLoaded) {
		printf("  ===========================================================\n");
		printf("    Image information:\n");
		printf("  ===========================================================\n");

		printf("    + Identifier: \t\t| Ox%X\n", header.identifier);
		printf("    + File size: \t\t| %d bytes\n", header.size);
		printf("    + Data offset: \t\t| %d bytes\n", header.bitoffset);
		printf("    + Header size: \t\t| %d bytes\n", header.headerSize);
		printf("    + Width: \t\t\t| %dpx\n", header.width);
		printf("    + Height: \t\t\t| %dpx\n", header.height);
		printf("    + Planes: \t\t\t| %d\n", header.planes);
		printf("    + Bits per pixel: \t\t| %d-bits\n", header.bitsPerPixel);
		printf("    + Compression: \t\t| %d\n", header.compression);
		printf("    + Image size: \t\t| %d bytes\n", header.imageSize);
		printf("    + Horizontal resolution: \t| %d\n", header.hresolution);
		printf("    + Vertical resolution: \t| %d\n", header.vresolution);
		printf("    + Number of colours: \t| %d\n", header.numberOfColours);
		printf("    + Important colours: \t| %d\n", header.importantColours);
		printf("  -----------------------------------------------------------\n");
	}
	else {
		printf("\n  + There is not information to show.\n");
	}
}

void BMP::save(const char* name)
{
	if (isImageLoaded)
	{
		if (!name) return;

		FILE* pFile = fopen(name, "wb");

		fwrite(&header.identifier, sizeof(header.identifier), 1, pFile);
		fwrite(&header.size, sizeof(header.size), 1, pFile);
		fwrite(&header.reserved, sizeof(header.reserved), 1, pFile);
		fwrite(&header.bitoffset, sizeof(header.bitoffset), 1, pFile);
		fwrite(&header.headerSize, sizeof(header.headerSize), 1, pFile);
		fwrite(&header.width, sizeof(header.width), 1, pFile);
		fwrite(&header.height, sizeof(header.height), 1, pFile);
		fwrite(&header.planes, sizeof(header.planes), 1, pFile);
		fwrite(&header.bitsPerPixel, sizeof(header.bitsPerPixel), 1, pFile);
		fwrite(&header.compression, sizeof(header.compression), 1, pFile);
		fwrite(&header.imageSize, sizeof(header.imageSize), 1, pFile);
		fwrite(&header.hresolution, sizeof(header.hresolution), 1, pFile);
		fwrite(&header.vresolution, sizeof(header.vresolution), 1, pFile);
		fwrite(&header.numberOfColours, sizeof(header.numberOfColours), 1, pFile);
		fwrite(&header.importantColours, sizeof(header.importantColours), 1, pFile);

		fseek(pFile, header.bitoffset, SEEK_SET);
		fwrite(pImageData, 1, header.width * header.height * 3, pFile);

		fclose(pFile);
	}
}

void BMP::brightness(const int u)
{
	if (u == 0 && !isImageLoaded) return;

	for (int y = 0; y < header.height; y++) {
		for (int x = 0; x < header.width; x++) {

			Color color = getPixel(x, y);

			color.r = CLAMP(color.r + u);
			color.g = CLAMP(color.g + u);
			color.b = CLAMP(color.b + u);

			setPixel(x, y, color);
		}
	}
}

void BMP::fromRGBtoGRAY(void)
{
	if (!isImageLoaded) return;

	BYTE intensity = 0;

	#pragma omp parallel for
	for (int y = 0; y < header.height; y++) {
	#pragma omp parallel for
		for (int x = 0; x < header.width; x++) {

			Color color = getPixel(x, y);
			intensity = RGB2GRAY(color.r, color.g, color.b);

			color.r = intensity;
			color.g = intensity;
			color.b = intensity;

			setPixel(x, y, color);
		}
	}
}

void BMP::negative(void)
{
	if (!isImageLoaded) return;

	for (int y = 0; y < header.height; y++) {
		for (int x = 0; x < header.width; x++) {

			Color color = getPixel(x, y);

			color.r = (255 - color.r);
			color.g = (255 - color.g);
			color.b = (255 - color.b);

			setPixel(x, y, color);
		}
	}
}

void BMP::redChannel(void)
{
	if (!isImageLoaded) return;

	for (int y = 0; y < header.height; y++) {
		for (int x = 0; x < header.width; x++) {

			Color color = getPixel(x, y);

			//color.r
			color.g = 0;
			color.b = 0;

			setPixel(x, y, color);
		}
	}
}

void BMP::greenChannel(void)
{
	if (!isImageLoaded) return;

	for (int y = 0; y < header.height; y++) {
		for (int x = 0; x < header.width; x++) {

			Color color = getPixel(x, y);

			color.r = 0;
			//color.g
			color.b = 0;

			setPixel(x, y, color);
		}
	}
}

void BMP::blueChannel(void)
{
	if (!isImageLoaded) return;

	for (int y = 0; y < header.height; y++) {
		for (int x = 0; x < header.width; x++) {

			Color color = getPixel(x, y);

			color.r = 0;
			color.g = 0;
			//color.b

			setPixel(x, y, color);
		}
	}
}

Color BMP::getPixel(int x, int y)
{
	Color color;

	color.b = pImageData[(y * header.width * 3) + (x * 3)];
	color.g = pImageData[(y * header.width * 3) + (x * 3) + 1];
	color.r = pImageData[(y * header.width * 3) + (x * 3) + 2];

	return color;
}

void BMP::setPixel(int x, int y, Color color)
{
	pImageData[(y * header.width * 3) + (x * 3)] = color.b;
	pImageData[(y * header.width * 3) + (x * 3) + 1] = color.g;
	pImageData[(y * header.width * 3) + (x * 3) + 2] = color.r;
}