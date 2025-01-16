function getSpreadSheetData() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DADOS');
    spreadsheet.insertRowBefore(4);
    var textMensage = "";
    for (var i = 1; i <= 7; i++) {
      if (i != 1) {
        textMensage += spreadsheet.getRange(1, i).getValue() + " = " + spreadsheet.getRange(2, i).getValue() + "\n";
      } 
      spreadsheet.getRange(4, i).setValue(spreadsheet.getRange(2, i).getValue());
    }
    clean();
    correcao_formula();
    atualizaDados();
    return textMensage;
  }
  
  function clean() {
    var spreadsheet = SpreadsheetApp.getActive().getSheetByName('consumo_Tanque_O2');
    spreadsheet.getRange('E3').activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  }
  
  function onOpen() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var filtroSheet = spreadsheet.getSheetByName("filtros");
    var dataSheet = spreadsheet.getSheetByName("DADOS");
  
    var dataRanges = ["A2", "A4", "A5", "A6", "A7", "A8", "A9"];
    var filtroRangesB = ["B3", "B4", "B5", "B6", "B7", "B8", "B9"];
    var filtroRangesD = ["D3", "D4", "D5", "D6", "D7", "D8", "D9"];
  
    for (var i = 0; i < dataRanges.length; i++) {
      filtroSheet.getRange(filtroRangesB[i]).setValue(dataSheet.getRange(dataRanges[i]).getValue());
      filtroSheet.getRange(filtroRangesD[i]).setValue(dataSheet.getRange(dataRanges[i].replace("A", "E")).getValue());
    }
  }
  
  
  
  
  