var { writeFileSync } = require('fs')
var  TextToSpeechV1 = require('ibm-watson/text-to-speech/v1')
var { IamAuthenticator } = require('ibm-watson/auth')
var connection = require("../database/connection");

class TextToSpeech{
    async generatesSound(request, response){

        let id = request.body.idmessage;
        let comment = await connection('comments').select('*').where('id', id);
        
        if (!comment){
            return response.status(404).json({
                "Error" : "404 - Not found!",
                "Regarding": "id"
            })
        }
        
        
        //autenticação
        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                    apikey: process.env.WATSON_API_KEY
                }),
            serviceUrl: process.env.WATSON_URL
        });
        
        //parametros utilizados
        console.log(comment)
        const params = {
            text: comment[0].comment,
            voice: 'pt-BR_IsabelaVoice',
            accept: 'audio/wav'
        };

        textToSpeech
            .synthesize(params)
            .then(response => {
                const audio = response.result;
                return textToSpeech.repairWavHeaderStream(audio);
            })
            .then(repairedAudio => {
                writeFileSync('public/sound/audio.wav', repairedAudio);
                return response.status(201).json({
                    "message": "Audio created!",
                    "url": "../sound/audio.wav"
                });                

            })
            .catch(err => {
                return response.status(406).json({
                    "Error": "406 - Not acceptable!"
                });
            });
            

    }
}

module.exports = TextToSpeech;

