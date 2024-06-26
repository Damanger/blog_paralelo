import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <BlogPost 
                    title="Información del Proyecto y Características del Equipo"
                    content={`Este proyecto tiene como objetivo realizar 50 ejecuciones de un programa que convierte una imagen RGB a escala de grises en diferentes entornos:\n\n
                    1. En Windows sin usar OpenMP.\n
                    2. En Windows usando OpenMP.\n
                    3. En Linux sin usar OpenMP.\n
                    4. En Linux usando OpenMP.\n\n
                    El propósito es comparar el rendimiento de las ejecuciones en los diferentes entornos y observar el impacto del uso de OpenMP para paralelizar el procesamiento de imágenes.\n\n
                    La máquina utilizada para este proyecto cuenta con las siguientes especificaciones:\n
                    - Procesador: Intel Core i7 13700\n
                    - Memoria RAM: 32 GB DDR5\n\n
                    Esto proporciona una plataforma robusta para realizar las pruebas y obtener resultados significativos.`}
                />
                <BlogPost 
                    title="Detalles del Proyecto Final"
                    content={`El proyecto final se centra en la implementación y evaluación del procesamiento de imágenes en paralelo. Se han llevado a cabo diversas pruebas para medir el tiempo de ejecución y la eficiencia del procesamiento de una imagen RGB a escala de grises. Los resultados obtenidos se analizarán para determinar las ventajas y desventajas del uso de OpenMP en diferentes sistemas operativos.\n\n
                    Los pasos realizados incluyen:\n
                    - Implementación del algoritmo de conversión de RGB a escala de grises.\n
                    - Paralelización del algoritmo utilizando OpenMP.\n
                    - Ejecución de las pruebas y recolección de datos.\n
                    - Paralelización del algoritmo utilizando sin OpenMP.\n
                    - Ejecución de las pruebas y recolección de datos.\n
                    - Análisis de los resultados y elaboración de conclusiones.\n\n
                    Este proyecto ofrece una visión detallada del rendimiento del cómputo paralelo en el procesamiento de imágenes, proporcionando información valiosa para futuras optimizaciones y aplicaciones en este campo.`}
                />
                <article>
                    <div className="tableContent">
                        <table class="c12">
                    <tr class="c28">
                        <td class="c20 c210" colspan="1" rowspan="1">
                            <p class="c21">
                                <span class="c24"></span>
                            </p>
                        </td>
                <td class="c29" colspan="3" rowspan="1" style={{background:'#fff2cc'}}>
                    <p class="c22">
                        <span class="c24">Con omp</span>
                    </p>
                </td>
                <td class="c212" colspan="3" rowspan="1" style={{background:'#c9daf8'}}>
                    <p class="c22">
                        <span class="c24">Sin omp</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">2 hilos</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">&nbsp;4 hilos</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">8 hilos</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">2 hilos</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">4 hilos</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">8 hilos</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">85.5491</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.5188</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.0259</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.0923</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.5963</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">85.6872</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.2781</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.2945</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">167.5873</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.1965</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.2645</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.5114</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.4849</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.9397</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">144.4762</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.6914</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.1613</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.7875</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0482</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.9231</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">120.9561</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.3849</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.8985</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.496</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.5821</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.8726</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">131.5949</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.4442</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.9627</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.4075</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.2606</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.7679</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.9867</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.0558</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0607</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.0561</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.2932</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0311</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.6113</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.5098</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.6365</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.1543</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0322</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.6361</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.08</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.6327</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.913</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0522</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0174</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.8368</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.8819</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.1873</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.6307</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.5642</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.3918</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.3837</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">95.9458</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.9953</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.9858</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.6835</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.8779</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.5842</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.8086</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.0554</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.8417</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.3798</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.2082</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">85.2557</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.985</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.8028</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.19</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.1245</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.311</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.6836</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.1628</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.2875</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0908</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.1974</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.6706</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.6006</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.2728</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.6343</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.9226</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.6263</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.3408</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.1415</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.7088</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.9646</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0464</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.6878</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.6927</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.7079</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.8579</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.4764</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.0293</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.6293</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.2202</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.4655</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.4376</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.4576</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.5456</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">95.5748</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.7403</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.1453</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.8747</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.6263</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.3772</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.7831</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.5143</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.8109</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.1333</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.3513</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.5931</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.3164</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.0894</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.3725</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.9389</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.1846</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.1521</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.4738</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.0127</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.9755</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.5089</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.4071</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.0224</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.0697</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.0606</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.7346</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.9751</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.3222</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.1602</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.2132</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.3536</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.1294</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.506</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.1514</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.9821</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.0365</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.9632</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.0853</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.9471</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">85.676</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.006</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.0877</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.7027</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.4998</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.8777</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.1689</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.7786</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.0409</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.3295</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.3413</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">131.8053</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.6413</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0938</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.9338</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.9636</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.2245</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.9921</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.8823</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.6709</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.7822</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.3032</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.27</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.043</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">86.0728</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.6427</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.2019</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.1655</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.0898</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.9251</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.0296</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.6005</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.6414</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.4549</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.9604</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.0298</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.6559</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.1833</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.6309</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.2346</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.4018</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.7566</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.1038</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.2035</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.0417</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.5513</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.2755</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.6647</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.2966</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.3133</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.5338</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.9834</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.8401</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.2795</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.2312</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.8503</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.9474</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.7655</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.0067</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.5644</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.558</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.9214</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.1258</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0021</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.0742</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.4747</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.1166</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.8931</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.0578</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.111</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.8781</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.5588</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.6674</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.5913</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.3938</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.8375</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.7628</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.0049</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.7375</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.1118</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.7291</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.6979</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.8436</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.2327</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.5056</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.568</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.8882</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.0033</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.8205</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.3014</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.5967</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.6833</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.5763</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.945</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.3903</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.0061</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.2991</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.9605</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.8078</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.4657</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.0732</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.4184</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.6953</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.0663</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.1132</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.7942</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.7938</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.3567</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.0284</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.5971</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.4727</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.9992</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.8878</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.963</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.2233</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.1181</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.2775</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.0168</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.9775</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">95.1</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.6172</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.0241</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.0424</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.3</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.6665</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.7244</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">87.964</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.1485</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.2924</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c0" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.1825</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.905</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.3947</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.5595</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.6015</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.3048</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.4371</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.2461</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.6964</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.1655</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.7962</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.2902</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.3155</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.8099</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.6637</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.8986</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.4836</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">95.0612</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.0498</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">93.0484</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.3371</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.7369</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.57</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.8907</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c21">
                        <span class="c24"></span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.7721</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.6862</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.9918</span>
                    </p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">89.3076</span>
                    </p>
                </td>
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">94.3835</span>
                    </p>
                </td>
                <td class="c23" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">92.0747</span>
                    </p>
                </td>
            </tr>
            <tr class="c28">
                <td class="c20 c217" colspan="1" rowspan="1" style={{background:'#cca9dd'}}>
                    <p class="c214">
                        <span class="c24">Promedio</span>
                    </p>
                </td>
                <td class="c27" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.84754</span>
                    </p>
                </td>
                <td class="c27" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">90.613412</span>
                    </p>
                </td>
                <td class="c27" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">96.468532</span>
                    </p>
                </td>
                <td class="c27" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">88.846946</span>
                    </p>
                </td>
                <td class="c27" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.198494</span>
                    </p>
                </td>
                <td class="c27" colspan="1" rowspan="1">
                    <p class="c22">
                        <span class="c24">91.615056</span>
                    </p>
                </td>
            </tr>
                        </table>  
                        <p className='datos'> Los datos resultantes están en milésimas de segundos </p>   
                    </div>
                    <h2>Gráficas de Ejecución En Windows Sin OMP</h2>
                    <img src="./grafica.webp" alt="Gráfica 1" />
                    <p className='descripcion'>Este gráfico indica que, en Windows sin el uso de OpenMP, el uso de menos hilos (2 hilos) resulta en un mejor rendimiento y menor variabilidad en los tiempos de ejecución para la conversión de imágenes RGB a escala de grises.</p>
                    <h2>Gráficas de Ejecución En Window Con OMPs</h2>
                    <img src="./grafica2.webp" alt="Gráfica 2" />
                    <p className='descripcion'>Este gráfico indica que, en Windows con el uso de OpenMP, la paralelización mejora la eficiencia y la consistencia del tiempo de ejecución para la conversión de imágenes RGB a escala de grises cuando se utilizan 2 y 4 hilos. Sin embargo, el uso de 8 hilos puede introducir ineficiencias y variabilidad en el rendimiento.</p>
                    <div className="tableContent">
                        <table class="c12">
                    <tr class="c6">
                        <td class="c3 c15" colspan="1" rowspan="1">
                            <p class="c2">
                                <span class="c0"></span>
                            </p>
                        </td>
                        <td class="c14" colspan="3" rowspan="1" style={{background:'#fff2cc'}}>
                            <p class="c1">
                                <span class="c0">Con omp</span>
                            </p>
                        </td>
                        <td class="c16" colspan="3" rowspan="1" style={{background:'#c9daf8'}}>
                            <p class="c1">
                                <span class="c0">Sin omp</span>
                            </p>
                        </td>
                    </tr>
                    <tr class="c6">
                    <td class="c3" colspan="1" rowspan="1">
                        <p class="c2">
                            <span class="c0"></span>
                        </p>
                    </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">2 hilos</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">4 hilos</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">8 hilos</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">2 hilos</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">4 hilos</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">8 hilos</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.169038773</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.199794769</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189781189</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.263929367</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189781189</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.252962112</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189781189</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226020813</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137805939</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.29706955</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226020813</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.196933746</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226020813</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16283989</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.133037567</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16283989</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.212907791</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16283989</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.144958496</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.123023987</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.295162201</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.144958496</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.263929367</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.144958496</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137090683</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.190019608</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226974487</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137090683</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.334024429</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137090683</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.183105469</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.174999237</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.159025192</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16283989</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.159025192</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.159025192</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189065933</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189781189</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189065933</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.232934952</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189065933</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.132083893</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.132083893</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.197172165</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.132083893</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226974487</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.218868256</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226974487</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.275850296</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226974487</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147819519</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16784668</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147104263</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147819519</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.248908997</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147819519</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">9.771108627</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226020813</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">9.771108627</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.224113464</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">9.771108627</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.29706955</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226020813</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137805939</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.29706955</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.196933746</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.29706955</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.299215317</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.188827515</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189065933</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.184059143</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.144958496</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.144958496</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.222921372</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189065933</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.183105469</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.244140625</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16784668</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.177145004</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16784668</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.221014023</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16784668</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.251054764</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137090683</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.251054764</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.191926956</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.251054764</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.144958496</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.14090538</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.14090538</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.144958496</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">39.00194168</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.144958496</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.169038773</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.251054764</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.169038773</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.320911408</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.169038773</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.291109085</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.291109085</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.242948532</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.291109085</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189065933</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.694990158</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.180006027</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.226974487</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16784668</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.180006027</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.293970108</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.180006027</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137090683</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.180006027</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.216007233</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.263929367</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.123023987</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.263929367</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.272035599</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.263929367</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.188827515</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.169038773</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.188827515</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.340938568</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.188827515</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.183105469</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.179006027</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147819519</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.183105469</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.49996376</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.183105469</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.190019608</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.251054764</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.190019608</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.277996063</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.190019608</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.180006027</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.320911408</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.177145004</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.123023987</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.177145004</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.168085098</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.177145004</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137805939</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.146865845</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137805939</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.174045563</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137805939</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.123023987</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16283989</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.123023987</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.230073929</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.123023987</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.149011612</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.149011612</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">6.777048111</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.149011612</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138998032</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16283989</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.18119812</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.133037567</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.133037567</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.352859497</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.133037567</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.14090538</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.14090538</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.29706955</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.14090538</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.190973282</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.14090538</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.205993652</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.195980072</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.183105469</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.149011612</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.194072723</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.139951706</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.146865845</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.134944916</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.188827515</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.146865845</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.185966492</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.146865845</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147104263</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.149011612</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147104263</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.231027603</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147104263</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.185966492</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137805939</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147104263</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.185966492</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16617775</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.185966492</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.218868256</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.29706955</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.296831131</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.138044357</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.30207634</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.188827515</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.218868256</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.20980835</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.218868256</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.341176987</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.162124634</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.29706955</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.142097473</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.178098679</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.142097473</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.450134277</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.189781189</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.137090683</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.366926193</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.283002853</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.366926193</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.371217728</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.16784668</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.147104263</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.203132629</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.448942184</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.14090538</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.183105469</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.295162201</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.185966492</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.295162201</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3" colspan="1" rowspan="1">
                    <p class="c2">
                        <span class="c0"></span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.151094733</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.1308918</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.146865845</span>
                    </p>
                </td>
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.371986506</span>
                    </p>
                </td>
                <td class="c4" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.17619133</span>
                    </p>
                </td>
                <td class="c7" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.371986506</span>
                    </p>
                </td>
            </tr>
            <tr class="c6">
                <td class="c3 c13" colspan="1" rowspan="1" style={{background:'#cca9dd'}}>
                    <p class="c10">
                        <span class="c0">Promedio</span>
                    </p>
                </td>
                <td class="c11" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.38437718</span>
                    </p>
                </td>
                <td class="c11" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.165885953</span>
                    </p>
                </td>
                <td class="c11" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.169491768</span>
                    </p>
                </td>
                <td class="c11" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.371986506</span>
                    </p>
                </td>
                <td class="c11" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">1.152200699</span>
                    </p>
                </td>
                <td class="c11" colspan="1" rowspan="1">
                    <p class="c1">
                        <span class="c0">0.371986506</span>
                    </p>
                </td>
            </tr>
                        </table>
                        <p className='datos'> Los datos resultantes están en segundos </p>
                    </div>
                    <h2>Gráficas de Ejecución En Fedora Sin OMP</h2>
                    <img src="./grafica3.webp" alt="Gráfica 3" />
                    <p className='descripcion'>La ejecución con 2 y 8 hilos muestra tiempos más consistentes y bajos en comparación con 4 hilos, que presenta variabilidad y picos significativos en el tiempo de ejecución. Esto sugiere que usar 2 o 8 hilos puede ser más eficiente y estable que usar 4 hilos para este algoritmo específico bajo las condiciones de prueba.</p>
                    <h2>Gráficas de Ejecución En Fedora Con OMP</h2>
                    <img src="./grafica4.webp" alt="Gráfica 4" />
                    <p className='descripcion'>Los tiempos de ejecución son generalmente más uniformes y bajos en comparación con la ejecución sin OMP. La variabilidad se reduce notablemente, especialmente para 8 hilos, lo que sugiere una mejora en la eficiencia y estabilidad del algoritmo al utilizar la paralelización con OpenMP.</p>
                </article>

                <article>
                    <h2>Códigos Utilizados</h2>
                    <div className='codigo'>
                        <pre>
                            <code>
                            <strong><h2>Windows</h2></strong>
                                {`#include "BMP.h"

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
                                `}
                            </code>
                            <code>
                                <strong><h2>Linux</h2></strong>
                                {`#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include "BMP.h"
#include <omp.h>

#define NUM_THREADS 2 // Puedes cambiar este valor a 2, 4, u 8 según la prueba

void fromRGBtoGRAY_OpenMP(BMP* bmp) {
    int i, j;
    #pragma omp parallel for num_threads(NUM_THREADS) private(i, j)
    for (i = 0; i < bmp->height; ++i) {
        for (j = 0; j < bmp->width; ++j) {
            Pixel pixel = bmp->getPixel(i, j);
            unsigned char gray = (unsigned char)(0.3 * pixel.r + 0.59 * pixel.g + 0.11 * pixel.b);
            pixel.r = gray;
            pixel.g = gray;
            pixel.b = gray;
            bmp->setPixel(i, j, pixel);
        }
    }
}

double timeval_diff(struct timeval *a, struct timeval *b) {
    return (double)(a->tv_sec + a->tv_usec / 1000000.0) - (double)(b->tv_sec + b->tv_usec / 1000000.0);
}

int main(int argc, char** argv)
{
    struct timeval t_ini, t_fin;
    double secs;
    BMP bmp("nature.bmp");

    gettimeofday(&t_ini, NULL);

    fromRGBtoGRAY_OpenMP(&bmp);

    gettimeofday(&t_fin, NULL);

    secs = timeval_diff(&t_fin, &t_ini);
    printf("%.10g\n", secs * 1000.0);

    // Guardar el tiempo en un archivo
    FILE *time_file = fopen("tiempos.txt", "a");
    if (time_file != NULL) {
        fprintf(time_file, "Tiempo de ejecución: %.10g ms\n", secs * 1000.0);
        fclose(time_file);
    } else {
        perror("No se pudo abrir el archivo de tiempos");
    }

    bmp.save("gris.bmp");

    return 0;
}

`}
                            </code>
                        </pre>
                    </div>
                </article>
                <BlogPost 
                    title="Conclusiones"
                    content={`Este proyecto ha investigado el impacto del uso de OpenMP en la paralelización del procesamiento de imágenes, específicamente en la conversión de imágenes RGB a escala de grises, en diferentes entornos operativos. Al realizar 50 ejecuciones en cada combinación de entorno y configuración (Windows con y sin OpenMP, y Linux con y sin OpenMP), se ha logrado una comparación exhaustiva del rendimiento y la eficiencia del cómputo paralelo en estas plataformas.

Principales Hallazgos:

1. Rendimiento del Procesador y la Memoria: La máquina utilizada, con un procesador Intel Core i7 13700 y 32 GB de RAM DDR5, ha proporcionado una base sólida para llevar a cabo las pruebas, asegurando que los resultados reflejen las capacidades de hardware modernas y su impacto en el procesamiento paralelo.

2. Comparación entre Sistemas Operativos: 
    - Windows sin OpenMP: Este entorno sirvió como línea base para medir el rendimiento de la conversión secuencial de imágenes.
    - Windows con OpenMP: La implementación de OpenMP en Windows mostró mejoras significativas en el tiempo de ejecución debido a la paralelización, destacando la eficiencia de OpenMP en este sistema operativo.
    - Linux sin OpenMP: Similar a Windows, Linux sin paralelización proporcionó una base para comparar el impacto del uso de OpenMP en un entorno diferente.
    - Linux con OpenMP: Los resultados en Linux con OpenMP también mostraron mejoras en el rendimiento, aunque las diferencias específicas en comparación con Windows destacaron cómo los distintos sistemas operativos manejan el paralelismo.

3. Eficiencia del Paralelismo: El uso de OpenMP para paralelizar el procesamiento de imágenes resultó en una reducción significativa en el tiempo de ejecución en ambos sistemas operativos. Esto subraya la ventaja de utilizar técnicas de cómputo paralelo en tareas de procesamiento intensivas.

4. Análisis de Resultados: Los datos recolectados permitieron un análisis detallado de los beneficios y limitaciones del uso de OpenMP. Se observó que la eficiencia del paralelismo puede variar dependiendo del sistema operativo, aunque en general, la paralelización mejoró el rendimiento en todas las configuraciones probadas.

Este proyecto ha demostrado que la paralelización del procesamiento de imágenes mediante OpenMP es altamente efectiva para reducir el tiempo de ejecución en la conversión de imágenes RGB a escala de grises. Tanto en Windows como en Linux, el uso de OpenMP proporcionó mejoras sustanciales, aunque la magnitud de estas mejoras varió entre los sistemas operativos. Los resultados obtenidos no solo confirman la eficiencia del cómputo paralelo en el procesamiento de imágenes, sino que también ofrecen una base sólida para futuras optimizaciones y aplicaciones en este campo, contribuyendo así al desarrollo de técnicas más avanzadas en el procesamiento paralelo de datos.`}
                />
            </main>
            <Footer />
        </>
    );
};

export default App;
