"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SampleReactBridge = _reactNative.NativeModules.SampleToastButton;
const ToastButton = props => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    title: props.title,
    onPress: () => SampleReactBridge.showToast(props.toastText)
  }));
};
exports.ToastButton = ToastButton;
//# sourceMappingURL=index.js.map