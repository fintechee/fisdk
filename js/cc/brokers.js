var brokerDomain = {
	wl1: "fintechee.cloud",
	wl2: "kbdemo.fintechee.cloud",
	wl3: "kbdemo.fintechee.cloud",
	wl4: "kbdemo.fintechee.cloud",
	wl5: "kbdemo.fintechee.cloud",
	c1: "kbdemo.fintechee.cloud",
	c2: "kbdemo.fintechee.cloud",
	c3: "kbdemo.fintechee.cloud",
	c4: "kbdemo.fintechee.cloud",
	c5: "kbdemo.fintechee.cloud",
	c6: "kbdemo.fintechee.cloud",
	c7: "kbdemo.fintechee.cloud",
	c8: "kbdemo.fintechee.cloud",
	c9: "kbdemo.fintechee.cloud",
	c10: "kbdemo.fintechee.cloud",
	c11: "kbdemo.fintechee.cloud",
}

var brokerPort = {
	wl1: "",
	wl2: "",
	wl3: "",
	wl4: "",
	wl5: "",
	c1: "",
	c2: "",
	c3: "",
	c4: "",
	c5: "",
	c6: "",
	c7: "",
	c8: "",
	c9: "",
	c10: "",
	c11: "",
}

var brokerProtocol = {
	wl1: "https://",
	wl2: "https://",
	wl3: "https://",
	wl4: "https://",
	wl5: "https://",
	c1: "https://",
	c2: "https://",
	c3: "https://",
	c4: "https://",
	c5: "https://",
	c6: "https://",
	c7: "https://",
	c8: "https://",
	c9: "https://",
	c10: "https://",
	c11: "https://",
}

var shopDomain = {
	wl1: "fintechee.shop",
	wl2: "fintechee.shop",
	wl3: "fintechee.shop",
	wl4: "fintechee.shop",
	wl5: "fintechee.shop",
	c1: "fintechee.shop",
	c2: "fintechee.shop",
	c3: "fintechee.shop",
	c4: "fintechee.shop",
	c5: "fintechee.shop",
	c6: "fintechee.shop",
	c7: "fintechee.shop",
	c8: "fintechee.shop",
	c9: "fintechee.shop",
	c10: "fintechee.shop",
	c11: "fintechee.shop",
}

var brokerName = {
	wl1: "tst1",
	wl2: "kbdemo",
	wl3: "sodemo",
	wl4: "ulfdemo",
	wl5: "kobbdemo",
	c1: "c1",
	c2: "c2",
	c3: "c3",
	c4: "c4",
	c5: "c5",
	c6: "c6",
	c7: "c7",
	c8: "c8",
	c9: "c9",
	c10: "c10",
	c11: "c11",
}

var signInShownBrokerName = {
	wl1: "Demo Server(tst1)",
	wl2: "KBS Demo Server",
	wl3: "Sochi Demo Server",
	wl4: "Vet Demo Server",
	wl5: "Kobb Demo Server",
	c1: "Championship Unit 1",
	c2: "Championship Unit 2",
	c3: "Championship Unit 3",
	c4: "Championship Unit 4",
	c5: "Championship Unit 5",
	c6: "Championship Unit 6",
	c7: "Championship Unit 7",
	c8: "Championship Unit 8",
	c9: "Championship Unit 9",
	c10: "Championship Unit 10",
	c11: "Championship Unit 11",
}

var shownBrokerName = {
	wl1: "Test Demo1",
	wl2: "KBS Demo",
	wl3: "Sochi Demo",
	wl4: "Vet Demo",
	wl5: "Kobb Demo",
	c1: "Championship U1",
	c2: "Championship U2",
	c3: "Championship U3",
	c4: "Championship U4",
	c5: "Championship U5",
	c6: "Championship U6",
	c7: "Championship U7",
	c8: "Championship U8",
	c9: "Championship U9",
	c10: "Championship U10",
	c11: "Championship U11",
}

var brokerCtx = []

brokerCtx[brokerName.wl1] = {
	brokerName: brokerName.wl1,
	dataStreamURL: brokerProtocol.wl1 + brokerDomain.wl1 + brokerPort.wl1,
	dataBaseURL: brokerProtocol.wl1 + brokerDomain.wl1 + brokerPort.wl1,
	orderStreamURL: brokerProtocol.wl1 + brokerDomain.wl1 + brokerPort.wl1,
	orderBaseURL: brokerProtocol.wl1 + brokerDomain.wl1 + brokerPort.wl1,
	shopURL: brokerProtocol.wl1 + shopDomain.wl1,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "KBS Demo",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.wl2] = {
	brokerName: brokerName.wl2,
	dataStreamURL: brokerProtocol.wl2 + brokerDomain.wl2 + brokerPort.wl2,
	dataBaseURL: brokerProtocol.wl2 + brokerDomain.wl2 + brokerPort.wl2,
	orderStreamURL: brokerProtocol.wl2 + brokerDomain.wl2 + brokerPort.wl2,
	orderBaseURL: brokerProtocol.wl2 + brokerDomain.wl2 + brokerPort.wl2,
	shopURL: brokerProtocol.wl2 + shopDomain.wl2,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Liquidity Provider",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.wl3] = {
	brokerName: brokerName.wl3,
	dataStreamURL: brokerProtocol.wl3 + brokerDomain.wl3 + brokerPort.wl3,
	dataBaseURL: brokerProtocol.wl3 + brokerDomain.wl3 + brokerPort.wl3,
	orderStreamURL: brokerProtocol.wl3 + brokerDomain.wl3 + brokerPort.wl3,
	orderBaseURL: brokerProtocol.wl3 + brokerDomain.wl3 + brokerPort.wl3,
	shopURL: brokerProtocol.wl3 + shopDomain.wl3,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Liquidity Provider",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.wl4] = {
	brokerName: brokerName.wl4,
	dataStreamURL: brokerProtocol.wl4 + brokerDomain.wl4 + brokerPort.wl4,
	dataBaseURL: brokerProtocol.wl4 + brokerDomain.wl4 + brokerPort.wl4,
	orderStreamURL: brokerProtocol.wl4 + brokerDomain.wl4 + brokerPort.wl4,
	orderBaseURL: brokerProtocol.wl4 + brokerDomain.wl4 + brokerPort.wl4,
	shopURL: brokerProtocol.wl4 + shopDomain.wl4,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Vet Demo",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.wl5] = {
	brokerName: brokerName.wl5,
	dataStreamURL: brokerProtocol.wl5 + brokerDomain.wl5 + brokerPort.wl5,
	dataBaseURL: brokerProtocol.wl5 + brokerDomain.wl5 + brokerPort.wl5,
	orderStreamURL: brokerProtocol.wl5 + brokerDomain.wl5 + brokerPort.wl5,
	orderBaseURL: brokerProtocol.wl5 + brokerDomain.wl5 + brokerPort.wl5,
	shopURL: brokerProtocol.wl5 + shopDomain.wl5,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Kobb Demo",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c1] = {
	brokerName: brokerName.c1,
	dataStreamURL: brokerProtocol.c1 + brokerDomain.c1 + brokerPort.c1,
	dataBaseURL: brokerProtocol.c1 + brokerDomain.c1 + brokerPort.c1,
	orderStreamURL: brokerProtocol.c1 + brokerDomain.c1 + brokerPort.c1,
	orderBaseURL: brokerProtocol.c1 + brokerDomain.c1 + brokerPort.c1,
	shopURL: brokerProtocol.c1 + shopDomain.c1,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c2] = {
	brokerName: brokerName.c2,
	dataStreamURL: brokerProtocol.c2 + brokerDomain.c2 + brokerPort.c2,
	dataBaseURL: brokerProtocol.c2 + brokerDomain.c2 + brokerPort.c2,
	orderStreamURL: brokerProtocol.c2 + brokerDomain.c2 + brokerPort.c2,
	orderBaseURL: brokerProtocol.c2 + brokerDomain.c2 + brokerPort.c2,
	shopURL: brokerProtocol.c2 + shopDomain.c2,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c3] = {
	brokerName: brokerName.c3,
	dataStreamURL: brokerProtocol.c3 + brokerDomain.c3 + brokerPort.c3,
	dataBaseURL: brokerProtocol.c3 + brokerDomain.c3 + brokerPort.c3,
	orderStreamURL: brokerProtocol.c3 + brokerDomain.c3 + brokerPort.c3,
	orderBaseURL: brokerProtocol.c3 + brokerDomain.c3 + brokerPort.c3,
	shopURL: brokerProtocol.c3 + shopDomain.c3,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c4] = {
	brokerName: brokerName.c4,
	dataStreamURL: brokerProtocol.c4 + brokerDomain.c4 + brokerPort.c4,
	dataBaseURL: brokerProtocol.c4 + brokerDomain.c4 + brokerPort.c4,
	orderStreamURL: brokerProtocol.c4 + brokerDomain.c4 + brokerPort.c4,
	orderBaseURL: brokerProtocol.c4 + brokerDomain.c4 + brokerPort.c4,
	shopURL: brokerProtocol.c4 + shopDomain.c4,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c5] = {
	brokerName: brokerName.c5,
	dataStreamURL: brokerProtocol.c5 + brokerDomain.c5 + brokerPort.c5,
	dataBaseURL: brokerProtocol.c5 + brokerDomain.c5 + brokerPort.c5,
	orderStreamURL: brokerProtocol.c5 + brokerDomain.c5 + brokerPort.c5,
	orderBaseURL: brokerProtocol.c5 + brokerDomain.c5 + brokerPort.c5,
	shopURL: brokerProtocol.c5 + shopDomain.c5,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c6] = {
	brokerName: brokerName.c6,
	dataStreamURL: brokerProtocol.c6 + brokerDomain.c6 + brokerPort.c6,
	dataBaseURL: brokerProtocol.c6 + brokerDomain.c6 + brokerPort.c6,
	orderStreamURL: brokerProtocol.c6 + brokerDomain.c6 + brokerPort.c6,
	orderBaseURL: brokerProtocol.c6 + brokerDomain.c6 + brokerPort.c6,
	shopURL: brokerProtocol.c6 + shopDomain.c6,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c7] = {
	brokerName: brokerName.c7,
	dataStreamURL: brokerProtocol.c7 + brokerDomain.c7 + brokerPort.c7,
	dataBaseURL: brokerProtocol.c7 + brokerDomain.c7 + brokerPort.c7,
	orderStreamURL: brokerProtocol.c7 + brokerDomain.c7 + brokerPort.c7,
	orderBaseURL: brokerProtocol.c7 + brokerDomain.c7 + brokerPort.c7,
	shopURL: brokerProtocol.c7 + shopDomain.c7,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c8] = {
	brokerName: brokerName.c8,
	dataStreamURL: brokerProtocol.c8 + brokerDomain.c8 + brokerPort.c8,
	dataBaseURL: brokerProtocol.c8 + brokerDomain.c8 + brokerPort.c8,
	orderStreamURL: brokerProtocol.c8 + brokerDomain.c8 + brokerPort.c8,
	orderBaseURL: brokerProtocol.c8 + brokerDomain.c8 + brokerPort.c8,
	shopURL: brokerProtocol.c8 + shopDomain.c8,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c9] = {
	brokerName: brokerName.c9,
	dataStreamURL: brokerProtocol.c9 + brokerDomain.c9 + brokerPort.c9,
	dataBaseURL: brokerProtocol.c9 + brokerDomain.c9 + brokerPort.c9,
	orderStreamURL: brokerProtocol.c9 + brokerDomain.c9 + brokerPort.c9,
	orderBaseURL: brokerProtocol.c9 + brokerDomain.c9 + brokerPort.c9,
	shopURL: brokerProtocol.c9 + shopDomain.c9,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c10] = {
	brokerName: brokerName.c10,
	dataStreamURL: brokerProtocol.c10 + brokerDomain.c10 + brokerPort.c10,
	dataBaseURL: brokerProtocol.c10 + brokerDomain.c10 + brokerPort.c10,
	orderStreamURL: brokerProtocol.c10 + brokerDomain.c10 + brokerPort.c10,
	orderBaseURL: brokerProtocol.c10 + brokerDomain.c10 + brokerPort.c10,
	shopURL: brokerProtocol.c10 + shopDomain.c10,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

brokerCtx[brokerName.c11] = {
	brokerName: brokerName.c11,
	dataStreamURL: brokerProtocol.c11 + brokerDomain.c11 + brokerPort.c11,
	dataBaseURL: brokerProtocol.c11 + brokerDomain.c11 + brokerPort.c11,
	orderStreamURL: brokerProtocol.c11 + brokerDomain.c11 + brokerPort.c11,
	orderBaseURL: brokerProtocol.c11 + brokerDomain.c11 + brokerPort.c11,
	shopURL: brokerProtocol.c11 + shopDomain.c11,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Championship Unit",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

var BROKER_NAME = {
  DEMO: "Fintechee Demo",
	FINTECHEE_DEMO: "Fintechee Demo",
	WL1: shownBrokerName.wl1,
	WL2: shownBrokerName.wl2,
	WL3: shownBrokerName.wl3,
	WL4: shownBrokerName.wl4,
	WL5: shownBrokerName.wl5,
	C1: shownBrokerName.c1,
	C2: shownBrokerName.c2,
	C3: shownBrokerName.c3,
	C4: shownBrokerName.c4,
	C5: shownBrokerName.c5,
	C6: shownBrokerName.c6,
	C7: shownBrokerName.c7,
	C8: shownBrokerName.c8,
	C9: shownBrokerName.c9,
	C10: shownBrokerName.c10,
	C11: shownBrokerName.c11,
}

var noSwap = []
