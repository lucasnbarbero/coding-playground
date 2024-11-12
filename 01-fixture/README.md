# Ejercicio: Generación de Fixture de Equipos de Fútbol

Este ejercicio tiene como objetivo generar un fixture (calendario de partidos) para un torneo de fútbol donde participan 20 equipos, utilizando JavaScript. Cada equipo debe enfrentarse una vez con todos los demás, distribuido en 19 fechas, y garantizando que no haya equipos que se enfrenten dos veces.

## Enunciado

Dado un array de 20 equipos, implementa una función en JavaScript que genere un fixture completo con las siguientes condiciones:

1. **Formato de Liga**: Cada equipo debe enfrentarse a todos los demás una vez (formato "round-robin").
2. **19 Fechas**: El fixture debe estar dividido en 19 fechas, con enfrentamientos distintos en cada una.
3. **Emparejamiento**: Cada fecha debe tener 10 partidos, garantizando que ningún equipo juegue más de un partido por fecha.
4. **Rotación Sin Repeticiones**: Los equipos deben rotarse de manera que ningún equipo repita una posición que ya haya ocupado.

## Solución

En este ejercicio se utiliza un algoritmo de **round-robin** para organizar el fixture de manera eficiente:

- Fijamos un equipo en cada ronda y rotamos los demás para generar nuevos enfrentamientos.
- Cada fecha incluye una lista de partidos, asegurando que todos los equipos jueguen una vez por fecha.

La implementación está desarrollada en JavaScript, con comentarios detallados que explican el razonamiento detrás de cada paso.

## Ejecución del Código

Puedes probar el código de este ejercicio en un entorno Node.js.

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio/fixture-futbol

# Ejecutar el ejercicio en Node.js
node index.js
```

## Ejemplo de Salida

```plaintext
Fecha 1:
Equipo 1 vs Equipo 20
Equipo 2 vs Equipo 19
Equipo 3 vs Equipo 18
...

Fecha 2:
Equipo 1 vs Equipo 19
Equipo 20 vs Equipo 18
Equipo 2 vs Equipo 17
...

```

Este ejercicio está diseñado para demostrar cómo se puede construir un fixture de torneo de manera organizada y eficiente usando JavaScript. El código y la lógica implementada reflejan un enfoque claro para resolver problemas complejos de manera estructurada.
