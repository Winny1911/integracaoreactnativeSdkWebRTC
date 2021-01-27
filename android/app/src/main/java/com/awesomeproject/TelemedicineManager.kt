package com.awesomeproject

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.rtcsdk.*


class TelemedicineManager(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    // private var rtc: RTCSDKHelper = RTCSDKHelper();
    // private var rc: ReactContext = ReactContext(reactContext);

    override fun getName(): String {
        return "TelemedicineManager"
    }

    @ReactMethod
    fun getConnection(
        name: String,
        gender: String,
        birthday: String,
        email: String,
        docId: String,
        phoneNumber: String,
        phoneState: String,
        phoneCountry: String
    ) {
        println("getConnection: name = $name")
        println("getConnection: gender = $gender")
        println("getConnection: birthday = $birthday")
        // Init module RTC
        /* rtc.initModule(this.rc,"eb16476f-62f4-4e8a-8a80-9f7c693a80bd","96bdeb9f-1c1d-4e4d-aa96-08eb38f7f8bc","https://pa-digital-dev.ciadaconsulta.com.br/");

        val personRequest = TicketNumberRequest(TicketNumberPerson(
            name,
            gender,
            birthday,
            email,
            TicketNumberDocuments(docId),
            TicketNumberContact(phoneNumber, phoneState, phoneCountry)
        ))

        // Request a roomId
        rtc.joinQueue(personRequest); */
    }

    @ReactMethod
    fun startCall(roomId: String) {
        // Start call with roomId
        println("startCall: roomId = $roomId")
        // rtc.startCall(roomId);
    }
}