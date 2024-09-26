import { create } from '@open-wa/wa-automate';


create({
  sessionId: "!Robot",
  multiDevice: true, //required to enable multiDevice support
  authTimeout: 60, //wait only 60 seconds to get a connection with the host account device
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: 'PT_BR',
  logConsole: false,
  popup: true,
  qrTimeout: 0, //0 means it will wait forever for you to scan the qr code
}).then(client => start(client));

function start(client) {



  client.onMessage(async message => {
    if(message.body === 'Bom dia'){
      await client.sendText(message.from, 'Bom dia, em que posso ajudar ?');
    }
  })

  client.onMessage(async message => {
    if (message.body === 'marcação de consulta') {
      await client.sendText(message.from, 'Especialidades:');
    }
  })


}