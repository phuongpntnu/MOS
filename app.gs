function doGet(e) {

	var params = e.parameter;

	var SpreadSheet = SpreadsheetApp.openById("https://docs.google.com/spreadsheets/d/1J1YCaMWy6yMj0powLBdYpywcP2Uqu1iyJqFkQn3Ts4s/edit?usp=sharing");
	var Sheet = SpreadSheet.getSheets()[0];
	var LastRow = Sheet.getLastRow();

	Sheet.getRange(LastRow+1, 1).setValue(params.name);
	Sheet.getRange(LastRow+1, 2).setValue(params.mail);
	Sheet.getRange(LastRow+1, 3).setValue(params.formid);

	for (var i = 1; i <= 3; i++) {
		Sheet.getRange(LastRow+1, 3+i).setValue(params["q" + i.toString()]);
	}

	return ContentService.createTextOutput(params.thank);
}
