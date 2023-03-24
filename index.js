/*GENERAL INFO 
> EMBED COLOR: 4285F4
> EMBED COLORLESS COLOR: 36393F
> GDSC logo link : "https://i.imgur.com/F5crtmC.png"
> Welcome link: "https://i.imgur.com/zQ1vz7h.png"
> Socials link: "https://i.imgur.com/uOaWjy1.png"
> Rules link: "https://i.imgur.com/bVbxvVO.png"
*/

// BASE IMPORTS AND CONFIGURATIONS =======
import { config } from "dotenv";
import { channelLink, Client, EmbedBuilder, Events, GatewayIntentBits, InteractionCollector, Message, ReactionCollector, Routes, SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, InteractionType} from "discord.js"; 
import { REST } from '@discordjs/rest'
config();
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessages], disableEveryone:false});
const BOT_TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.ID;
// END OF BASE IMPORTS AND CONFIGURATIONS ====================

//LOGIN =================
client.login(BOT_TOKEN);
client.on('ready', () => {
    console.log(`[${client.user.id}]:${client.user.tag} logged in successfully!`);
    });
// END OF LOGIN =======================


//EMBEDS ====
const welcomeEmbed = new EmbedBuilder().setImage('https://i.imgur.com/zQ1vz7h.png').setColor('4285F4')
const welcomeConetentEmbed = new EmbedBuilder().setColor('36393F').setDescription(
    `
    Greetings and welcome to **GDSC USTHB**! 
    Our mission is to bring together a diverse group of individuals with an interest in computer science and technology. 
    The club aims to provide a platform for members to network, gain new technical knowledge and insights, and stay up-to-date on industry developments. 
    Regardless of skill level, all are welcome to join and contribute to the growth and success of the club. 
    We look forward to fostering a dynamic community and advancing the field of computer science together.
    `
)
const rulesImgEmbed = new EmbedBuilder().setImage('https://i.imgur.com/bVbxvVO.png').setColor('4285F4')
const rulesEmbed = new EmbedBuilder().setColor('36393F').setDescription(
    `
    In order to provide a **safe** and **welcoming** environment for our members, 
    these are our server rules and guidelines that **must** be followed by all members at all times. 
    Failing to abide by these rules, guidelines may lead to a **Warning**, **Suspension**, **Ban**.

    ▫️ You **must** first respect the [Terms of Service](https://discordapp.com/tos) & [Guidelines](https://discord.com/guidelines) of Discord.

    ▫️ Keep personal issues out of chat. Harassment of other members and personal attacks are not tolerated, This includes targeting someone just to provoke them.

    ▫️ Keep all discussion civil and in the right channels, Try using threads as much as possible for follow-up discussions. We may ask you to move your conversation.

    ▫️ No inappropriate language. Remain respectful of others at all times.

    ▫️ Do not advertise outside of the designated channels. Advertising Discord servers is strictly forbidden.

    ▫️ No spamming or flooding chat rooms with messages.

    ▫️ Avoid using mentions excessively with no purpose. This applies to admins, moderators, members.

    ▫️ No conversations around illegal activities.

    ▫️ Controversial topics intended or likely to cause upset or offence, No offensive verbal or written comments related to gender, disability, mental illness, physical appearance, age, race, or religion.

    ▫️ Alternate accounts are not allowed under any circumstances.

    ▫️ Anything to target specific groups/individuals is prohibited (Clubs, Groups...etc.).

    ▫️ Admins and moderators will use their judgment when dealing with disruptive or otherwise inappropriate behavior. 

    ▫️ Try to give constructive feedback in the best way possible by expressing what you want using the appropriate language.(It's recommended to use the channel <#920283353847062538> 
    `
).setFooter({text: 'GDSC USTHB',iconURL:'https://i.imgur.com/F5crtmC.png'})
const socialsEmbed = new EmbedBuilder().setImage('https://i.imgur.com/uOaWjy1.png').setColor('4285F4')
const helpEmbed = new EmbedBuilder().setColor('4285F4').setThumbnail('https://i.imgur.com/F5crtmC.png').setDescription(
    `In the end.
    If there is any issue or anything that you think needs to be reported please feel free to reach out to <@771788662227730452> or <@&883128020683083867> team
    
    Contact: **gdsc.usthb@gmail.com**`
)
//END OF EMBEDS =====

// MESSAGE CREATE EVENT ====
client.on('messageCreate', msg => {
    if (msg.content === 'g=show') {
        client.channels.cache.get('879472014417596506').send(
            {
                embeds:[welcomeEmbed, welcomeConetentEmbed, rulesImgEmbed,  rulesEmbed,socialsEmbed],
                components: [
                    {
                        type:1,
                        components:[
                            {
                                type:2,
                                label:'Facebook',
                                style:5,
                                url:'https://www.facebook.com/profile.php?id=100083252174856',
                                emoji: {
                                    name:'fb',
                                    id:'1071457316181909574'
                                }                          
                            },
                            {
                                type:2,
                                label:'Instagram',
                                style:5,
                                url:'https://www.instagram.com/gdsc__usthb/',
                                emoji: {
                                    name:'ig',
                                    id:'1071457142860677131'
                                }  
                                },                                
                            {
                                type:2,
                                label:'Twitter',
                                style:5,
                                url:'https://twitter.com/gdsc_usthb',
                                emoji: {
                                    name:'twtr',
                                    id:'1071457192600932472'
                                }                           
                            },
                            {
                                type:2,
                                label:'LinkedIn',
                                style:5,
                                url:'https://www.linkedin.com/company/google-developer-student-club-usthb/',
                                emoji: {
                                    name:'li',
                                    id:'1071457251665117214'
                                }                               
                            },
                        ]
                    }
                    ],
                    
            });

    }
    else if (msg.content === 'g=show1') {
        client.channels.cache.get('879472014417596506').send(
            {
                embeds:[helpEmbed],
            }
        )
    }
    else if (msg.content.startsWith('g=express')) {
        const arg = msg.content.split(' ')
        const showEmbed = new EmbedBuilder()
        .setColor('4285F4')
        .setDescription(
            `
            Express your opinions and thoughts here! 

            ** This express system is a fast and convenient method for sending a one-time message to a designated email channel, **
            ** allowing you to quickly communicate your thoughts and opinions. **
            
            As members of GDSC USTHB, 
            we expect all participants to maintain a respectful and constructive tone.
            When expressing your opinions, please keep in mind the following guidelines:

            ▫️ Avoid personal attacks, hate speech and offensive language.
            ▫️ Stay on topic: Stick to the subject while expressing your opinion.
            ▫️  Ensure clear and concise expression.
            `
        )
        client.channels.cache.get(arg[1]).send(
            {
                embeds:[showEmbed],
                components: [
                    {
                        type:1,
                        components:[
                            {
                                type:2,
                                label:'Express.js',
                                custom_id:'expressBtn',
                                style:1,
                            },
                        ]
                    }
                    ]
            }
        )
    }

})
//END OF MESSAGE CREATE EVENT ========

//INTERACTIONS
client.on(Events.InteractionCreate, interaction => {
    //CHAT INPUT_COMMAND 
    if (interaction.isChatInputCommand()){
        if (interaction.commandName === 'post') {
            const modalPost = new ModalBuilder()
            .setTitle('Social media')
            .setCustomId('socialpost')
            .setComponents(
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Description')
                .setCustomId('description')
                .setStyle(TextInputStyle.Paragraph)
            ),
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Facebook post link')
                .setCustomId('fblink')
                .setStyle(TextInputStyle.Short)
            ),
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Instagram post link')
                .setCustomId('instalink')
                .setStyle(TextInputStyle.Short)
            ),
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('LinkedIn post link')
                .setCustomId('lilink')
                .setStyle(TextInputStyle.Short)
            ),
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Twitter post link')
                .setCustomId('twtrlink')
                .setStyle(TextInputStyle.Short)
            )
            );
            interaction.showModal(modalPost)
        }
        else if (interaction.commandName === 'post_activity') {
            const modalActivity = new ModalBuilder()
            .setTitle('Activity')
            .setCustomId('activityPost')
            .setComponents(
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Description')
                .setCustomId('description')
                .setStyle(TextInputStyle.Paragraph)
            ),
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Activity date')
                .setCustomId('activityDate')
                .setStyle(TextInputStyle.Short)
                .setRequired(false)
            ),
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Activity time')
                .setCustomId('activityTime')
                .setStyle(TextInputStyle.Short)
                .setRequired(false)
            ),
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Google Meet link')
                .setCustomId('meetlink')
                .setStyle(TextInputStyle.Short)
                .setRequired(false)
            )
            );
            interaction.showModal(modalActivity)
        }
    }
    // END OF CHAT INPUT COMMAND

    //BUTTONS
    else if (interaction.isButton()) {
        if (interaction.customId === 'expressBtn') {
            const modal = new ModalBuilder()
            .setTitle('EXPRESS')
            .setCustomId('registerUserModal')
            .setComponents(
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('What\'s about')
                .setCustomId('object')
                .setStyle(TextInputStyle.Short)
            ),
            new ActionRowBuilder().setComponents(
                new TextInputBuilder()
                .setLabel('Express your opinion')
                .setCustomId('express')
                .setStyle(TextInputStyle.Paragraph)
            )
            );
            interaction.showModal(modal)
        }
    }
    //END OF BUTTONS

    //MODAL SUBMIT
    else if (interaction.type === InteractionType.ModalSubmit) {
        console.log('Modal Submitted...');
        if (interaction.customId === 'registerUserModal') {
    
            const modalEmbed = new EmbedBuilder()
            .setColor('4285F4')
            .setAuthor({name:`Someone expressed their opinion:`})
            .addFields(
                {
                    name:`About:`,
                    value:`${interaction.fields.getTextInputValue('object')}`
                },
                {
                    name:'Their opinion:',
                    value:`${interaction.fields.getTextInputValue(`express`)}`
                }
            )
            .setTimestamp()
            .setFooter({text: `By ${interaction.user.tag}`})
        client.channels.cache.get('1072240178296520766').send(
        {
            embeds:[modalEmbed],
            content:`<@221665432019402753> | <@771788662227730452>`
        }
        )
        interaction.reply({
            content: `You successfully submitted it!`,
            ephemeral:true,
        });
        }
        else if (interaction.customId === 'socialpost') {
            const socialPostEmbed = new EmbedBuilder()
            .setColor('4285F4')
            .setTitle('New social media post!')
            .setDescription(interaction.fields.getTextInputValue('description'))
            .addFields({name: "Check out on: ", value:`[Facebook](${interaction.fields.getTextInputValue('fblink')}) | [Instagram](${interaction.fields.getTextInputValue('instalink')}) | [LinkedIn](${interaction.fields.getTextInputValue('lilink')}) | [Twitter](${interaction.fields.getTextInputValue('twtrlink')})`})
            
        client.channels.cache.get('921106241441374208').send(
            {
                embeds:[socialPostEmbed],
                content:`@everyone`
            }
            );
        client.channels.cache.get('919215628089442384').send(
            {
                embeds:[socialPostEmbed],
                content:`@everyone`
            }
            )
            interaction.reply({
                    content: `You successfully posted it!`,
                    ephemeral:true,
                });
        }
        else if (interaction.customId === 'activityPost') {
            const activityPostEmbed = new EmbedBuilder()
            .setColor('4285F4')
            .setTitle('New activity announcement!')
            .setDescription(interaction.fields.getTextInputValue('description'))
            .addFields({name: "Join us: ", value:`[Here](${interaction.fields.getTextInputValue('meetlink')}) on **${interaction.fields.getTextInputValue('activityDate')}** at **${interaction.fields.getTextInputValue('activityTime')}**`})
        
        
            const activityPostEmbed1 = new EmbedBuilder()
            .setColor('4285F4')
            .setTitle('New activity announcement!')
            .setDescription(interaction.fields.getTextInputValue('description'))
            
            const activityPostEmbed2 = new EmbedBuilder()
            .setColor('4285F4')
            .setTitle('New activity announcement!')
            .setDescription(interaction.fields.getTextInputValue('description'))
            .addFields({name: "Join us: ", value:`On **${interaction.fields.getTextInputValue('activityDate')}** at **${interaction.fields.getTextInputValue('activityTime')}**`})
            
            const activityPostEmbed3 = new EmbedBuilder()
            .setColor('4285F4')
            .setTitle('New activity announcement!')
            .setDescription(interaction.fields.getTextInputValue('description'))
            .addFields({name: "Join us: ", value:`[Here](${interaction.fields.getTextInputValue('meetlink')})`})
            
            if(interaction.fields.getTextInputValue('meetlink') === '' && interaction.fields.getTextInputValue('activityDate') === '' && interaction.fields.getTextInputValue('activityTime') === '') {
                client.channels.cache.get('943601743210610748').send(
                    {
                        embeds:[activityPostEmbed1],
                        content:`<@&1050147217136164884>`
                    }
                )
            }

            else if(interaction.fields.getTextInputValue('meetlink') === '') {
                client.channels.cache.get('943601743210610748').send(
                    {
                        embeds:[activityPostEmbed2],
                        content:`<@&1050147217136164884>`
                    }
                )
            }

            else if(interaction.fields.getTextInputValue('activityDate') === '' && interaction.fields.getTextInputValue('activityTime') === '') {
                client.channels.cache.get('943601743210610748').send(
                    {
                        embeds:[activityPostEmbed3],
                        content:`<@&1050147217136164884>`
                    }
                )
            }

            else {
                client.channels.cache.get('943601743210610748').send(
                    {
                        embeds:[activityPostEmbed],
                        content:`<@&1050147217136164884>`
                    }
                )
            }
        interaction.reply({
            content: `You successfully posted it!`,
            ephemeral:true,
        });
        }
    }
    //END OF MODAL SUBMIT
})
// END OF INTERACTIONS 

// COMMANDS LIST
const commands = [
    {
        name:'post',
        description:'Post social media announcements',
    },
    {
        name:'post_activity',
        description:'Posts activity announcement',
    },
];
// END OF COMMANDS LIST ============

//DECLARING REST API FOR COMMANDS
const rest = new REST({version:'10'}).setToken(BOT_TOKEN);
console.log('Started refreshing application (/) commands.');
rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
console.log('Successfully reloaded application (/) commands.');
// END OF DECLARING REST API FOR COMMANDS =========== 
