import React from 'react';
import { Button, NativeModules, View } from 'react-native';
const SampleReactBridge = NativeModules.SampleToastButton;
export const ToastButton = props => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Button, {
    title: props.title,
    onPress: () => SampleReactBridge.showToast(props.toastText)
  }));
};
//# sourceMappingURL=index.js.map