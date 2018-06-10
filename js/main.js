var chooseServers = [
	["Server1", ""],
	["Server2", ""],
	["Server3", ""],
	["Server4", ""]
];

$("document").ready(function() {
	loadServers();
});

function loadServers() {
	$('<select id="chooseServer" class="form-control chooseServer" onchange="setCurrentServer($(\'#chooseServer\').val())"></select>').insertAfter("#skin_url");


	// Default server
	$("#chooseServer").append('<option value="Default" disabled default selected style="display: none;">Choose Server</option>');
	for (var i = 0; i < chooseServers.length; ++i) {
		var nameServer = chooseServers[i][0];
		var ipServer = chooseServers[i][1];
		$("#chooseServer").append(
			'<option value="ws://' + ipServer + '">' + nameServer + '</option>'
		);
	}
}

function joinCurrentServer(ipServer) {
	if (ipServer && ipServer.length > 0) {
		setCurrentServer(ipServer);
	}
}