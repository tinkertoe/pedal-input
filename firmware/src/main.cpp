#include <Arduino.h>
#include <ESP8266WiFi.h>

int oldState = 0;

void setup() {
  Serial.begin(9600);
  pinMode(D6, INPUT_PULLUP);
  WiFi.mode(WIFI_OFF);
  WiFi.forceSleepBegin();
}

void loop() {
  int newState = digitalRead(D6);
  if (newState != oldState)
  {
    if (newState == 0) {
      Serial.println("on");
    }

    if (newState == 1) {
      Serial.println("off");
    }

    oldState = newState;
  }
  delay(50);
}