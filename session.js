//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░████╗██╗░░░██╗██████╗█████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║█║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUF3TjR1L2l4amdnQTRnTURzSEcvOTlWVjMwcmFjb2ZRK3BBODFUZXBXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkw3Rk42Q3F1YmFBbWRKaGFqWGhJOHU5TnNTd3Z5R1JKUzIxbmt0VmlpVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSUxlYUdSckFPZ0hMWWlBTGg5YTl5MmFmc01lQlVYenhXcHRZMkpQS21NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSjNneThlckM0a1BYNzBZS0V6Y29pSWJVN2o1WW9OeUNobmhMQlJEZEhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGVVY1bnZleEhsazBDbnZHRUtRcXloM01iNkdTaHlYMDlOdWc5ZlM4VU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM5K2NURklzdWxMUTkzTkJyZnJUK2tuc0ZrSFVjalNDTVZXVkw0S3RlUWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9Md2JGWTdZbHVVNVVOdDdyb3puY2pUMjJWVnM5OHRQeUhOaDhtUVNHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnEvNWltNVYrb082NjlLOWdSZHQzOS92aHFlVHE5c3RKWEdHWjB6MEFoaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktqMHByQWVUQUZsVGVybEswUlhhM21WdllIVmptTnJZRXNIUFd0TzZEY0FRVWc5eVc5ekFuM21NSkJKZXJRUktPc1dEd1ZaenRraCt4anVrUUNlc0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJ1ekt1dEI2VGpCdXJVQk5wS1VNZHFDWjVxSFR3ek9mVU5hSjhabkljWmxNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIbUd3cmJEQVR1bWJqenVvTG1sR1J3IiwicGhvbmVJZCI6IjVlNDk2ZjllLTIyYTktNDFkOC04MTk5LTY5MTgyODViOTcxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYN3p3Nm02R1piQXoxY2FtUWl6U3JIWEdoeWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWZ4bHNITTFDalhNL1RIRUJUMmdzNjdBbmlvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJEVDFBTUZTIiwibWUiOnsiaWQiOiI5NDc3NjQ3MDIzNTo3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ1OTYwNDc5Mzk2MDQzOjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKelIwcjBERUppdytzVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyM1ltNFJIWjZDZyszekl5NWV3Uy82RHlYa0E5dFUxQzFtbWJaQzU3OG5NPSIsImFjY291bnRTaWduYXR1cmUiOiJmM0ZLSjlGV2J4aFcwaEorQlM2MGlWS3FucEpkMzl6T09aK01haWhra0JmWW56OElHQUFvSUhONUhOZDdDT3VaQ01pS2dFWDJaOU5kVW14NkVYQVRDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRzZKbDNoWDhsWncvR0JndEpjQXBNaVR3Zk42Z2p3UlVaVTIzNU9PcU9tWTdWUFBiZkZTQ3RqRlBWYlpZeFczR05ybDFLVEQwL2Zxd2ZTTG9VVzA4REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NjQ3MDIzNTo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR0Mkp1RVIyZWdvUHQ4eU11WHNFditnOGw1QVBiVk5RdFpwbTJRdWUvSnoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzMyMTI1NCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNTDIifQ==",
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
