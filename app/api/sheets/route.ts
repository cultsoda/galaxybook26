import { google } from "googleapis";
import { NextResponse } from "next/server";

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SHEET_NAME = "Sheet1"; // 시트 이름 (기본값)

async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// GET: Sheets에서 데이터 읽기
export async function GET() {
  try {
    const sheets = await getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:D`, // 2행부터 끝까지 (헤더 제외)
    });

    const rows = response.data.values || [];

    const prizes = rows.map((row) => ({
      id: Number(row[0]),
      name: row[1],
      totalQty: Number(row[2]),
      remainingQty: Number(row[3]),
    }));

    return NextResponse.json({ prizes });
  } catch (error) {
    console.error("Error reading from Google Sheets:", error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

// PUT: Sheets에 데이터 쓰기
export async function PUT(request: Request) {
  try {
    const { prizes } = await request.json();
    const sheets = await getGoogleSheetsClient();

    const values = prizes.map((prize: any) => [
      prize.id,
      prize.name,
      prize.totalQty,
      prize.remainingQty,
    ]);

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:D`,
      valueInputOption: "RAW",
      requestBody: { values },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing to Google Sheets:", error);
    return NextResponse.json(
      { error: "Failed to write data" },
      { status: 500 }
    );
  }
}
