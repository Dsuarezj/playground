import {create, Whatsapp} from "venom-bot";
async function start(client: Whatsapp) {
    await client.onMessage((message) => {
        if (message.body === 'Hi') {
            client
                .sendText(message.from, 'Welcome Venom 🕷')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    });
}
export async function startWhatsappClient() {
    create(
        'sessionName',
        undefined,
        (statusSession, session) => {
            console.log('Status Session: ', statusSession);
            console.log('Session name: ', session);
        },
        {
            useChrome: false
        }
    )
        .then(async (client) => {
            await start(client);
        })
        .catch((erro) => {
            console.log(erro);
        });
}