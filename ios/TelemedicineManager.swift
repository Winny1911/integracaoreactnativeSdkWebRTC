//
//  TelemedicineManager.swift
//  AwesomeProject
//
//  Created by Kelvin Arnold on 04/01/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

import Foundation
import RTCSDK

@objc(TelemedicineManager)
class TelemedicineManager: UIViewController {
  
  private var rtc:RTCSDKHelper? = nil;
  
  @objc
  func getConnection(
    _ name:String,
    withGender gender:String,
    withBirthday birthday:String,
    withEmail email:String,
    withDocId docId:String,
    withPhoneNumber phoneNumber:String,
    withPhoneState phoneState:String,
    withPhoneCountry phoneCountry:String
  ) {
    print("Connection with name: " + name)
    print("Connection with gender: " + gender)
    print("Connection with birthday: " + birthday)
    print("Connection with email: " + email)
    print("Connection with docId: " + docId)
    print("Connection with phoneNumber: " + phoneNumber)
    print("Connection with phoneState: " + phoneState)
    print("Connection with phoneCountry: " + phoneCountry)
    
    rtc = RTCSDKHelper()
    rtc?.initModule(
      clientId:"eb16476f-62f4-4e8a-8a80-9f7c693a80bd",
      clientSecret: "96bdeb9f-1c1d-4e4d-aa96-08eb38f7f8bc",
      baseApiUri: "https://pa-digital-dev.ciadaconsulta.com.br/"
    )
    let person:PersonParameter = PersonParameter(name: name,
       gender: gender,
       dateOfBirth: birthday,
       email: email,
       cpf: docId,
       phoneNumber: phoneNumber,
       phoneArea: phoneState,
       phoneCountry: phoneCountry
    )
    
    rtc?.joinQueue(caller: self, person: person)
  }
  
  @objc
  func startCall(_ roomID:String) {
    print("Connection with roomID: " + roomID)
    rtc?.joinRoom(caller: self, roomId: roomID)
  }
}
