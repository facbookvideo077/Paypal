
const TELEGRAM_BOT_TOKEN = "8366649467:AAGaMF5mQBsffV-Zc2QU9AQ7XSjD0IKXf3Y";
const TELEGRAM_CHAT_ID = "7211220207";

export async function sendTelegramMessage(message: string): Promise<boolean> {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    return data.ok === true;
  } catch (error) {
    console.error('Telegram send error:', error);
    return false;
  }
}
