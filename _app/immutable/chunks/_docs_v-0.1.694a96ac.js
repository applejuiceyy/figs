const e={"figura.docs.globals.world":"La instancia global de WorldAPI y sus subtipos","figura.docs.wheel_page.set_action":`Establece una acción en el índice dado de la página
Si el índice es -1, la acción se establecerá en el último índice vacío`,"figura.docs.text.function":"Función","figura.docs.wheel_action.untoggle":`Función que se ejecuta cuando la acción no está activada
La función tiene dos argumentos
El primer argumento es alternar el estado de esta acción
El segundo argumento es esta acción en sí`,"figura.docs.wheel_action.set_toggle_color":"Establece el color de la acción cuando se alterna","figura.docs.math.sign":`Devuelve el signo del número dado
Devuelve 1 si el número es positivo, -1 si es negativo y 0 si es 0`,"figura.docs.math":'Contiene funciones que Figura agrega a la tabla de biblioteca "math" predeterminada de Lua',"figura.docs.globals.player":"La instancia global de EntityAPI y sus subtipos","figura.docs.wheel_action.set_hover_texture":`Establece una textura personalizada para renderizar mientras se desplaza esta acción
Todos los valores se miden en píxeles
El UV predeterminado es 0, 0, las dimensiones predeterminadas son las dimensiones de la textura y la escala predeterminada de 1`,"figura.docs.wheel_action.right_click":`Función que se ejecuta al hacer clic con el botón derecho del ratón
La función tiene un argumento
El primer argumento es esta acción en sí`,"figura.docs.action_wheel.left_click":"Función que se ejecuta al hacer clic con el botón izquierdo del ratón","figura.docs.action_wheel.get_page":`Regresa una página almacenada por el título dado
Si no se proporciona ningún título, devuelve una tabla con todas las páginas registradas`,"figura.docs.globals.user":`Un alias para jugador, en caso de que el usuario de tu avatar no sea un jugador
(¿Presagio?)`,"figura.docs.wheel_action.get_title":"Obtiene el Título de esta Acción","figura.docs.globals":"Documentación de varias cosas Figura agrega a el estado lua global","figura.docs.enum.key_ids":`Lista de KeyIDs
Usado en la KeybindAPI`,"figura.docs.globals.print_json":`Toma una string json de Minecraft como argumento y la imprime en el chat formateado, sin el encabezado de impresión lua
Aunque la sintaxis dice solo un argumento, puedes poner tantos como quieras
Todos ellos se imprimirán y se agregarán al final del argumento anterior
Devuelve el string formateado`,"figura.docs.animations.stop_all":"Detiene todas las animaciones en reproducción (y pausadas)","figura.docs.globals.models":"La instancia global de los Modelos Avatar y sus subtipos","figura.docs.enum.use_actions":`Lista de UseActions Validos
Usado en la ItemStackAPI`,"figura.docs.wheel_action.get_toggle_title":"Obtiene el título alternado de esta acción","figura.docs.globals.client":"La instancia global de ClientAPI","figura.docs.math.lerp_angle":`Similar a la función lerp predeterminada, pero los números están limitados al rango de 0-360
Lerp se realiza hacia el ángulo más corto
Por ejemplo, un lerp de 340 y 20, con factor de 0,75, devolverá 10`,"figura.docs.text.aliases":"Aliases","figura.docs.wheel_action.set_on_left_click":`Establece la función que se ejecuta cuando se hace clic con el botón izquierdo del mouse
La función tiene un argumento
El primer argumento es esta acción en sí`,"figura.docs.enum.texture_types":`Lista de TextureTypes
Usado en las ModelParts`,"figura.docs.wheel_page.get_slots_shift":`Obtiene el cambio de espacios actuales de esta página.
Este valor son las ranuras mostradas actualmente, divididas por 8, redondeadas hacia arriba`,"figura.docs.action_wheel.get_current_page":"Regresa la página configurada actualmente desde la Rueda de Acciónes, o NIL si no se ha configurado ninguna página","figura.docs.math.player_scale":"La constante de escala del jugador relacionada con el mundo","figura.docs.globals.vec":'Un alias para "vectors.vec"',"figura.docs.wheel_action.set_on_right_click":`Establece la función que se ejecuta cuando se hace clic con el botón derecho del mouse
La función tiene un argumento
El primer argumento es esta acción en sí`,"figura.docs.math.clamp":"Ajusta el valor dado entre mínimo y máximo","figura.docs.enum.render_types":`Lista de RenderTypes Validos
Usado en las ModelParts`,"figura.docs.wheel_page.should_keep_slots":"Verifica si los espacios actuales de esta página deben restablecerse al agregar esta página a la Rueda de acción","figura.docs.wheel_action.get_color":"Obtiene el Color de esta Acción","figura.docs.globals.renderer":"La instancia global de RendererAPI","figura.docs.wheel_page.set_slots_shift":`Establece el cambio de espacios actuales de esta página
El valor son las ranuras mostradas actualmente, divididas por 8, redondeadas hacia arriba`,"figura.docs.animation.name":"El nombre de esta animación","figura.docs.enum.parent_types":`Lista de ParentTypes
Usado en las ModelParts`,"figura.docs.text.description":"Descripción","figura.docs.globals.print_table":`El primer argumento es una tabla o datos de usuario, que se refiere a cualquiera de las sub clases de Figura agregados
Imprime la tabla para chatear, con un formato especial
Si se pasan datos de usuario, se convierten automáticamente en una tabla o string y se muestran
En el caso de tablas dentro de tablas, el parámetro "maxDepth" se utilizará para determinar hasta dónde llegar
El valor predeterminado para maxDepth es 1
El tercer argumento, "silent", omitirá la impresión del chat y solo devolverá el string`,"figura.docs.globals.to_json":`Toma cualquier valor lua y lo convierte en un string json.n
No acepta funciones, serán tratadas como nulas.`,"figura.docs.globals.vanilla_model":"La instancia global de VanillaModelAPI y sus subtipos","figura.docs.enum.empty":"No hay valores en este enumerador!","figura.docs.action_wheel.get_selected":"Regresa el índice de la acción seleccionada actualmente","figura.docs.wheel_action.scroll":`Función que se ejecuta cuando se desplaza el mouse.
La función tiene dos argumentos
El primer argumento es la dirección de la rueda del mouse
El segundo argumento es esta acción en sí`,"figura.docs.action_wheel.get_selected_action":"Regresa la acción que está actualmente seleccionada en la Rueda de Acciones","figura.docs.globals.events":"La instancia global de EventsAPI y sus subtipos","figura.docs.wheel_action.set_toggle_texture":`Establece una textura personalizada para renderizar en esta acción cuando se alterna
Todos los valores se miden en píxeles.
El UV predeterminado es 0, 0, las dimensiones predeterminadas son las dimensiones de la textura y la escala predeterminada de 1`,"figura.docs.enum":"Contiene todos los valores string usados en otras funciones","figura.docs.wheel_page.get_action":"Obtiene una acción del índice dado de la página","figura.docs.wheel_page.get_actions":`Obtiene una tabla de las acciones desplazadas por el número dado
Si no se especifica ningún turno, regresa todas las acciones de esta página
Tenga en cuenta que la tabla está indexada según su número de ranura como clave, por lo que las ranuras en blanco darán como resultado valores nulos`,"figura.docs.globals.parse_json":`Toma un string json como argumento y la convierte en un valor lua.
Los objetos y matrices se convierten en tablas apropiadamente.`,"figura.docs.globals.host":"La instancia global de HostAPI","figura.docs.wheel_action.set_toggled":"Establece el estado toggle de la acción","figura.docs.wheel_action.set_item":"Establece el Item de esta Acción","figura.docs.wheel_page.new_action":`Agrega una nueva acción en el índice de la página seleccionada
Si no se proporciona ningún índice, se agrega en el primer índice disponible`,"figura.docs":'El comando "/figura docs" te permite acceder a la documentación de todos los tipos y funciones Figura que añade a su entorno de scripting Lua',"figura.docs.math.world_scale":"La constante del escalamiento mundial relacionada con el jugador","figura.docs.wheel_action.get_toggle_color":"Obtiene el color de esta acción alternada","figura.docs.wheel_action.toggle":`Función que se ejecuta cuando se alterna la acción
La función tiene dos argumentos
El primer argumento es alternar el estado de esta acción
El segundo argumento es esta acción en sí`,"figura.docs.globals.animations":"La instancia global de AnimationsAPI y sus subtipos","figura.docs.wheel_action.get_hover_color":"Obtiene el Color del Hover de esta Acción","figura.docs.math.short_angle":`Devuelve el ángulo más corto entre dos ángulos.
Por ejemplo, si tiene un ángulo de 350 grados y desea obtener el ángulo más corto entre él y 0 grados, el resultado será 10 grados`,"figura.docs.globals.avatar":"La instancia global de AvatarAPI","figura.docs.animations.get_animations":"Regresa una tabla con todas las animaciones","figura.docs.globals.list_files":`Una función que regresa una tabla con todos los nombres de los scripts de rutas especificadas
Si no se especifica ninguna ruta, va a buscar en la carpeta del modelo Figura
Un segundo argumento, booleano, puede ser adquirido y también una lista de archivos adentro de sub carpetas`,"figura.docs.action_wheel.is_enabled":"Regresa si la Rueda de Acciones se está renderizando actualmente o no","figura.docs.action_wheel.set_page":"Establece la página de la Rueda de Acciónes en el título o página dado","figura.docs.text.type":"Sub Clase","figura.docs.wheel_action.set_title":"Establece el título de la acción","figura.docs.wheel_action.set_on_toggle":`Establece la función que se ejecuta cuando se alterna la acción
La función tiene dos argumentos
El primer argumento es el estado toggle de esta acción
El segundo argumento es esta acción en sí`,"figura.docs.text.field":"Campo","figura.docs.action_wheel.new_page":`Crea una nueva página para la rueda de acción
Se puede dar un título para almacenar esta página internamente
Si no se proporciona ningún título, la página simplemente será regresada por esta función`,"figura.docs.globals.vectors":"La instancia global de VectorsAPI y sus subtipos","figura.docs.text.syntax":"Syntax","figura.docs.animation.animation.is_playing":"Comprueba si esta animación se está reproduciendo","figura.docs.text.entries":"Entradas","figura.docs.globals.keybinds":"La instancia global de KeybindAPI y sus subtipos","figura.docs.action_wheel":"Una API global que se utiliza para personalizar la Rueda de Acciónes de tu jugador","figura.docs.text.not_editable":"No Editable","figura.docs.math.map":`Asigna el valor dado de un rango a otro
Por ejemplo, si tiene un valor de 20 en el rango 0-200 y desea asignarlo al rango 100-200, el resultado será 110`,"figura.docs.animation":"Una animación de Blockbench","figura.docs.globals.type":`Figura anula la función type() de lua
Cuando se usa en Sub Clases Figura, regresa el nombre del sub clase como se ve en los documentos y en figuraMetatables global
Cuando se llama a una tabla que tiene una metatabla con una clave __type, devuelve el valor correspondiente`,"figura.docs.action_wheel.scroll":"Función que se ejecuta cuando se desplaza el mouse","figura.docs.globals.figura_metatables":`Una tabla que contiene todas las metatables para los tipos de objetos de Figura.
Las metatables son editables`,"figura.docs.wheel_action.is_toggled":"Comprueba si la acción está alternada o no","figura.docs.wheel_action":`Una acción en la Rueda de Acción Figura
Las acciones se interactúan haciendo clic y desplazándose, lo que también se puede alternar`,"figura.docs.text.returns":"Regresa","figura.docs.enum.entity_poses":`Lista de EntityPoses
Usado en la EntityAPI`,"figura.docs.math.lerp":`Interpola linealmente desde su primer argumento hasta su segundo argumento, con el tercer argumento como parámetro.
Funciona tanto con números regulares, como con vectores del mismo tipo y con matrices del mismo tipo`,"figura.docs.enum.render_modes":`Lista de RenderModes Validos
Usado en el evento RENDER`,"figura.docs.globals.matrices":"La instancia global de MatricesAPI y sus subtipos","figura.docs.math.round":"Redondea el número dado al entero más cercano","figura.docs.globals.textures":"La instancia global de TextureAPI","figura.docs.globals.particles":"La instancia global de ParticleAPI","figura.docs.wheel_action.set_toggle_item":"Establece el item de la Acción cuando se alterna","figura.docs.enum.play_states":`Lista de PlayStates Validos
Usado en las Animaciones de Blockbench`,"figura.docs.globals.nameplate":"La instancia global de NameplateAPI y sus subtipos","figura.docs.globals.require":`La función require() toma el nombre de uno de tus scripts, sin la extensión .lua
Si el script no se ha usado antes, va a reproducir el script y regresar el valor el script que este le de
Si el script se ha reproducido antes, entonces no va a correr el archivo de nuevo, pero va a regresar la misma cosa que la primera vez
Si un script requerido no te da valores, entonces require() va a regresar verdadero
Si el nombre que le das no es ninguno de tus script, va a darte error`,"figura.docs.wheel_page.get_title":"Regresa el titulo de esta Pagina","figura.docs.world.raycast_block":"Lanza un Raycast a un Bloque en el mundo, regresa un mapa conteniendo el bloque y su posición.","figura.docs.wheel_action.set_on_scroll":`Establece la función que se ejecuta cuando se desplaza el mouse
La función tiene dos argumentos
El primer argumento es la dirección de la rueda del mouse
El segundo argumento es esta acción en sí`,"figura.docs.enum.item_display_modes":`Lista de DisplayModes Validos
Usado en el Item RenderTask`,"figura.docs.globals.sounds":"La instancia global de SoundAPI","figura.docs.action_wheel.new_action":"Crea una nueva acción que no se asigna automáticamente a una página","figura.docs.enum.colors":`Lista de colores personalizados
Usado en cualquier lugar donde puedas ingresar un color hex`,"figura.docs.wheel_page.set_keep_slots":"Establece si los espacios actuales de esta página deben restablecerse al agregar esta página en la Rueda de Acciónes","figura.docs.text.extends":"extiende","figura.docs.wheel_action.set_hover_item":"Establece el Item de esta Acción cuando esta pasando el mouse","figura.docs.enum.player_model_parts":`Lista de PlayerModelParts Validos
Usado en la PlayerAPI`,"figura.docs.globals.print":`Una función que escribe sus argumentos en el chat
Aunque la sintaxis dice solo un argumento, puedes poner tantos como quieras
Todos ellos se imprimirán y estarán separados por un espacio de tabulacion
Regresa la representación en string de todos los valores`,"figura.docs.wheel_page":"Un contenedor de la Rueda de Acciones que se utiliza para almacenar hasta 8 acciones","figura.docs.animations.get_playing":"Regresa una tabla con todas las animaciones en reproducción","figura.docs.text.editable":"Editable","figura.docs.wheel_action.set_hover_color":"Establece el Color de esta Acción cuando esta pasando el mouse","figura.docs.globals.pings":"La instancia global de PingAPI","figura.docs.wheel_action.set_on_untoggle":`Establece la función que se ejecuta cuando la acción no está activada
La función tiene dos argumentos
El primer argumento es el estado toggle de esta acción
El segundo argumento es esta acción en sí`,"figura.docs.wheel_action.set_texture":`Establece una textura personalizada para renderizar en esta acción
Todos los valores se miden en píxeles
El UV predeterminado es 0, 0, las dimensiones predeterminadas son las dimensiones de la textura y la escala predeterminada de 1`,"figura.docs.wheel_page.keep_slots":"Si los espacios actuales de esta página deben restablecerse o no al agregar esta página a la rueda de acción","figura.docs.wheel_action.set_toggle_title":"Establece el título de la acción cuando se alterna","figura.docs.globals.config":"La instancia global de ConfigAPI","figura.docs.action_wheel.right_click":"Función que se ejecuta al hacer clic con el botón derecho del ratón","figura.docs.enum.loop_modes":`Lista de LoopModes Validos
Usado en las Animaciones de Blockbench`,"figura.docs.wheel_action.left_click":`Función que se ejecuta al hacer clic con el botón izquierdo del ratón
La función tiene un argumento
El primer argumento es esta acción en sí`,"figura.docs.enum.keybinds":`Lista de teclas especiales
Usado en la KeybindAPI`,"figura.docs.enum.post_effects":`Lista de PostEffects
Usado en la RendererAPI`,"figura.docs.globals.action_wheel":"La instancia global de ActionWheelAPI y sus subtipos","figura.docs.animations":"Una API global utilizada para el control de las animaciones de Blockbench","figura.docs.wheel_action.set_color":"Establece el Color de esta Acción","figura.docs.action_wheel.execute":`Ejecuta la acción del índice dado
Si el índice es nulo, ejecutará la última acción seleccionada
Se puede dar un segundo parámetro para especificar si se debe ejecutar la acción izquierda o derecha`};export{e as default};
