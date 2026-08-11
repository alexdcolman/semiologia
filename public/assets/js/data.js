window.SEMIO_DATA = {
  version: "0.1.0",
  course: {
    name: "Semiología",
    institution: "CBC · Universidad de Buenos Aires",
    chair: "Cátedra Vitale",
    term: "Segundo cuatrimestre 2026",
    teachers: ["Alex Colman", "Facundo Romero"],
    notice: "El cronograma está sujeto a modificaciones durante la cursada."
  },
  commissions: {
    "64304": {
      id: "64304",
      label: "Comisión 64304",
      schedule: "Lunes y jueves, de 13 a 15 hs.",
      teachers: ["Alex Colman", "Facundo Romero"],
      materialsProfile: "comun-2026"
    },
    "64305": {
      id: "64305",
      label: "Comisión 64305",
      schedule: "Lunes y jueves, de 15 a 17 hs.",
      teachers: ["Alex Colman", "Facundo Romero"],
      materialsProfile: "comun-2026"
    }
  },
  materials: [
    {code:"1", author:"Vitale, María Alejandra", year:"2020", title:"El estudio de los signos. Peirce y Saussure", details:"Buenos Aires: Eudeba."},
    {code:"2", author:"Biscayart, Hernán; Corrarello, Ana; Mateo, Silvia; Pérgola, Laura y Vitale, María Alejandra", year:"2019", title:"Trayectos semiológicos. Conceptos fundamentales de enunciación, ideología y polifonía", details:"Cuadernillo. Selección y adaptación de textos."},
    {code:"3", author:"Vitale, María Alejandra y Franco, Mariana", year:"2019", title:"Introducción al análisis del discurso político", details:"Cuadernillo. Selección y adaptación de textos."},
    {code:"4", author:"Bettendorff, Paulina y Vitale, Alejandra", year:"2026", title:"De la imagen analógica al discurso digital", details:"Cuadernillo. Selección y adaptación de textos."},
    {code:"A", author:"Vitale, Alejandra; Bettendorff, Paulina y Dagatti, Mariano", year:"2026", title:"Corpus para el análisis de discursos", details:"Material para análisis."}
  ],
  materialsWhere: "Los materiales de lectura se consiguen en la librería Eudeba del primer módulo del CBC.",
  timeline: [
    {date:"10/8", kind:"clase", title:"Presentación y Peirce", reading:"El estudio de los signos: introducción a “La semiótica de Peirce”."},
    {date:"13/8", kind:"lectura", title:"Peirce", reading:"Cap. I: I.1; I.1.1 sin apartados a, b y c; I.1.2; I.4.2; I.4.2.1; I.4.2.2; I.4.2.3."},
    {date:"17/8", kind:"sin-clase", title:"Feriado", reading:"Paso a la Inmortalidad del General José de San Martín."},
    {date:"20, 24 y 27/8", kind:"lectura", title:"Saussure", reading:"Cap. II: introducción; II.1; II.1.1; II.1.1.1; II.1.2; II.2; II.2.1; II.4; II.4.1; II.4.2; II.4.3; II.6; II.6.1; y “A modo de conclusión” para la comparación Peirce/Saussure."},
    {date:"31/8", kind:"lectura", title:"Géneros discursivos e ideología", reading:"Trayectos semiológicos: parte II, II.1.2.1 sobre Bajtín; parte III, III.3 sobre Van Dijk."},
    {date:"3, 7, 10 y 14/9", kind:"lectura", title:"Enunciación", reading:"Trayectos semiológicos: I.1; I.2; I.3.2; I.3.2.1; I.3.2.1.1; I.3.2.2; I.3.2.3 general; I.5 con I.5.3 general; I.4 en forma general, distinguiendo modalidades de enunciación, enunciado y mensaje."},
    {date:"17/9", kind:"repaso", title:"Repaso del primer parcial", reading:"Puesta en común del modelo de examen y criterios de respuesta."},
    {date:"21/9", kind:"sin-clase", title:"Probable asueto", reading:"Consultar avisos de la cursada por eventuales modificaciones."},
    {date:"24/9", kind:"examen", title:"Primer parcial", reading:"Evaluación de los contenidos trabajados hasta la clase de repaso."},
    {date:"28/9", kind:"lectura", title:"Polifonía", reading:"Trayectos semiológicos: negación polifónica, discurso referido y usos de comillas."},
    {date:"1, 5, 8 y 15/10", kind:"lectura", title:"Análisis del discurso político", reading:"Introducción al análisis del discurso político: III.1 Verón; II.1.2 tipos de prueba; II.1.3 lógos, con causal, pragmático, dirección, autoridad, ejemplo y analogía; II.2.1 discurso polémico con sus técnicas y figuras según el recorte; II.1.4.1 êthos en Maingueneau."},
    {date:"12/10", kind:"sin-clase", title:"Feriado", reading:"Día del Respeto a la Diversidad Cultural."},
    {date:"19, 22, 26 y 29/10; 2/11", kind:"lectura", title:"Imagen y discurso digital", reading:"De la imagen analógica al discurso digital: III.3 Gutiérrez Sanz; III.1 Cantamutto y Vela Delfa; III.2 Paveau sin memoria tecnodiscursiva; III.4 Calvo; III.5 Slimovich; I.1 Barthes; III.9 Wiggins; III.6 Vitale."},
    {date:"5/11", kind:"repaso", title:"Repaso del segundo parcial", reading:"Puesta en común del modelo de examen y criterios de respuesta."},
    {date:"9/11", kind:"examen", title:"Segundo parcial", reading:"Evaluación de los contenidos de la segunda parte de la cursada."},
    {date:"16/11", kind:"clase", title:"Entrega de notas", reading:"Comunicación de resultados y situación académica."},
    {date:"19/11", kind:"examen", title:"Recuperatorio", reading:"Para quienes cumplen las condiciones de acceso al recuperatorio."}
  ],
  evaluation: {
    partials: 2,
    rounding: "El promedio se redondea hacia arriba cuando termina en ,5. Por ejemplo, 6 y 7 dan 6,5 y el promedio final se registra como 7.",
    promotion: "Promedio de 7 o más: promoción directa.",
    regular: "Promedio entre 4 y 6: regularización y acceso a examen final como regular.",
    recovery: "Puede rendir recuperatorio quien tenga uno de los dos parciales aprobado con 4 o más y el otro desaprobado.",
    phones: "No se permite el uso de celulares durante los exámenes.",
    cards: "Se permite usar fichas en parciales y en finales como regular o remanente. No se permiten en exámenes libres.",
    review: "Cada parcial está precedido por una clase de repaso. Aproximadamente una semana o una clase antes de ese repaso se envía un modelo de examen para resolver en casa.",
    reviewWork: "En la clase de repaso se ponen en común las respuestas y se trabajan los criterios adecuados para responder las consignas. Se recomienda especialmente asistir."
  },
  finals: [
    {period:"Diciembre de 2026", enrollment:"Quienes regularizaron la materia pueden presentarse sin inscripción previa."},
    {period:"Febrero / marzo de 2027", enrollment:"Requiere inscripción como remanente a través del CBC."},
    {period:"Julio / agosto de 2027", enrollment:"Requiere inscripción como remanente a través del CBC."}
  ],
  links: [
    {label:"Campus virtual del CBC", url:"https://cbccampusvirtual.uba.ar/"},
    {label:"Sitio del CBC", url:"https://www.cbc.uba.ar/"},
    {label:"Guía de trámites del CBC", url:"https://www.cbc.uba.ar/tramites"},
    {label:"Calendario académico del CBC", url:"https://www.cbc.uba.ar/calendario-academico"},
    {label:"Google Classroom", url:"https://classroom.google.com/"},
    {label:"Instagram de la cátedra", url:"https://www.instagram.com/semiologia.cbc/"}
  ],
  guides: [
    {slug:"01-peirce", title:"Peirce: signo, objeto e interpretante", group:"Signo y semiología", status:"new"},
    {slug:"02-saussure", title:"Saussure: signo lingüístico, lengua y valor", group:"Signo y semiología", status:"new"},
    {slug:"03-peirce-saussure", title:"Peirce y Saussure: comparación", group:"Signo y semiología", status:"new"},
    {slug:"04-generos-discursivos", title:"Géneros discursivos: Bajtín", group:"Discurso, ideología y enunciación", status:"new"},
    {slug:"05-van-dijk", title:"Ideología y discurso: Van Dijk", group:"Discurso, ideología y enunciación", status:"new"},
    {slug:"06-enunciacion-deixis", title:"Enunciación y deixis", group:"Discurso, ideología y enunciación", status:"new"},
    {slug:"07-subjetivemas", title:"Subjetivemas", group:"Discurso, ideología y enunciación", status:"new"},
    {slug:"08-modalidades", title:"Modalidades", group:"Discurso, ideología y enunciación", status:"new"},
    {slug:"09-polifonia", title:"Polifonía", group:"Discurso, ideología y enunciación", status:"new"},
    {slug:"13-veron", title:"Verón: la palabra adversativa", group:"Discurso político", status:"new"},
    {slug:"10-pruebas-aristoteles", title:"Argumentación y tipos de prueba", group:"Discurso político", status:"new"},
    {slug:"11-logos", title:"Lógos: técnicas argumentativas", group:"Discurso político", status:"new"},
    {slug:"19c-discurso-polemico", title:"Discurso polémico (tuits)", group:"Discurso político", status:"existing"},
    {slug:"12-ethos-maingueneau", title:"Êthos en Maingueneau", group:"Discurso político", status:"new"},
    {slug:"18b-ethos-digital", title:"Êthos en el discurso digital", group:"Imagen y discurso digital", status:"existing"},
    {slug:"14-discurso-digital-objeto", title:"Discurso digital como objeto de estudio", group:"Imagen y discurso digital", status:"new"},
    {slug:"22-discurso-digital", title:"Discurso digital: Slimovich + Paveau", group:"Imagen y discurso digital", status:"existing"},
    {slug:"15-calvo-camara-eco", title:"La cámara de eco en Twitter: Calvo", group:"Imagen y discurso digital", status:"new"},
    {slug:"21-barthes-wiggins", title:"Barthes + Wiggins: memes", group:"Imagen y discurso digital", status:"existing"},
    {slug:"16-vitale-multimodal", title:"Discurso político multimodal en Twitter: Vitale", group:"Imagen y discurso digital", status:"new"}
  ]
};
