function isHidden(client) {
    return client.minimized;
}

function hide(client) {
    client.minimized = true;
    setSkip(client, true);
}

function show(client) {
    setSkip(client, false);
    client.desktop = workspace.currentDesktop;
    client.minimized = false;
    workspace.activeClient = client;
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
	      return findFirstTarget(targetName);
    };
}

function withTarget(target, cont) {
    var c = target.get();
    if (c) {
	      cont(c);
    } else {
	      print('No client found for target ' + target.id);
    }
}

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

var dolphin = new TargetClient('dolphin-scratchpad');


// Register keyboard shortcut
registerShortcut("ToggleDolphin", "Toggle Dolphin", "Meta-F2", toggler(dolphin));
