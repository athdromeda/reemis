import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST request are allowed!" });
    console.log("Only for POST method");
  }

  const body = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_TARGET_ID,
      range: "Sheet1!A2",
      valueInputOption: "RAW",
      requestBody: {
        // values: [[body.name, body.nik, body.kk]],
        values: [Object.values(body)],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    return res
      .status(500)
      .send({ message: e.message ?? "Ooops!... Something went wrong :(" });
  }
}
