// This is a utterly stupid bot that i was originally going to make using python.
// Thanks to my friend roasting me i am now using javascript
/*           

##################################################################

@@@@@@@   @@@@@@@@  @@@       @@@@@@@@@@    @@@@@@   @@@  @@@  @@@  
@@@@@@@@  @@@@@@@@  @@@       @@@@@@@@@@@  @@@@@@@@  @@@  @@@@ @@@  
@@!  @@@  @@!       @@!       @@! @@! @@!  @@!  @@@  @@!  @@!@!@@@  
!@!  @!@  !@!       !@!       !@! !@! !@!  !@!  @!@  !@!  !@!!@!@!  
@!@  !@!  @!!!:!    @!!       @!! !!@ @!@  @!@!@!@!  !!@  @!@ !!@!  
!@!  !!!  !!!!!:    !!!       !@!   ! !@!  !!!@!!!!  !!!  !@!  !!!  
!!:  !!!  !!:       !!:       !!:     !!:  !!:  !!!  !!:  !!:  !!!  
:!:  !:!  :!:        :!:      :!:     :!:  :!:  !:!  :!:  :!:  !:!  
 :::: ::   :: ::::   :: ::::  :::     ::   ::   :::   ::   ::   ::  
:: :  :   : :: ::   : :: : :   :      :     :   : :  :    ::    : 
                                                       
##################################################################

*/
// WARNING! This bot contains shit ton of inside jokes(at least i plan to add shhit on of jokes)

// const sp = require('./restricted');// this is very restricted as seen on the name of the file.

require('node-fetch');

var fs = require('fs');// require the file system
var text= fs.readFileSync("./komikdiil.txt", 'utf-8');// txt that stores "not funny"
var komikdiil = text.split('\n')// split the txt by 

aynenAry = ["Aynen.", "Aynen, bence de...", "Aynen kanka.", "Hmm..."]// this is a lazy way to add diversity

const Discord = require('discord.js');
const { default: fetch } = require('node-fetch');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('GitHub Desktop kullananların listesi: '+ client.user.username); // is an inside joke
});

client.on('message', msg => {

  // do not uncomment without further permission
  // sp.anz(msg);

  // selami "tak tak..." şakası. aklıma nereden geldi bilmiyorum. 
  if (msg.content.startsWith('!selami'))
  {
      msg.channel.send('Selami abinin selamı var.');
      selami = 1
  }

  if(msg.content.toLowerCase().startsWith('hangi selami') && selami == 1) 
  {
    msg.channel.send('selami abi dedim ya işte sen bunu "taktak kim o" şakası mı sandın? Zavallı');
    sleep(4000).then(() => { msg.channel.send('Tamam biraz ağır oldu özür dilerim.') });
    sleep(8000).then(()=> { msg.channel.send('ama sen de hep böyle yapıyorsun hayatta herşey taktak şakası olacak değil ya!') });
    selami = 0
  }

  if (msg.content.toLowerCase().startsWith('aynen') && msg.author.tag != client.user.tag && !msg.author.bot)
  {
      msg.channel.send(aynenAry[easyRand(0,3)])
  }

  if (msg.content.toLowerCase() === '!haha')
  {
    msg.channel.send( komikdiil[easyRand(0,komikdiil.length)]);// this could be the most brilliant line in this bot.
  }

  if (msg.content.startsWith('!cat'))
  {
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(response => response.json())
    .then(data => {
      msg.reply(data.text);
    });
  }
  
  if (msg.content.startsWith('!yeet'))
  {
   fetch('https://waifu.pics/api/sfw/yeet')
    .then(response => response.json())
    .then(data => {
      msg.reply(data.url);
    });
}

  // requested from the license holder of the "anz()" function.
  if (msg.content.startsWith('!anime?'))
  {
    whatAnimeDiscord(msg);// call the funtion.
  }

  console.log(msg.author.username + ' has sent a message, maybe i have friends afterall...');// this is here cuz' i don't have friends.
});

// easier random funciton.
function easyRand(min, max)
{
  return Math.floor(Math.random() * (max-min)) + min;
}

// makes a dumb promise to delay the process. # used for emotional typing. ;(
function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

// splits a given string by spaces and feeds into an array.
function ayir(text, index)
{
  tmp = text.split(' ');
  return tmp[index];
}

function whatAnimeDiscord(message)
{
  // check if the image is a direct attachment or a link and return the "pure_url".
  if (message.content.length == 7 && message.attachments.first().url)// is a direct attachment.
  {
    pure_url = message.attachments.first().url;// extract url from the message.
  }
  else if(message.content.length > 8)// is a link. # if it's longer than '!anime?' there must be a link
  {
    if (ayir(message.content, 1))
    pure_url = ayir(message.content, 1);// seperate by spaces and use the second in array.
  }
  else message.reply('ULAN! NEREYE ATTIN RESMİ ??!????!');
  
  // search for the anime in the API
  fetch('https://trace.moe/api/search?url=' + pure_url)
  .then(response => response.json())
  .then(data => {
    message.reply(processAnime(data));
  })
}

function processAnime(data)
{
  // parse the JSON
  first = data.docs[0];// First in the docs array is the strongest guess.
  romaji = data.docs[0].title_romaji;// Using latin version of the every anime.
  episode = data.docs[0].episode;//self explanatory.
  season = data.docs[0].season;// self explanatory.

  // set final response according to the type of the anime.
  if (episode == null) response = 'İsim: ' + romaji;// This is for the movie type. # (don't know if there are season based animes with no episodes)
  else if  (season == '') response = 'İsim: ' + romaji + ', Bölüm: ' + episode;// is for single season animes
  else response = 'İsim: ' + romaji + ', Sezon: ' + season +', Bölüm: ' + episode;// is for multiple season animes.
  return response;
}

client.login('ODM3NDQ2MDQyMTg1MjM2NTEw.YIsqZw.Ov2rsGeFkY8Fx9dvXfdBAWy5dkE');