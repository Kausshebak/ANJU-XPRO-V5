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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJQSXVlc2Y3RnZSVXYzcVZ1YjM3OUR6Y2FCZ3RxeE5Ub3lESEtZK1QzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDFOSHAzOUgrRnYzYndBaDVxODVnckhLcVJyMDhOeFF4dmpINHhhTUFTdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRVMzNHVUSmRselVvM0FQV2tVOXA4RldaUGlxSHJUUnViT3Z5c2o4alZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsY25iL05xMGFoVmFHVEpmZlVGcGhadk90WUFMVTJYN1JaKzcycjhQUlNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJVytsM09wbmE3SVQzQ3dobXBDYk9yaWs1WU1rRkEvelRNYnpkZ3NlbWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd6TTF2cGdCK3pwNlNkdGxmT3pnempuUGJoUHV5V280SEVNbVRvd2t2bE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BqMU81ZlVIcnQwR3Q0UEdhSW9MN25PTExXVTZXaEZYR3RCNFBwNFNVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkFnMm9VOWtjSlVSeUNuMS9qUVFBNzU2MGt6SkkzQjBub3NWdGk3djVIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJtQmJjckNVRUVZQW1yL3Z1Z0d5MXBLb2xraXNod1JlZHFTalk3Y0tlRzJUOUlPMHhiQzhmRlpKaDFvWkMxMGkrYkpaaUpnaUJEUUxIQk1vT08xa0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJQaUpnM2ZYd2V6eis2OHRGUUFQK29weWFKYTB6V2V3VHNvNHIyY3c4dHRVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJubG9BYzdTS1I3Mmd5b1JMai1rZmlnIiwicGhvbmVJZCI6IjEzMjJhNTcyLWZhMDQtNDZlOS04OTA5LTE1MGJhYWViN2Y3YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkcnhobWpYUXQwaG5McDk2YmlhQWd3dElzT0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEE4akVuemJVS1hGRXZaellsWVRVdXQrSDAwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc3UlozV1NSIiwibWUiOnsiaWQiOiI5NDc3NjQ3MDIzNTo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ1OTYwNDc5Mzk2MDQzOjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKdlIwcjBERUkraXdjVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyM1ltNFJIWjZDZyszekl5NWV3Uy82RHlYa0E5dFUxQzFtbWJaQzU3OG5NPSIsImFjY291bnRTaWduYXR1cmUiOiJDZWdFYWpBeGdlOWI5OEZXa1liM1htOG5POC9GSEZkY1VrbCszWFpBQ0J1MTE0RDNIdjV5cnBtVmNyMUN5K01WT3dpdVkvWGdxUmYwTnR2ekNVVjFEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTFJxWXcxc2hxQ2o5eWtIOXR5anZlT3VwUkZybndlSHRZeVg2YWNyK1BhR0paTFdjZnRqamVpaU9Oc2JGams5TmpKakdTbE0xbnBXcFNpTmtsYzJmRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NjQ3MDIzNTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR0Mkp1RVIyZWdvUHQ4eU11WHNFditnOGw1QVBiVk5RdFpwbTJRdWUvSnoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjM4NTU2NSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEb1oifQ==",
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
