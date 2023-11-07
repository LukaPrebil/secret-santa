import { google } from "googleapis";
import { getPairs } from "./generatePairs.js";
import { authorize } from "./googleLogin.js";
import people from "./people.json" assert {type: "json"};
import b64 from "base-64";

const auth = await authorize();

async function sendMessage(to, body, test = false) {
  const gmail = google.gmail({ version: "v1", auth });
  const message = `To: ${to}
Subject: Skriti Bozicek ${new Date().getFullYear()}

${body}

To sporocilo je bilo poslano avtomatsko.
LP
Luka`;

  if (test) {
    console.log(message);
    return;
  }

  // const result = await gmail.users.messages.send({
  //   userId: "me",
  //   requestBody: { raw: b64.encode(message) },
  // });
  // return result;
}

const pairs = getPairs(people);
await Promise.allSettled(
  pairs.map((pair) =>
    sendMessage(
      pair[0].email,
      `Zdravo ${pair[0].name}!
Letos si skriti Bozicek za ${pair[1].nameRec}.`,
      true
    )
  )
);
