//
//  TelemedicineManager.m
//  AwesomeProject
//
//  Created by Kelvin Arnold on 04/01/21.
//  Copyright © 2021 Facebook. All rights reserved.
//
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(TelemedicineManager, NSObject)
 // RCT_EXTERN_METHOD(getConnection:(NSString)name);
RCT_EXTERN_METHOD(getConnection:(NSString)name withGender:(NSString)gender withBirthday:(NSString)birthday  withEmail:(NSString)email withDocId:(NSString)docId withPhoneNumber:(NSString)phoneNumber withPhoneState:(NSString)phoneState withPhoneCountry:(NSString)phoneCountry);
RCT_EXTERN_METHOD(startCall:(NSString)roomID)
@end
