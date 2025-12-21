const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/helloWorld", (req, res) => {
  res.send("Hello from Firebase!");
});

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

app.post("/sendForm", async (req, res) => {
  try {
    // Accept JSON or urlencoded
    const data = req.body || {};
    const { firstName, lastName, email, service, message } = data;
    if (!firstName || !lastName || !email || !service || !message) {
      return res.status(400).send("Missing fields");
    }

    const auth = new google.auth.JWT(
      functions.config().gmail.client_email,
      null,
      functions.config().gmail.private_key.replace(/\\n/g, "\n"),
      SCOPES,
      "dboulanger363@gmail.com"
    );

    const gmail = google.gmail({ version: "v1", auth });

    const rawMessage = [
      `To: dboulanger363@gmail.com`,
      `Reply-To: ${email}`,
      `Subject: Nouveau message du formulaire de contact`,
      "",
      `Nom: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    const encodedMessage = Buffer.from(rawMessage)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedMessage },
    });

    res.status(200).send("Email sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

exports.api = functions.https.onRequest(app);
