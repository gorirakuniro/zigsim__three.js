window.addEventListener('load', init);

function init() {
	setUpWebSocket();
}

function setUpWebSocket() {
	const webSocket = new WebSocket('ws://127.0.0.1:8000');
	webSocket.addEventListener('open', (_) => {
		console.log('WebSocket connected!');
	});

	webSocket.addEventListener('message', (event) => {
		const jsonData = JSON.parse(event.data);

		console.log(jsonData.sensordata.touch);

		// if (jsonData.sensordata.touch !== null && jsonData.sensordata.touch !== undefined) {
		// 	const touchPos = Object.values(jsonData.sensordata.touch);
		// 	render.touchPoint('touch', touchPos, COLOR.GREEN, 0);
		// 	// render.touchPoint('touch', touchPos, COLOR.RED, 1);
		// 	// render.touchPoint('touch', touchPos, COLOR.BLUE, 2);
		// }
	});
}
