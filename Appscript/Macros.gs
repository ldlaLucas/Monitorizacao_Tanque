function Ocultar() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('24:67').activate();
  spreadsheet.getActiveSheet().hideRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  spreadsheet.getRange('68:68').activate();
};

function myFunction() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('E3').activate();
};

function correcao_formula() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('DADOS!E2').activate();
  spreadsheet.getCurrentCell().setFormula('=if(($B$4-B2)>0;$B$4-B2;"Saldo positivo")');
  spreadsheet.getRange('DADOS!E3').activate();
};

function atualizaDados() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('DADOS!B2').activate();
  spreadsheet.getCurrentCell().setFormula('=consumo_Tanque_O2!E3');
  spreadsheet.getRange('DADOS!B3').activate();
};

