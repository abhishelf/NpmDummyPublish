import React from 'react';
import type { FC } from 'react';
import { Button, NativeModules, View } from 'react-native';

const SampleReactBridge = NativeModules.SampleToastButton;

type Props = {
  title: string,
  toastText: string
}

export const ToastButton : FC<Props> = (props) => {
  return (
    <View>
      <Button title={props.title} onPress={() => SampleReactBridge.showToast(props.toastText)}/>
    </View>
  );
}