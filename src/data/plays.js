const plays = [
    {
      name: "Macbeth",
      imgURL:
        "https://oxford-playhouse.transforms.svdcdn.com/production/2024/Spring/Macbeth/ETT-macbeth-art-final-highres-landscape.jpg?w=760&h=535&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5012&fp-y=0.3995&dm=1700729080&s=50c4300cbad24b7be191830f3f0f60d8",
      type: "History",
      themes:
        "Ambition, The Supernatural, Appearance vs Reality, Fate vs Free Will, Masculinity",
      quotes: [
        "'Fair is foul, and foul is fair.' Act 1, Scene 1",
        "'Out, out, brief candle! Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more: it is a tale told by an idiot, full of sound and fury, signifying nothing.' Act 5, Scene 5",
        "'Double, double toil and trouble; Fire burn and cauldron bubble.' Act 4, Scene 1",
        "'All the perfumes of Arabia will not sweeten this little hand.' Act 5, Scene 1",
        "'Is this a dagger which I see before me, The handle toward my hand? Come, let me clutch thee.' Act 2, Scene 1",
        "'Yet do I fear thy nature; It is too full o' the milk of human kindness.' Act 1, Scene 5",
        "'Stars, hide your fires; Let not light see my black and deep desires.' Act 1, Scene 4",
        "'Come, you spirits that tend on mortal thoughts, unsex me here, and fill me from the crown to the toe top full of direst cruelty!' Act 1, Scene 5",
        "'Look like the innocent flower, but be the serpent under ’t.' Act 1, Scene 5",
        "'Out, damned spot! Out, I say!' Act 5, Scene 1",
      ],
    },
    {
      name: "Hamlet",
      imgURL:
        "https://m.media-amazon.com/images/I/81vrtSN7YrL._AC_UF1000,1000_QL80_.jpg",
      type: "Tragedy",
      themes: "Family, Identity, Appearance vs Reality, Madness, Revenge",
      quotes: [
        "'To be, or not to be: that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles And by opposing end them?' Act 3 Scene 1",
        "'Something is rotten in the state of Denmark.' Act 1 Scene 4",
        "'This above all: to thine own self be true.' Act 1 Scene 3",
        "'Though this be madness, yet there is method in 't.' Act 2 Scene 2",
        "'The lady doth protest too much, methinks.' Act 3 Scene 2",
        "'The play's the thing wherein I'll catch the conscience of the king.' Act 2 Scene 2",
        "'There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.' Act 1 Scene 5",
        "'What a piece of work is a man! how noble in reason! how infinite in faculty! in form and moving how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world! the paragon of animals!' Act 2 Scene 2",
        "'Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe,' Act 1 Scene 2",
        "'Goodnight, sweet prince, And flights of angels sing thee to thy rest!' Act 5 Scene 2",
      ],
    },
    {
      name: "Twelfth Night",
      imgURL:
        "https://ih1.redbubble.net/image.1737837395.2966/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      type: "Comedy",
      themes:
        "Desire and Love, Ambition, Appearance vs Reality, Class, Masters and Servants",
      quotes: [
        "'If music be the food of love, play on.' Act 1 Scene 1",
        "'If music be the food of love, play on.' Act 2 Scene 5",
        "'Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.' Act 2 Scene 5",
        "'The more fool, madonna, to mourn for your brother's soul, being in heaven. Take away the fool, gentlemen.' Act 1 Scene 5",
        "'Dost thou think, because thou art virtuous, there shall be no more cakes and ale?' Act 2 Scene 3",
        "'Better a witty fool than a foolish wit.' Act 1 Scene 5",
        "'Journeys end in lovers meeting, Every wise man's son doth know.' Act 2 Scene 3",
        "'If ever thou shalt love, In the sweet pangs of it remember me.' Act 2 Scene 4",
        "'I am a great eater of beef, and I believe that does harm to my wit.' Act 1 Scene 3",
        "'What is love? 'Tis not hereafter; Present mirth hath present laughter.' Act 2 Scene 3",
      ],
    },
    {
      name: "Romeo & Juliet",
      imgURL:
        "https://shop.rsc.org.uk/cdn/shop/products/Star_Editions_Print_Romeo_Juliet_-_Love_is_a_Smoke_1.jpg?v=1585321161",
      type: "Tragedy",
      themes: "Desire and Love, Violence, Fate, Individuals vs Society, Family",
      quotes: [
        "'O Romeo, Romeo, wherefore art thou Romeo? Deny thy father and refuse thy name; Or, if thou wilt not, be but sworn my love, And I'll no longer be a Capulet.' Act 2 Scene 2",
        "'What's in a name? That which we call a rose by any other name would smell as sweet.' Act 2 Scene 2",
        "'Good Night, Good night! Parting is such sweet sorrow, That I shall say good night till it be morrow.' Act 2 Scene 2",
        "'A plague o' both your houses!' Act 3 Scene 1",
        "'These violent delights have violent ends, And in their triumph die, like fire and powder, Which, as they kiss, consume.' Act 2 Scene 6",
        "'For never was a story of more woe Than this of Juliet and her Romeo.' Act 5 Scene 3",
        "'My only love sprung from my only hate! Too early seen unknown, and known too late!' Act 1 Scene 5",
        "'Wisely and slow; they stumble that run fast.' Act 2 Scene 3",
        "'Love goes toward love as schoolboys from their books, But love from love, toward school with heavy looks.' Act 2 Scene 2",
        "'These violent delights have violent ends.' Act 2 Scene 6",
      ],
    },
    {
      name: "Othello",
      imgURL:
        "https://assets.mycast.io/posters/othello-fan-casting-poster-33886-medium.jpg?1586814123",
      type: "Tragedy",
      themes:
        "Desire and Love, Ambition, Appearance vs Reality, Class, Masters and Servants",
      quotes: [
        "'O, beware, my lord, of jealousy; It is the green-eyed monster which doth mock The meat it feeds on.' Act 3 Scene 3",
        "'I am not what I am.' Act 1 Scene 1",
        "'But I will wear my heart upon my sleeve For daws to peck at: I am not what I am.' Act 1 Scene 1",
        "'The robb'd that smiles, steals something from the thief; He robs himself that spends a bootless grief.' Act 1 Scene 3",
        "'Reputation, reputation, reputation! O, I have lost my reputation! I have lost the immortal part of myself, and what remains is bestial.' Act 2 Scene 3",
        "'O, the pity of it, Iago! Othello’s occupation’s gone!' Act 3 Scene 3",
        "'O, now, for ever Farewell the tranquil mind! Farewell content! Farewell the plumed troop and the big wars That make ambition virtue! O, farewell! Farewell the neighing steed and the shrill trump, The spirit-stirring drum, the ear-piercing fife, The royal banner, and all quality, Pride, pomp, and circumstance of glorious war! And, O you mortal engines, whose rude throats The immortal Jove's dead clamours counterfeit, Farewell! Othello's occupation's gone!' Act 3 Scene 3",
        "'It is the cause, it is the cause, my soul,— Let me not name it to you, you chaste stars!— It is the cause.' Act 5 Scene 2",
        "'Demand me nothing; what you know, you know: From this time forth I never will speak word.' Act 5 Scene 2",
        "'One that loved not wisely but too well.' Act 5 Scene 2",
      ],
    },
  ];
  
  export default plays;