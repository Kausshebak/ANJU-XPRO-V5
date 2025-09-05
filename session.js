//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hZcnU1RjV3ZU1RTnVtNkRtRTh0MzVVQUZwdGl6Y05sWkZLYXZCYi8zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1jVk1oRVg3NzhRVmFFb2o3K29jWE1WQ2dhVHVLTG5Hd3g1MGw1S2RqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRmppSFNCUjY4Lyt6WEZiajlDWVJCeTlhclFXQVp2dEFXaTFVcVVQbUdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQk5sVnI2ak1DazJ0YjI2UUZxaTI1ZTFaZ1NmTVVxeGNPOHp3dUo2RW53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOQkJYZ1JQRlVQbzdvYXRjNVVtVEhBYnJCeVhoWEs0NEV2WlJIM0szV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ5UFkxM09CZ2h1dmpvWEFOYk42aWRNSFUyVlVweU1ic3hvV2lzQmFWazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdiVnptcXJGT2ZJNkRHcy9GeDR5bUgyRFNpSVIvMFFxQmtNZlg4N1cxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHg0K2tuNzVaUzRORGt3ZUREbldkakoxaDhOMXlpMlVlQVlLUUUwbXZoaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMxZENtNTRzRW5rREl3ano4SUEwZEd5MGtKeXZidE1OU3NTMVE4Qk5FY1lMNUgrOVVzUzMveWVQb3hFTEJpZ1IrR2Y4aFA3YXp2SnBXbU04OUkvZWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJrMTcxdXFjSjFmVkoreG5uZkdHZTNQc1hDa3RHczBqYXFya2hIMm9XRitnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1cWcxR0FNLVFGU2xrSVFMUkpna2NnIiwicGhvbmVJZCI6ImNiNjhkNDk2LTNhOWEtNGRhMC1iNTU2LWRmNTdkNGJmODc3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJVjFrb05VNExxTVNTQ2ZZSExjKzRiY3BEZDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidENtUnp4N0tqd21FRWNDOG4wWkp2cjgrMWtFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iks5U0MxVjZQIiwibWUiOnsiaWQiOiI5NDc2Mjg1ODQ0ODozN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg5NzY1MTAxNzUyNTM3OjM3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSis3dnU0RUVQWFk2OFVHR0E4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmI4MUFFMEFDbFpjRnhJc29mU0VXMFZXa3V5KzMweGZTWm03eUovV3ZHUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUG1USDU0L3YwSEN4Njd4dm5zVnRwQm44N0J1cDQyM0w5UFVZOWVDQmpaUVh2TEhZZ2NUaFZpM2JzamI1eThKRDhQUTM4Z1hYbEZHSkNXSWJ2ZmFrQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImFsM0hMRkhPYjhIam1zRkl5cVFmWUUwL0lZcmI2SjdySFdHTmhXajc3U2Z2L0gvbXNkN2pDVXZHOERwd3VocncwckFHRlZycEpRWklFWDFqaGV0ZWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjI4NTg0NDg6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlcvTlFCTkFBcFdYQmNTTEtIMGhGdEZWcExzdnQ5TVgwbVp1OGlmMXJ4ayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MDgwNzA3LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlDdyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0774391560",
  PASSWORD: 
    process.env.PASSWORD || "KRP0640",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
