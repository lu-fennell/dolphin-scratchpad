// BLABLABLA
function isHidden(client) {
    return client.minimized;
}

function hide(client) {
    client.minimized = true;
    setSkip(client, true);
}

function show(client) {
    setSkip(client, false);
    client.minimized = false;
    workspace.activeClient = client;
    client.desktop = workspace.currentDesktop;
    client.keepAbove       = true;
}

function setSkip(client, value) {
    client.skipSwitcher  = value;
    client.skipPager     = value;
    client.skipTaskbar   = value;
}

function findFirstTarget(targetName) {
    var clients = workspace.clientList();
    for (var i=0; i<clients.length; i++) {
	var client = clients[i];
	if(client.resourceName == targetName) {
	    return client;
	}
    }
};

function TargetClient(targetName) {
    this.id = 'Resource:' + targetName;
    this.cashedClient = findFirstTarget(targetName);
    this.get = function () {
	// TODO: re-enable caching
	return findFirstTarget(targetName);
	// if (!this.cashedClient) {
	//     print('No client cashed. Searching for client with name ' + targetName);
	//     this.cashedClient = findFirstTarget(targetName);
	// }
	// return this.cashedClient;
    };
    
    // TODO: re-enable caching
    // // remove cashedClient when window is closed
    // var self = this;
    // workspace.clientRemoved.connect(function (oldClient) {
    // 	if (self.cashedClient === oldClient) {
    // 	    self.cashedClient = undefined;
    // 	}
    // })
}

function withTarget(target, cont) {
    var c = target.get();
    if (c) {
	cont(c);
    } else {
	print('No client found for target ' + target.id);
    }
}

var dolphin = new TargetClient('dolphin-scratchpad');
function toggler(target) {
    return function () {
	withTarget(target, function (c) {
            if (isHidden(c)) {
		show(c);
            } else {
		hide(c);
            }
	}); 
    };
}

registerShortcut("ToggleDolphin", "Toggle Dolphin", "Meta-F2", toggler(dolphin));
