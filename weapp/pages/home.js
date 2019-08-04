"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  config: {
    navigationBarTitleText: '首页'
  },
  data: {
    content: 1
  },
  methods: {},
  onLoad: function onLoad() {}
}, {info: {"components":{"van-button":{"path":"..\\components\\vant-weapp\\dist\\button\\index"}},"on":{}}, handlers: {}, models: {} });