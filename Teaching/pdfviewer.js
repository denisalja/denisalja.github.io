// pdfViewer.js

const pdfPath = 'https://raw.githubusercontent.com/denisalja/IntroCatTheory2024/master/Course%20Notes/Notes.pdf';

pdfjsLib.getDocument(pdfPath).then(function (pdf) {
  pdf.getPage(1).then(function (page) {
    const scale = 1.5;
    const viewport = page.getViewport({ scale: scale });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    document.getElementById('pdf-viewer').appendChild(canvas);

    page.render({
      canvasContext: context,
      viewport: viewport
    });
  });
});
