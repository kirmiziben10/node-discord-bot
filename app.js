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

client.login('ODM3NDQ2MDQyMTg1MjM2NTEw.YIsqZw.Ov2rsGeFkY8Fx9dvXfdBAWy5dkE');