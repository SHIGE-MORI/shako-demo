async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const parking = document.getElementById("parking").value;
  const carname = document.getElementById("carname").value;
  const chassis = document.getElementById("chassis").value;

  doc.setFontSize(14);
  doc.text("車庫証明 申請書（簡易版）", 20, 20);

  doc.setFontSize(12);
  doc.text(`申請者氏名：${name}`, 20, 40);
  doc.text(`住所：${address}`, 20, 50);
  doc.text(`保管場所：${parking}`, 20, 60);
  doc.text(`車名：${carname}`, 20, 70);
  doc.text(`車台番号：${chassis}`, 20, 80);

  doc.save("shako-demo.pdf");
}
