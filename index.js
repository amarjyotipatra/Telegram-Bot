const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf("");
// console.log("token",bot);
bot.start((ctx) => ctx.reply('Welcome to Amar\'s Bot'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.on(message('text'),async (ctx)=>{
    if(ctx.update.message.text=='Who is Amar?'){
        ctx.reply(`Ultra Pro Max Legend`)
    }
    else if(ctx.update.message.text=='Who am I?'){
        ctx.reply(`Just another human being on earth`)
    }
    else if(ctx.update.message.text=='Time'){
        let today = new Date();
        let time =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log("t",today,time);
        await ctx.reply(time)
    }
    else if(ctx.update.message.text=='Date'){
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        console.log("D",today,date);
        await ctx.reply(date)
    }
    else if(ctx.update.message.text.includes('bye')){
         ctx.reply('Bye bye')
    }
    else if(ctx.update.message.text.includes('What')){
        ctx.reply('Google it.')
    }
    else if(ctx.update.message.text.includes('When')){
    ctx.reply('Time and tide waits for none.')
    }
    else if(ctx.update.message.text=='When is Amar going to marry?'){
        ctx.reply(`After you.`)
    }
    else ctx.reply(`Hi ${ctx.update.message.text}, What u want to know today?`)
})
bot.on(message('photo'),(ctx)=>{
    // console.log(ctx.update.message.caption);
    ctx.reply(`Hey ${ctx.update.message.caption}, Should I send this photo to your father?`)
})
bot.launch();
