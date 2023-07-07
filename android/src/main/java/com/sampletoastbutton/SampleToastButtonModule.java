package com.sampletoastbutton;

import android.widget.Toast;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = SampleToastButtonModule.NAME)
public class SampleToastButtonModule extends ReactContextBaseJavaModule {
  public static final String NAME = "SampleToastButton";

  private ReactApplicationContext context;

  public SampleToastButtonModule(ReactApplicationContext reactContext) {
    super(reactContext);
    context = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  @ReactMethod
  public void returnText(Promise promise) {
    promise.resolve("Hello Toast From Native Code!");
  }

  @ReactMethod
  public void showToast(String toastMessage) {
    Toast.makeText(context, toastMessage, Toast.LENGTH_LONG).show();
  }
}
