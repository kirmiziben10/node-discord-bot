//This is a utterly stupid bot that i was originally going to make using python.
//Thanks to my friend roasting me i am now using javasccript
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
//WARNING! This bot contains shit ton of inside jokes(at least i plan to add shhit on of jokes)

const sp = require('./restricted');

var fs = require('fs');
var text= fs.readFileSync("./komikdiil.txt", 'utf-8');
var komikdiil = text.split('\n')

aynenAry = ["Aynen.", "Aynen, bence de...", "Aynen kanka.", "Hmm..."]

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('GitHub Desktop kullananların listesi : '+ client.user.username);
});

client.on('message', msg => {

//do not uncomment without further permission
//  sp.anz(msg);

  if (msg.content === 'ping') 
  {
    msg.reply('Pong!');
  }
  if (msg.content.startsWith('!selami'))
  {
      msg.channel.send('Selami abinin selamı var.');
      selami = 1
  }

  if(msg.content.toLowerCase().startsWith('hangi selami') && selami == 1) {
    msg.channel.send('selami abi dedim ya işte sen bunu "taktak kim o" şakası mı sandın? Zavallı');
    sleep(4000).then(() => { msg.channel.send('Tamam biraz ağır oldu özür dilerim.') });
    sleep(8000).then(()=> { msg.channel.send('ama sen de hep böyle yapıyorsun hayatta herşey taktak şakası olacak değil ya!') });
    selami = 0
  }

  if (msg.content.toLowerCase().startsWith('aynen') && msg.author.tag != client.user.tag && !msg.author.bot)
  {
      msg.channel.send(aynenAry[easyRand(0,3)])
      console.log('aynen')
  }

  if (msg.content.toLowerCase() === '!haha')
  {
    msg.channel.send( komikdiil[easyRand(0,komikdiil.length)]);
  }
  
  console.log(msg.author.username + ' has sent a message, maybe i have friends afterall...');
});

function easyRand(min, max)
{
  return Math.floor(Math.random() * (max-min)) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

<<<<<<< Updated upstream
=======
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
  
  // send the url to the API ane get the resopnse.
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
  confidence = data.docs[0].similarity;// self explanatory.

  // set final response according to the type of the anime.
  if (episode == null) response = ' İsim: ' + romaji + '; %' + Math.floor(confidence*100) + ' eminim.';// This is for the movie type. # (don't know if there are season based animes with no episodes)
  else if  (season == '') response = ' İsim: ' + romaji + ', Bölüm: ' + episode + '; %' + Math.floor(confidence*100) + ' eminim.';// is for single season animes.
  else response = ' İsim: ' + romaji + ', Sezon: ' + season +', Bölüm: ' + episode + '; %' + Math.floor(confidence*100) + ' eminim.';// is for multiple season animes.
  return response;
}

>>>>>>> Stashed changes
client.login('ODM3NDQ2MDQyMTg1MjM2NTEw.YIsqZw.Ov2rsGeFkY8Fx9dvXfdBAWy5dkE');