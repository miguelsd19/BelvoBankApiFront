import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ImagenFondo from '../../assets/1erPagina.png';


export async function generatePDF(RawData, UserData, ClientName ) {

  return new Promise(function(resolve) {
    console.log(UserData)
    
    const doc = new jsPDF('landscape','pt', 'letter');

    const tableConfig = {
      margin: { top: 100 },
      headStyles: { fillColor: '#0170c1', textColor: [255, 255, 255], cellPadding: 8},
      bodyStyles: { fontStyle: 'bold', textColor: '#001a2b', cellWidth: 'auto', cellPadding: 10},
      fontStyle: 'normal',
      theme: 'grid',
      styles: {lineWidth: 0.5, lineColor: "#003f69", valign: 'middle', halign: 'center'}
    };
    const tableConfigP2 = {
      margin: { top: 100 },
      headStyles: { fontSize: 18, fillColor: '#00b0f0', textColor: [0, 0, 0], cellPadding: 4, halign: 'center',},
      bodyStyles: { fillColor: false, fontSize: 15, fontStyle: 'normal', textColor: '#001a2b', cellWidth: 'auto', cellPadding: 10, halign: 'left',},
      fontStyle: 'normal',
      theme: 'striped',
      styles: { lineWidth: 0.0, lineColor: "#003f69"},
    };

    const tableConfigP3 = {
      margin: { top: 90 },
      headStyles: { fontSize: 16, fillColor: '#44f6d4', textColor: [0, 0, 0], cellPadding: 4, halign: 'center'},
      bodyStyles: { fillColor: false, fontSize: 10, fontStyle: 'normal', textColor: '#001a2b', cellWidth: 'auto', cellPadding: 4, halign: 'left'},
      fontStyle: 'normal',
      theme: 'striped',
      styles: {lineWidth: 0.2, lineColor: "#c2c5cc"}
    };
/*
    const tableConfigP5 = {
      margin: { top: 90 },
      headStyles: { fontSize: 10, fillColor: '#343273', textColor: [255, 255, 255], cellPadding: 14, halign: 'center'},
      bodyStyles: { fillColor: false, fontSize: 9, fontStyle: 'normal', textColor: '#001a2b', cellWidth: 'auto', cellPadding: 15, halign: 'left'},
      fontStyle: 'normal',
      theme: 'striped',
      styles: {lineWidth: 0.2, lineColor: "#c2c5cc"}
    };
    */
    /*
    const tableConfigP6 = {
      margin: { top: 170 },
      headStyles: { fontSize: 12, fillColor: '#00b0f0', textColor: [0, 0, 0], cellPadding: 4, halign: 'center', },
      bodyStyles: { fillColor: false, fontSize: 10, fontStyle: 'normal', textColor: '#001a2b', cellWidth: 'auto', cellPadding: 4, halign: 'left', cellStyles: { lineHeight: 0}}, // reducir el interlineado a la mitad},
      fontStyle: 'bold',
      theme: 'grid',
      styles: {lineWidth: 0.1, lineColor: "#c2c5cc"}
    };*/
    const tableConfigP7 = {
      margin: { top: 170 },
      headStyles: { fontSize: 16, fillColor: '#44f6d4', textColor: [0, 0, 0], cellPadding: 4, halign: 'center'},
      bodyStyles: { fillColor: false, fontSize: 14, fontStyle: 'normal', textColor: '#001a2b', cellWidth: 'auto', cellPadding: 10, halign: 'left'},
      fontStyle: 'normal',
      theme: 'striped',
      styles: {lineWidth: 0.2, lineColor: "#c2c5cc", columnWidth: 350},
    };

    const pageOptions = {
      pageNumber: '{page_number_string}',
      totalPages: '{total_pages_count_string}',
      pageMargin: 20,
      pageBreak: 'auto',
      y: doc.lastAutoTable.finalY + 10
    };
    
    const imgWidth = doc.internal.pageSize.getWidth();
    const imgHeight = doc.internal.pageSize.getHeight();

    doc.addImage(ImagenFondo, "PNG", 0, 0, imgWidth, imgHeight, "", "FAST");
    doc.addPage();


    // Imagen de fondo
    const img = new Image();
    img.src = require("../../assets/fondo-science.png");
    img.onload = function() {
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = doc.internal.pageSize.getHeight();
      doc.addImage(this, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
    
      // -------- Pagina 2 ---------

      const DatosImportantesHeader = [['DATOS IMPORTANTES']];

      const DataImportante = [[{content:`- LO QUE NO SE PUEDE MEDIR NO SE PUEDE MEJORAR. UN DIARIO DE ENTRENAMIENTO ES
      LO IDEAL PARA MEDIR SU PROGRESO, ANOTAR CADA SERIE, CUANTO PESO SE MOVIÓ,
      CUANTAS REPETICIONES SE LOGRARON SACAR DE CADA EJERCICIO Y TUS
      REPETECIONES EN RESERVA (RIR). PUEDES USAR TU CELULAR, UN TENER NUESTRO
      “DIARIO DE ENTRENAMIENTO S&H”`, fontStyle: 'bold'}],[ `- EL RIR (REPETICONES EN RESERVA) ES LA INTENSIDAD CON LA QUE TIENE QUE ESTAR
      TRABAJANDO EN TODOS LOS EJERCICIOS, SI LE PROGRAMAMOS UN RIR 1-2 QUIERE
      DECIR QUE SE QUEDARA CON 1 O 2 REPETICIONES ANTES DE LLEGAR AL FALLO
      MUSCULAR (DONDE NO PUEDE REALIZAR NI UNA REPETICIÓN MAS).
      `],[ `- SI AL FINALIZAR LA SERIE SE RECUPERA MUY RAPIDO Y SIENTE QUE NO NECESITA EL
      MINIMO TIEMPO DE DESCANSO MARCADO, ESTO SIGNIFICA QUE NO SE EXIGIÓ LO
      SUFICIENTE, POR LO TANTO, SU RIR (GRADO DE ESFUERZO) NO FUE REAL`] ];

      
      const P2options={
        head: DatosImportantesHeader,
        body: DataImportante,
        ...tableConfigP2,
        ...pageOptions,
        tableLineColor: '#4674c2',
        tableLineWidth: 3,
        cellWidth: 100,
        cellHeight: 50,
      }

      doc.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
      doc.autoTable(P2options);
      doc.addPage();
      

      // -------- Pagina 3 ---------

      const DatosInstruccionesHeader = [[{content: `MESO CICLO ${UserData.Mesociclo.toUpperCase()}`, colSpan: 1, styles: {cellPadding: 5, fontSize: 18, fillColor: '#00b0f0', textColor: '#000', halign: 'center'}}  ],['INSTRUCCIONES']];

      const DataInstrucciones = [[UserData.Instrucciones1.toUpperCase()],[ UserData.Instrucciones2.toUpperCase()],
      [UserData.Instrucciones3.toUpperCase()], [ UserData.Instrucciones4.toUpperCase()] ]
      
      const P31options={
        head: DatosInstruccionesHeader,
        body: DataInstrucciones,
        ...tableConfigP3,
        ...pageOptions,
        tableLineColor: '#4674c2',
        tableLineWidth: 3,
        cellWidth: 100,
        cellHeight: 50,
      }

      doc.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
      doc.autoTable(P31options);


      // -------- Pagina 4 ---------

      const DatosInstrucciones2Header = [[{content: `IMPORTANTE`, colSpan: 1, styles: {cellPadding: 5, fontSize: 18, fillColor: '#00b0f0', textColor: '#000', halign: 'center'}}  ],['INSTRUCCIONES']];

      const DataInstrucciones2 = [['CALENTAMIENTO: REALIZAR 5 MINUTOS DE EJERCICIOS CARDIORRESPIRATORIO CON EL OBJETIVO DE ELEVAR SU TEMPERATURA CORPORAL Y POSTERIORMENTE REALIZAR ESTIRAMIENTOS DINÁMICOS DE MÚSCULOS QUE SE VAYAN A TRABAJAR 2 A 3 SERIES DE 15-20 REPS POR CADA MUSCULO.'],
      [ `ACTIVIDAD FISICA: DIARIAMENTE CUMPLIR CON ${UserData.PasosAct} PASOS DIARIOS DE LA MANERA QUE GUSTE, ESTO APARTE DEL EJERCICIO CARDIORRESPIRATORIO QUE SE LE HAYA PROGRAMADO. LOS PASOS SON UNA UNIDAD DE MEDIDA DE CUANTO SE MUEVE A LO LARGO DEL DÍA (NEAT). UTILICE UN RELOJ CONTADOR DE PASOS O CON SU CELULAR (SI SU CELULAR NO CUENTA CON ALGUNA APP DE SALUD, BUSQUE EN LA TIENDA DE APLICACIONES DE SU CELULAR “CONTADOR DE PASOS DIARIOS” Y DESCARGUE LA APP DE SU PREFERENCIA)`],
      [ `HORAS DE SUEÑO: PARA UNA RECUPERACIÓN MUSCULAR EFECTIVA DORMIR AL MENOS 7HRS (OPTIMAS HORAS 8HRS – 9HRS) `], 
      [ `DIAS DE DESCANSO: CUMPLIR CON ${UserData.PasosRest} PASOS`],
      [ {content: `EN EL ENTRENAMIENTO: COLOR BLANCO INDICA QUE ES SERIE INDIVIDUAL`, colSpan: 1, styles: {cellPadding: 3, fontSize: 10, halign: 'left', fontStyle: 'bold'}}],
      [ {content: `EN EL ENTRENAMIENTO: COLOR VERDE INDICA QUE ES BISERIE 1`, colSpan: 1, styles: {cellPadding: 3, fontSize: 10, fillColor: "#66ffff", halign: 'left', fontStyle: 'bold'}}],
      [ {content: `EN EL ENTRENAMIENTO: COLOR AZUL INDICA QUE ES BISERIE 2`, colSpan: 1, styles: {cellPadding: 3, fontSize: 10, fillColor: "#81caff", halign: 'left', fontStyle: 'bold'}}],
      [ {content: `EN EL ENTRENAMIENTO: COLOR GRIS INDICA QUE ES TRISERIE 1`, colSpan: 1, styles: {cellPadding: 3, fontSize: 10, fillColor: "#d0cece", halign: 'left', fontStyle: 'bold'}}],
      [ {content: `EN EL ENTRENAMIENTO: COLOR MORADO INDICA QUE ES TRISERIE 2`, colSpan: 1, styles: {cellPadding: 3, fontSize: 10, fillColor: "#8eaadb", halign: 'left', fontStyle: 'bold'}}] ]
      
      const P41options={
        head: DatosInstrucciones2Header,
        body: DataInstrucciones2,
        ...tableConfigP3,
        ...pageOptions,
        tableLineColor: '#4674c2',
        tableLineWidth: 3,
        cellWidth: 100,
        cellHeight: 50,
      }

      doc.autoTable(P41options);
      doc.addPage();

      // -------- Pagina 7 ---------

      doc.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');

      const CardioHeader = [[{content: `PROGRAMA DE ENTRENAMIENTO CARDIORRESPIRATORIO`, colSpan: 2, styles: {cellPadding: 5, fontSize: 18, fillColor: '#00b0f0', textColor: '#000', halign: 'center'}}],[{ content: UserData.CardioType.toUpperCase(), colSpan: 2 }]];

      const DataCardio = [
        [`DURACION`, UserData.CardioDuration.toUpperCase()],
        [ `RITMO`, UserData.CardioRitmo.toUpperCase()],
        [ `FRECUENCIA SEMANAL`, UserData.CardioWeeklyFreq.toUpperCase()], 
        [ `OPCIONES`, UserData.CardioOptions.toUpperCase()], 
        [ `NOTAS`, UserData.CardioNotes.toUpperCase()] ]
      
      const P7options={
        head: CardioHeader,
        body: DataCardio,
        ...tableConfigP7,
        ...pageOptions,
        tableLineColor: '#4674c2',
        tableLineWidth: 3,
        cellWidth: 100,
        cellHeight: 50,
        willDrawCell: function (data) {
          if(data.column.index < 1){
            doc.setFont('helvetica', 'bold');
          }
        }
      }

      
      doc.autoTable(P7options);
      doc.addPage();

      // -------- Paginas de Entrenamiento ---------
      const instruccionesTraining = 'HAZ CLICK EN EL EJERCICIO PARA VER UN VIDEO DEMOSTRATIVO';
      

    for (let i=0;i<RawData.length;i++){
      if (i > 0) {
        doc.addPage();
      }
      doc.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
      // Cabecera
      
      const header = [[{content: `Sesión ${i + 1}`, colSpan: 7, styles: {cellPadding: 1, fontSize: 16, fillColor: '#00b0f0', textColor: '#000', halign: 'center'}}  ], ['musculo','ejercicio','notas','descanso', 'series', 'repeticiones', 'rir']];
      const data = RawData[i].map(obj => [
          obj.musculo,
          obj.ejercicio,
          obj.notas,
          obj.descanso,
          obj.series,
          obj.repeticiones,
          obj.rir,
          obj.url,
          obj.tipo
      ]);
      const options = {
        head: header,
        body: data,
        willDrawCell: function (data) {
          //var rows = data.table.body;
          let tipo = data.row.raw[8]; 
          switch(tipo) {
            case 'Biserie 1':
              doc.setFillColor(102,255,255); 
              doc.setLineWidth(0.1);
              break;
            case 'Biserie 2':
              doc.setFillColor(129,202,255);
              doc.setLineWidth(0.1);
              break;
            case 'Triserie 1':
              doc.setFillColor(208,206,206);
              doc.setLineWidth(0.1);
              break;
            case 'Triserie 2':
              doc.setFillColor(142,170,219);
              doc.setLineWidth(0.1);
              break;
          }

          if(data.column.index > 1){
            doc.setFont('helvetica', 'normal');
          }
        },
        didDrawCell: function (data) {
          if (data.cell.raw !== "" && data.column.dataKey == 1) {
        
            const url = data.row.raw[7];
            let text = data.cell.raw;
            var linkWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize();
            doc.link(data.cell.x, data.cell.y, linkWidth, data.cell.height, { url: url });
          }
        },
        didParseCell: async function (data) {
         data.cell.text = data.cell.text[0].toUpperCase();
        },
        ...tableConfig,
        ...pageOptions,
        tableLineColor: '#003f69',
        tableLineWidth: 0.5,
        cellWidth: 100,
        cellHeight: 50,
      };
      doc.autoTable(options);
      const tablePosTraining = doc.autoTable.previous.finalY;
      const instruccionesLinesTraining = doc.splitTextToSize(instruccionesTraining, doc.internal.pageSize.width );
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold')
      doc.text(instruccionesLinesTraining, doc.internal.pageSize.width / 2 - 350, tablePosTraining + 15, { align: 'left' });
  }

      
  doc.save("PROGRAMA DE ENTRENAMIENTO MESO CICLO X " + ClientName)  
  }
      resolve(true);
  });
    
}
