// Example blog posts data
import Image from "next/legacy/image";


export const blogPosts = [
  { id: "3", 
  titleHomepage: 'Los relojes de James Bond',
  title: <><p>James Bond<br></br> Sus relojes a lo largo de los años</p></>, 
  summary: <><p>WATCH SPOTTING | Los relojes más originales y asequibles de una leyenda del cinema</p></>, 
  category: 'Watch Spotting',
  categoryTitle: <><p>WATCH SPOTTING</p></>,
  editor: 'Lluis M.',
  date: '3 Mar, 2024',
  mainPicture: '/bond/portad.png',
  content: <><div className="prose prose-lg mx-auto ">
      <div className="font-bold text-gray-500 text-center">
        Las películas de nuestro agente británico favorito siempre han sido uno de los métodos mas efectivos para promocionar dos elementos en particular: coches y relojes. La premisa es sencilla: si el agente 007 lo usa, ¡nosotros lo queremos! El problema es que los Rolex que salen en sus primeras películas tienen ya un precio totalmente demencial, y los Omegas modernos que salen en las películas de Daniel Craig están normalmente por encima de los 8 mil euros. Es por esto que el otro día mientras estaba viendo un maratón de mi James Bond favorito, Roger Moore, se me ocurrió hacer una lista de los relojes Bond que aún tienen precios razonables. Aunque muchos de ellos ya no están en producción, con suficiente destreza, es posible hallarlos en el mercado de segunda mano.        </div>
      <br></br>
      <figure className="flex justify-center my-8">
        <Image
          alt="Bond"
          className="aspect-video overflow-hidden rounded-lg object-cover"
          height={600}
          src='/bond/portad.png'
          width={900}
        />
      </figure>
      <div className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
        <br></br>

        1. Seiko ref 0674 (The spy who loved me): Este Seiko digital aparece en la primera escena de la película cuando de repente le llega un telegrama que sale directamente del reloj informando al agente que tiene que presentarse inmediatamente en HQ. Obviamente no tiene esta función en realidad, pero es divertido pensar que en los años 70 esto era considerado futurista.
      </div>
      <br></br>

      <figure className="flex justify-center my-8">
          <Image
            alt="Seiko 0674"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height={500}
            width={500}
            src='/bond/seiko 0674.png'
          />
      </figure>
      <br></br>

      <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
        2. Seiko m354 (Moonraker): Cuando el villano está intentando acabar con James de la forma mas rocambolesca posible, incinerándolo con un cohete espacial, este Seiko le salva la vida. El reloj esconde un rollo de explosivo plástico en su interior que le permite escapar a tiempo volando una puerta por los aires.    
      </p>
      <br></br>

      <figure className="flex flex-col justify-center items-center my-8">
      <Image
        alt="Seiko M354"
        className="overflow-hidden rounded-lg object-cover"
        width={500}
        height={500}
        src="/bond/seiko m354.png"
      />
      </figure>

    <br></br>

     <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>

        3. Seiko Sports 100 ref 757 (Octopussy): El mítico científico Q entrega el reloj a james como localizador para seguir la pista a un huevo de Faberge.
      </p>
      <br></br>

    <figure className="flex justify-center my-8">
      <Image
        alt="Seiko Sports 100 ref 757"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="500"
        src="/bond/seiko g757.png"
        width="500"
      />
    </figure>
    <br></br>

       <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
       

       4. Seiko spr007 (A view to a Kill): Roger Moore aparece seduciendo a una compañera llevando este bonito cronógrafo de cuarzo.
      <br></br>        
      </p>
      <br></br>        

    <figure className="flex justify-center my-8">
      <Image
        alt="Seiko spr007"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="500"
        src="/bond/seiko 7a28.png"
        width="500"
      />
    </figure>

      <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
      <br></br>

     
      5. Seiko TV (Octopussy) En el laboratorio del científico Q, Bond usa inapropiadamente una cámara conectada al curioso reloj/televisión para enfocar el escote de una compañera de trabajo.
      </p>
    <br></br>

    <figure className="flex justify-center my-8">
      <Image
        alt="Seiko TV"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="500"
        src="/bond/seiko tv.png"
        width="500"
      />
    </figure>
    <br></br>

    <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
      <br></br>

 
      6. Seiko h558 (A view to a Kill): El reloj no se aprecia bien en la muñeca de Moore durante la película, pero sabemos que lo lleva porque así lo aseguró producción y la propia Seiko.
    </p>
    <br></br>

    <figure className="flex justify-center my-8">
      <Image
        alt="Seiko H558"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="500"
        src="/bond/seiko h558.png"
        width="500"
      />
    </figure>
    <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
      <br></br>

 
      7. Seiko 7549-7009 (For Your Eyes Only): Aparece en la muñeca de bond durante una escena en el fondo del mar cuando el y su chica están investigando y se ven involucrados en una pelea submarina.
    </p>
    <br></br>

    <figure className="flex justify-center my-8">
      <Image
        alt="Seiko 7549-7009"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="500"
        src="/bond/tuna.png"
        width="500"
      />
    </figure>
    <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
      <br></br>

 
      8. Tag heuer 980.031 (The Living Daylights): Se dice que Timothy Dalton llevaba una versión en acero de este reloj en la mayor parte de la peli, pero en la escena que salta de Gibraltar se ve una versión de este reloj en PVC negro, el apodado Night Diver.
    </p>
    <br></br>

    <figure className="flex justify-center my-8">
      <Image
        alt="Tag heuer 980.031"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="500"
        src="/bond/tag heuer.png"
        width="500"
      />
    </figure>
    <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
      <br></br>

 
      9. Tissot PR-516 (Live and Let Die): Tissot no pretendía publicitar este reloj, de hecho se dice que era del propio Roger Moore. Por eso intentaron que no apareciera directamente en muchos planos. 
         </p>
    <br></br>

    <figure className="flex justify-center my-8">
      <Image
        alt="Tissot PR516"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="500"
        src="/bond/tissotpr516.png"
        width="500"
      />
    </figure>
    <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
      <br></br>

 
      10. Hamilton Pulsar P2 2900 (Live and Let Die): Fue el primer reloj digital y cambio la historia de la relojería para siempre. En 1970 costaba alrededor de unos 13 mil euros de hoy en día. En 2020 Hamilton lo volvió a fabricar a un precio de unos 760 euros.    
      </p>
      <br></br>


    <figure className="flex justify-center my-8">
      <Image
        alt="Hamilton Pulsar P2 2900"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="500"
        src="/bond/hamilton pulsar.png"
        width="500"
      />
    </figure>
  </div></>},
  { id: "2", 
    titleHomepage: 'Seagull 1963',
    title: <><p>Seagull 1963<br></br> Cronógrafo Militar Chino con ADN Suizo</p></>, 
    summary: <><p>RESEÑA | Un cronógrafo manual con historia en el uso militar</p></>, 
    category: 'Story',
    categoryTitle: <><p>RESEÑA</p></>,
    editor: 'Lluis M.',
    date: '20 Feb, 2024',
    mainPicture: '/seagull/portada.jpg',
    content: <><div className="prose prose-lg mx-auto ">
        <div className="font-bold text-gray-500 text-center">
          Normalmente, cuando alguien dice que un reloj es CHINO, todos arrugamos automáticamente la nariz como si de la peste se tratase, e inevitablemente vienen a la mente las terribles copias que se han hecho durante décadas y que han dañado inmensamente al mercado. Es por eso que os quiero dar el chivatazo de que hay un reloj chino que está muy orgulloso de serlo y que ha cerrado la boca de miles de coleccionistas a lo largo de los años, convirtiéndose en un reloj de culto.        
          </div>
        <br></br>
        <figure className="flex justify-center my-8">
          <Image
            alt="Seagull 1963"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height={800}
            src='/seagull/portada2.jpg'
            width={600}
          />
        </figure>
        <div className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
          <br></br>

          En 1955, poco después de que el Partido Comunista Chino ganara la guerra civil estableciendo su poder, se lanzó un proyecto secreto llamado D304. Este proyecto consistía en crear un cronógrafo de cuerda manual para el ejército (Imagen de <a href="https://www.wikipedia.com/" target="_blank" rel="noopener noreferrer">Wikipedia</a>) que fuera suficientemente preciso, fiable y económico para uso militar. El proyecto se lanzó en secreto debido a que la patente que compraron para manufacturar la maquinaria era de origen suizo (el popular calibre 175 de Venus) y el Gobierno Comunista no quería manifestar que necesitaba tecnología occidental.        

        </div>
        <br></br>

        <figure className="flex justify-center my-8">
            <Image
              alt="Aviadores China"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height={400}
              width={600}
              src='/seagull/aviones.jpg'
            />
        </figure>
        <br></br>

        <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
          El trabajo de los relojeros encargados del proyecto era montar una fábrica para producir en masa este mecanismo suizo de manufactura china, la famosa &quot;Tianjin Watch Factory&quot;. Además, los chinos se tomaron la libertad de modificar el calibre añadiendo más rubíes, pasando de 17 a los actuales 21, e incrementando la frecuencia a 21,600 Vph. En 1963 se creó el prototipo final del reloj, pero no se entregó a los pilotos y oficiales del ejército hasta pasar las estrictas pruebas de calificación militar en 1965.  
      
        </p>
        <br></br>

        <figure className="flex flex-col justify-center items-center my-8">
        <Image
          alt="Seagull Watch Company"
          className="overflow-hidden rounded-lg object-cover"
          width={600}
          height={340}
          src="/seagull/logo.png"
        />
        </figure>

      <br></br>

       <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>


          El reloj tuvo gran éxito en el país y en 1997 el gobierno permitió que se creara el grupo Seagull (Imagen de <a href="https://www.seagullwatchcompany.com/" target="_blank" rel="noopener noreferrer">Seagull Watch Company</a>) para exportar sus relojes al extranjero. Debido a que pasó de una empresa del gobierno a una corporación semi-privada, el grupo actual está formado por unos 20 fabricantes distintos que, en teoría, hacen el mismo producto. A causa de esto y de la opacidad de un país como China, hoy en día es imposible saber de dónde viene exactamente tu reloj. Entre los múltiples fabricantes, en ocasiones, se observan ligeras diferencias en los mecanismos y en la parte posterior de la caja junto a una ligera variación de precios.
        </p>
        <br></br>

      <figure className="flex justify-center my-8">
        <Image
          alt="Orient Blue Ray II"
          className="aspect-video overflow-hidden rounded-lg object-cover"
          height="800"
          src="/seagull/formal.jpg"
          width="600"
        />
      </figure>
      <br></br>

         <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
          En el panorama de los relojes actuales, los cronógrafos manuales con estas características no son nada fáciles de encontrar, y si los encuentras tienen precios bastante por encima de los 2000 euros. El Seagull 1963 no solo ofrece un look y una mecánica vintage en estos tiempos modernos, sino que además lo hace por precios que empiezan a partir de los 200 euros.         
          <br></br>
          <br></br>


          En los últimos años se han lanzado varios modelos con diferentes colores, tamaños y materiales. Básicamente existen dos tamaños para este reloj: 40 mm y 38 mm, entre los cuales hay la opción de cristal de zafiro o plexiglás con diferentes colores de dial y alguna edición limitada. El Seagull 1963 más fiel al modelo original sería un diámetro de caja de 38 mm y unos 13,5 mm de grosor con un cristal de plexiglás y un dial color champagne.
          El reverso del reloj tiene un fondo de caja en cristal que muestra el impresionante calibre decorado con tornillos azules, que simulan el endurecimiento térmico que llevan algunos relojes de lujo. Los acabados y la decoración son muy decentes sin dejar boquiabierto a nadie, como cabe esperar de un reloj de este precio.
          <br></br>        
        </p>
        <br></br>        

      <figure className="flex justify-center my-8">
        <Image
          alt="Orient Blue Ray II"
          className="aspect-video overflow-hidden rounded-lg object-cover"
          height="800"
          src="/seagull/darrere.jpg"
          width="600"
        />
      </figure>

        <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
        <br></br>

        La resistencia al agua anunciada son unas 3 atmósferas o 30 metros, pero... ¡ni se te ocurra acercarte al agua con este reloj! Yo, por norma general, prácticamente ni me lavo las manos con un reloj a no ser que tenga una resistencia al agua de, como mínimo, 100 m. Para nadar en el mar ya tiene que tener una resistencia al agua de 200 m o más, que es el punto de partida en el que empiezo a considerar que un reloj es sumergible. ¡No cometáis los errores que he cometido yo en el pasado y ahorraros la desgracia de que os entre agua en la maquinaria y tengáis que tirar el reloj a la basura!       
         <br></br>
        <br></br>

        Para la gente más técnica, el calibre de Seagull ST-19 tiene además dos rasgos muy interesantes a destacar, que son la rueda de pilares y el embrague vertical, en lugar de uno lateral. Esto finalmente se traduce en una acción del cronógrafo más suave, lo cual incluso dentro de la saga de cronógrafos suizos es algo que pocos tienen el lujo de presumir. La gente normalmente no lo sabe, pero la complicación de un cronógrafo manual es una de las complicaciones más difíciles de diseñar y ensamblar, con un número de piezas móviles y estáticas que pueden llegar a duplicar las de un calibre automático normal.       
      </p>
      <br></br>

      <figure className="flex justify-center my-8">
        <Image
          alt="Rueda de pilares"
          className="aspect-video overflow-hidden rounded-lg object-cover"
          height="500"
          src="/seagull/rueda.jpg"
          width="600"
        />
      </figure>
      <br></br>

      <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
        <br></br>

        Lo primero que me impactó cuando recibí mi Seagull 1963 hará poco más de un año, fue que es mucho más bonito en persona que en fotos o vídeos. Yo me decanté por la versión de 38 mm con cristal de zafiro porque quería tener un reloj lo más cercano al original posible, pero con las ventajas del zafiro para llevar a diario. La correa nato en verde militar que viene con el reloj es bonita y le da un look increíble, pero es de una calidad pobre y se desgasta más rápido de lo que debería. La mejor opción será eventualmente comprarle una correa de cuero que le queda increíble o otra nato verde de mejor calidad.
        <br></br>
        <br></br>


        El hecho de que sea manual y no automático significa que le tengo que dar cuerda todos los días antes de ponérmelo,  pero esto es también gran parte del encanto de tener una pieza así en tu colección. Le he dado un par de golpes accidentales y el reloj ha respondido bien, sigue en perfectas condiciones y funciona con normalidad, lo cual me da a entender que es un reloj robusto y fiable.
        <br></br>
        <br></br>

        En conclusión diré que si realmente estas buscando un autentico cronógrafo per menos de 1000 euros la respuesta es simple, cómprate el Seagull 1963. No es que sea la mejor opción, sino que es la única opción. Si eres capaz de superar el estigma de que algo es Made in China podrás disfrutar de esta belleza como el resto de nosotros. 

      </p>
      <br></br>

      <figure className="flex justify-center my-8">
        <Image
          alt="Seagull 1963"
          className="aspect-video overflow-hidden rounded-lg object-cover"
          height="700"
          src="/seagull/zoom.jpg"
          width="600"
        />
      </figure>
    </div></>},
  { id: "1", 
  titleHomepage: 'Orient Blue Ray II',
  title: <><p>Orient Blue Ray II <br></br> El Mejor Diver por Menos de 200 €</p></>, 
  summary: <><p>RESEÑA | Un auténtico diver Japonés a prueba de balas, con un precio para cualquier bolsillo</p></>, 
  category: 'Story',
  categoryTitle: <><p>RESEÑA</p></>,
  editor: 'Lluis M.',
  date: '13 Feb, 2024',
  mainPicture: '/orientBlue/edited/portada.jpg',
  content: <><div className="prose prose-lg mx-auto ">
      <div className="font-bold text-gray-500 text-center">
        En este artículo, hablaré del Orient Blue Ray II, mi primer reloj de buceo que compré hace ya 7 años. Entraremos en detalle sobre mi experiencia, la marca Orient y explicaré por qué considero que este es el mejor diver que puedes adquirir por menos de 200 euros.
      </div>
      <br></br>
      <figure className="flex justify-center my-8">
        <Image
          alt="Orient Blue Ray II"
          className="aspect-video overflow-hidden rounded-lg object-cover"
          height={340}
          src="/orientBlue/edited_camisa.png"
          width={600}
        />
      </figure>
      <div className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
        <br></br>

        La historia de Orient comenzó en 1901 con Shogoro Yoshida en una pequeña tienda de relojes de bolsillo importados en el barrio de Ueno, Tokio, llamada &quot;Yoshida Watch Shop&quot;. Entre 1901 y 1934, la tienda pasó de comprar y vender relojes a fabricar sus propios relojes de pulsera y otros instrumentos de medición, inaugurando su primera fábrica en Hino, Tokio.
        <br></br>
        <br></br>

        Lamentablemente, la derrota de Japón en la Segunda Guerra Mundial obligó a cerrar sus puertas, pero en 1950, la compañía reabrió en la misma fábrica de Hino y un año después fue renombrada como la conocemos hoy en día: &quot;Orient Watch Company Limited&quot;.         
        <br></br>
        <br></br>

        En 2001, el grupo Epson (una de las compañías que forma Seiko) adquirió el 52% de Orient, convirtiéndose en el accionista mayoritario. Este hecho es relevante porque nos ayuda a explicar por qué Seiko ha dado un paso atrás en los últimos años con los divers de menos de 400 euros; el grupo se estaba canibalizando a sí mismo con relojes como el SKX y el Monster. Por eso han dejado esa franja de mercado a Orient y se han ido a conquistar nuevas cotas, como la de relojes entre 400 y 600 euros.
      </div>
      <br></br>

      <figure className="flex justify-center my-8">
          <Image
            alt="Orient Blue Ray II"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height={400}
            width={600}
            src="/orientBlue/edited/sunlight.jpg"
          />
      </figure>
      <br></br>

      <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
        La marca cumplió 70 años de historia en 2020, lo que es realmente impresionante, especialmente considerando que sobrevivieron a la crisis del cuarzo en los años 70. Por tanto, Orient es una marca con una larga historia y un verdadero prestigio. Desde sus inicios, el objetivo de Orient ha sido &quot;Ofrecer relojes de calidad a un precio asequible y con un estilo atemporal&quot;, y eso es exactamente lo que hacen. A lo largo de su historia, han creado modelos realmente emblemáticos, como el Ray y el Bambino.
        <br></br>
        <br></br>
        En mi opinión, el diseño original era más auténtico, pero comprendo que desde un punto de ingeniería, especialmente para un reloj diseñado para buceo, cuantos menos posibles puntos de acceso para el agua, mejor. Ahora, la función del día del mes y la semana se regula desde la corona principal, como es normal en la mayoría de relojes de buceo.
        <br></br>
        <br></br>
        Durante sus primeros años de vida, el Orient Ray rivalizó de tú a tú con el legendario Seiko SKX007 (Imagen de <a href="https://www.namokimods.com/" target="_blank" rel="noopener noreferrer">NamokiMODS</a>), un reloj con prestaciones y funcionalidad similares, aunque con algunas diferencias, como la certificación ISO para buceo del SKX y su cristal de plexiglás. Es un reloj de culto que lamento no haber comprado a tiempo, ya que Seiko decidió dejar de fabricarlo en 2019 después de 20 años dominando el mercado y ahora los precios son desorbitados.
    
      </p>
      <br></br>

      <figure className="flex flex-col justify-center items-center my-8">
      <Image
        alt="Seiko SKX007"
        className="overflow-hidden rounded-lg object-cover"
        width={600}
        height={340}
        src="/orientBlue/edited/seiko.webp"
      />
      </figure>

    <br></br>

      <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
        El Orient Blue Ray II tiene un diámetro de 41,5 mm, 48,5 mm de punta a punta y 13 mm de grosor, medidas bastante contenidas para un diver. Lleva una maquinaria original de Orient llamada F6922, con una precisión registrada de fábrica de aproximadamente +-15 segundos al día y una reserva de marcha de unas 40 horas con complicación de día y fecha. 
        <br></br>
        <br></br>

        La resistencia al agua es de 200 metros, lo que lo convierte en un auténtico reloj de buceo. Además, cuenta con una corona firmada de rosca, como no podría ser de otra forma en un diver, y un reverso de la caja con los icónicos delfines que suelen llevar los divers de Orient.
        El bisel es de aluminio, resistente a los golpes y fácil de cambiar si fuera necesario. El cristal es mineral, un punto intermedio entre zafiro y plexiglás, que ha demostrado ser duradero a lo largo de los años.

      </p>
      <br></br>

    <figure className="flex justify-center my-8">
      <Image
        alt="Orient Blue Ray II"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="600"
        src="/orientBlue/edited/formal.jpg"
        width="600"
      />
    </figure>
    <br></br>

        <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
        Este reloj te ofrece dos opciones de correas: puedes elegir entre una pulsera metálica de acero inoxidable o una correa de caucho adornada con los emblemáticos delfines de Orient. Personalmente, siempre te aconsejaría optar por el brazalete metálico cuando estés ante la decisión de escoger entre diferentes materiales para tu nuevo reloj.    
        <br></br>
        <br></br>

        ¿La razón? Es bastante simple desde el punto de vista financiero: el brazalete metálico siempre es la mejor elección. Si optas por él, siempre podrás encontrar correas de otros materiales a buen precio que combinarán perfectamente. Pero, si decides empezar con otra correa y luego quieres cambiar a la metálica, te costará más y, en muchos casos, afectará al valor de reventa del reloj si no es el brazalete original.
        Sin embargo, después de decir todo esto, quiero señalar que en este caso particular, el brazalete metálico no merece la pena. Lo compré y al verlo me di cuenta de que la calidad no estaba a la altura del resto del reloj; parece de un tipo de acero diferente al de la caja y se raya con mucha facilidad, como podrás apreciar en la foto.
        <br></br>
        <br></br>

        Además, el cierre no es nada seguro. Una vez incluso me saltó sin darme cuenta y perdí el reloj durante un par de días. Lo que quiero decir es que con un reloj de este precio no se puede pedir mucho más y la correa de caucho que viene de serie es de suficiente buena calidad y mucho más cómoda. Además, con la opción de caucho en Amazon, se ahorrarán unos 30 euros, que pueden usar para comprar una buena nato o una correa de caucho de mejor calidad, como acabé haciendo yo igualmente.          
      
      </p>

    <figure className="flex justify-center my-8">
      <Image
        alt="Orient Blue Ray II"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="340"
        src="/orientBlue/edited/correa.jpg"
        width="600"
      />
    </figure>

      <p className="text-gray-500 text-balance" style={{textAlign: "justify"}}>
      <br></br>

      En mi experiencia personal, este reloj ha superado todas mis expectativas. Lo compré buscando un diver versátil para el verano y ha entregado prestaciones y fiabilidad muy superiores a su precio. De hecho, a pocas semanas de escribir este artículo, metí el reloj por accidente a la lavadora a unas 1000 rpm durante una hora y está como nuevo, lo cual es francamente increíble. A lo largo de los años, hemos compartido miles de aventuras por todo el mundo, y le he atribuido un valor sentimental que supera con creces su valor económico. Es un compañero fiel que puedo llevar tanto en ocasiones semi-formales como para actividades deportivas sin preocuparme por rascarlo o darle algún que otro golpe.
      <br></br>
      <br></br>

      En conclusión, los relojes Orient, especialmente el Blue Ray II, ofrecen una calidad excepcional a un precio asequible. Otros modelos como el Kamasu o el Mini Neptune también son excelentes opciones, pero en mi opinión, el Blue Ray II sigue destacando por su relación calidad-precio. 
      <br></br>
      <br></br>

      Si estás considerando adquirir este reloj, no lo pienses más, ¡te aseguro que no te arrepentirás!        
    </p>
    <br></br>

    <figure className="flex justify-center my-8">
      <Image
        alt="Orient Blue Ray II"
        className="aspect-video overflow-hidden rounded-lg object-cover"
        height="400"
        src="/orientBlue/edited/aigua.jpg"
        width="600"
      />
    </figure>
    <br></br>
  </div></>}
  ];