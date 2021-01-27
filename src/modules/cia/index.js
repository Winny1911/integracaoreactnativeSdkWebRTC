import { NativeModules, NativeEventEmitter } from "react-native";

class CiaIOSModule extends NativeEventEmitter {
  constructor(nativeModule) {
    console.log("nativeModule", nativeModule);
    super(nativeModule);
    /**
     * Solicitar voucher de acesso a telemedicina
     * @param {String} name Nome do usuario
     * @param {String} gender Sexo do usuario
     * @param {String} birthday Data de nascimento com mascara aaaa-mm-dd
     * @param {String} email Email do usuario
     * @param {String} docId Cpf do usuario com mascara 999.999.999-99
     * @param {String} phoneNumber Numero de telefone sem codigo de cidade
     * @param {String} phoneState Codigo da cidade
     * @param {String} phoneCountry Codigo do pais
     */
    this.getConnection = async (
      name,
      gender,
      birthday,
      email,
      docId,
      phoneNumber,
      phoneState,
      phoneCountry
    ) => {
      const connection = await nativeModule.getConnection(
        `${name}`,
        `${gender}`,
        `${birthday}`,
        `${email}`,
        `${docId}`,
        `${phoneNumber}`,
        `${phoneState}`,
        `${phoneCountry}`
      );
      console.log("connection: ", connection);
      return connection;
    };

    /**
     * Iniciar a chamada de telemedicina
     * @param {String} roomID Id da sala para iniciar a chamada
     */
    this.startCall = async (roomID) => {
      const call = await nativeModule.startCall(roomID);
      console.log("startCall: ", call);
      return call;
    };
  }
}

export default new CiaIOSModule(NativeModules.TelemedicineManager);
