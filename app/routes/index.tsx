import { create, Whatsapp } from 'venom-bot';

function start(client: Whatsapp) {
  client.onMessage((message) => {
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

export function loader() {
    create(
        'sessionName',
        undefined,
        (statusSession, session) => {
            console.log('Status Session: ', statusSession);
            console.log('Session name: ', session);
        },
        {
            multidevice: false // for version not multidevice use false.(default: true)
        }
    )
        .then((client) => {
            start(client);
        })
        .catch((erro) => {
            console.log(erro);
        });
  return { message: "this is awesome 😎" };
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
