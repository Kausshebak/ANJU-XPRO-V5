//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░████╗░██╗░░░██╗██████╗█████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFzd3lLRGVDYitDSTdpNjNQYU9zckxWZlZlREdOSWwrTDBWYnlqL1BuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1SUTdRUzlpWVJUR2U2Z3hlQWNQTGZoTGpXQ2NaQktTeTAvcGlQV3V3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRnhYZG5ZUitLTDh5R3RTM3BsYXRJeUxFVzZKb3Z2OVVWUUhKTFhobGxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQVmwyWmg3RnVBWFhXbUduR1N0eFY3YnpaeDZRRlpxWEtuaGMyNkkrQXhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdId1FBMjNDQUJFN2pmbTEwQlFpYW0vSWNxbUtaLzFyQUZsYjdHdEFzRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkczZDNhZ1dCN2FGdk5aUENHekkyejFDbG5ZQVVFK3Y0andKdGVhNFRoM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZPUEplK0RYS3lqYTFwVDhMUHZCZG10VFVwcmpmVGVwYU9uNm9QdjNWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZsYTBWRy90TFdwU1VIcm5YVS9vM1pFdUNVeVZIQlJWaGtLUitJR1NDdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ5Z0R5ZFJFZ3lHbFZSY3JpQUlJZWJRZkt0U0xkQXFxYkN6eDlqdlR6QndsT1FOVnYrQllPaE9MZVdWTmpINk16eHVVR2JPRThad2dHaUZBcFdWeWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJGODVmWXBuWm1ManhtMWlkamZCQnJ4Mmtra3dXMVBoeFlUaU5hSDgxOURJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWaTdDUGtaVlNLT2g0V1E4NjVkdDBBIiwicGhvbmVJZCI6IjE3ZmIzMGEyLTRjODktNDU3OS04MWEzLTQyMDEzNWRjOGRhNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTlkwbzhTMWxNKzlnaFY3ejh4QzZzM3ZpOEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVpKSEhmamw1cEd3Qkg3d3U5cnRlQ2JxYjlrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFaM0ExRlNUIiwibWUiOnsiaWQiOiI5NDc2Mjg1ODQ0ODozOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg5NzY1MTAxNzUyNTM3OjM5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSis3dnU0RUVPUHU4OFVHR0JFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmI4MUFFMEFDbFpjRnhJc29mU0VXMFZXa3V5KzMweGZTWm03eUovV3ZHUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoialZMTU1QRGE5ZGI4ckhyeVNKTnVJay91UmhpcjZXNFU3Z1E2cXBpSGpOMjN4WVp2Q1BmczVKdVI2SzhpM2NKdklhVWRZdkx6TmtrRzN1S3BhaEhIQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5ta1ZlYjQreENuWGp1U0tZdGNqM0VXMlNuRHB3ZndyT0R0d3plbUhIc1NESGtQRy9BRkI3amZYd29wREN4RVZaTWdFMHRvcHBicHk2SkJSVzdCWGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjI4NTg0NDg6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlcvTlFCTkFBcFdYQmNTTEtIMGhGdEZWcExzdnQ5TVgwbVp1OGlmMXJ4ayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MjE0NTc2LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlDNCJ9",
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
