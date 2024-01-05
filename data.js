const data = [
	{
		question: 'Followers of Jesus should love one another.',
		isAgreeCorrect: true,
		agree: 'Very good. That was an easy one.',
		disagree: "Seriously? That was an easy one. Let's try another one.",
		citations: [
			{
				citation: 'John 13:34',
				verse:
					'"A new command I give you: Love one another. As I have loved you, so you must love one another."',
			},
			{
				citation: 'Matthew 5:43',
				verse:
					'"You have heard that it was said, \'Love your neighbor and hate your enemy.\' But I tell you, love your enemies and pray for those who persecute you, that you may be children of your Father in heaven."',
			},
		],
	},
	{
		question:
			'In order to be a true disciple of Christ, you should love your family.',
		agree: "Sorry, Jesus isn't with you on this one.",
		disagree:
			'Good work! Jesus is on your side. Jesus teaches us that his disciples must hate themselves and their families.',
		isAgreeCorrect: false,
		citations: [
			{
				citation: 'Luke 14:26',
				verse:
					'"If anyone comes to me and does not hate father and mother, wife and children, brothers and sisters &ndash; yes, even their own life &ndash; such a person cannot be my disciple."',
			},
			{
				citation: 'Matthew 10:37',
				verse:
					'"Whoever loves father or mother more than me is not worthy of me, and whoever loves son or daughter more than me is not worthy of me."',
			},
		],
	},
	{
		question: 'Teaching is a good job for a woman.',
		agree:
			"Sorry, Jesus isn't with you on this one. Women have nothing to teach men, and should absolutely never hold any position of authority.",
		disagree:
			'Excellent! God made women to be subservient and quiet, and to do whatever their husbands command, not to be teachers. A woman should never teach a man, and certainly never to go into politics.',
		citations: [
			{
				citation: '1 Timothy 2:12',
				verse:
					'I do not permit a woman to teach or to assume authority over a man; she must be quiet.',
			},
		],
	},
	{
		question: 'Slavery is an abomination before the Lord.',
		agree:
			'That was a tough one, but the Bible disagrees with you here. Both the New and Old Testaments instruct us on how to treat our slaves.',
		disagree:
			'Good work! Both the New and Old Testaments instruct us on how to treat our slaves.',
		citations: [
			{
				citation: 'Ephesians 6:5',
				verse:
					'Slaves, obey your earthly masters with respect and fear, and with sincerity of heart, just as you would obey Christ.',
			},
			// {
			// 	citation: 'Luke 12:47',
			// 	verse:
			// 		"The servant who knows the master's will and does not do what the master wants will be beaten with many blows.",
			// },
		],
	},
	{
		question: 'The Lord condemns evil atheist regimes.',
		agree:
			'Unfortunately, the Bible disagrees with you here.<br/>Every leader is chosen by God, and those who rebel against their leaders are guilty as if they were rebelling against God Himself.<br/>God is on the side of Stalin, Mao, Pol Pot, and Hitler, and George Washington was a very bad Christian for rebelling against the established authority.',
		disagree:
			"You're too good! The Bible agrees with you.<br/>Every leader is chosen by God, and those who rebel against their leaders are guilty as if they were rebelling against God Himself.<br/>God is on the side of Stalin, Mao, Pol Pot, and Hitler, and George Washington was a very bad Christian for rebelling against the established authority.",
		citations: [
			{
				citation: 'Romans 13:1',
				verse:
					'Let everyone be subject to the governing authorities, for there is no authority except that which God has established. The authorities that exist have been established by God. Consequently, whoever rebels against the authority is rebelling against what God has instituted, and those who do so will bring judgment on themselves.',
			},
		],
	},
	{
		question:
			'Anyone can choose to accept Jesus Christ as their Lord and Savior.',
		agree:
			'Well, not exactly. God decides whose hearts will be hardened against Him, not the person.',
		disagree:
			"That's right! Nobody decides what God has already chosen for them.",
		citations: [
			{
				citation: 'Romans 9:18',
				verse:
					'So then He has mercy on whom He desires, and He hardens whom He desires. What then shall we say? Is God unjust? Not at all! For he says to Moses, "I will have mercy on whom I have mercy, and I will have compassion on whom I have compassion." So then, it does not depend on the person who wants it nor the one who runs, but on God who has mercy.',
			},
		],
	},
	{
		question: 'Anyone who calls on the name of the Lord will be saved.',
		isContradiction: true,
		citations: [
			{
				citation: 'Acts 2:21',
				verse: 'And everyone who calls on the name of the Lord will be saved.',
			},
			{
				citation: 'Matthew 7:21',
				verse:
					'Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of heaven, but only the one who does the will of my Father who is in heaven.',
			},
		],
	},
	{
		question: 'Abortion is a sin and an abomination in the eyes of Jesus.',
		agree:
			"Well, Jesus isn't recorded as having said anything about this practice, but the Old Testament does.",
		disagree:
			"That's right! Jesus isn't recorded as having said anything about this practice, but the Old Testament does.",
		citations: [
			{
				citation: 'Numbers 5:16',
				verse:
					'Here the priest is to put the woman under this curse &ndash; "May the Lord cause you to become a curse among your people when He makes your womb miscarry and your abdomen swell. May this water that brings a curse enter your body so that your abdomen swells or your womb miscarries."',
			},
		],
	},
	{
		question:
			"Great wealth is a sign of God's favor, a blessing, and a reward for being a good Christian.",
		agree:
			'The Bible disagrees with you. Many verses discuss the virtue of poverty and condemn the accumulation of wealth.',
		disagree:
			'The Bible agrees with you. Many verses discuss the virtue of poverty and condemn the accumulation of wealth.',
		citations: [
			{
				citation: 'Luke 16:13',
				// link: '',
				verse:
					'"No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money."',
			},
			{
				citation: 'Mark 10:25',
				verse:
					'It is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God.',
			},
			{
				citation: 'Luke 12:33',
				verse:
					'Sell your possessions and give to the poor. Provide purses for yourselves that will not wear out, a treasure in heaven that will never fail, where no thief comes near and no moth destroys. For where your treasure is, there your heart will be also.',
			},
			{
				citation: '1 Timothy 6:9',
				verse:
					'Those who want to get rich fall into temptation and a trap and into many foolish and harmful desires that plunge people into ruin and destruction. For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs.',
			},
			{
				citation: 'Luke 6:24',
				verse:
					'But woe to you who are rich, for you have already received your comfort.',
			},
		],
	},
	{
		question:
			'The Laws of Leviticus, Numbers, and Deuteronomy do not apply to Christians and were written only for the Israelites.',
		agree: "I'm afraid the Bible doesn't quite agree. Sorry, no bacon for you!",
		disagree:
			"That's right! So stop wearing those poly-cotton blends, and put down that cheeseburger.",
		citations: [
			{
				citation: 'Luke 16:17',
				verse:
					'It is easier for heaven and earth to disappear than for the least stroke of a pen to drop out of the Law.',
			},
			{
				citation: 'Matthew 5:17',
				verse:
					'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them. For truly I tell you, until heaven and earth disappear, not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law until everything is accomplished.',
			},
			{
				citation: 'Romans 3:31',
				verse:
					'Do we, then, nullify the law by this faith? Not at all! Rather, we uphold the law.',
			},
		],
	},
	{
		question: 'A divorced person may never remarry.',
		isAgreeCorrect: true,
		agree:
			'You and the Bible agree on this point. Remarrying after divorce constitutes a violation of Commandment 7: Thou Shalt not Commit Adultery.',
		disagree:
			'Unfortunately, the Bible disagrees with you here. Remarrying after divorce constitutes a violation of Commandment 7: Thou Shalt not Commit Adultery.',
		citations: [
			{
				citation: 'Luke 16:18',
				verse:
					'Anyone who divorces his wife and marries another woman commits adultery, and the man who marries a divorced woman commits adultery.',
			},
			{
				citation: 'Matthew 5:32',
				verse:
					'But I tell you that anyone who divorces his wife, except for sexual immorality, makes her the victim of adultery, and anyone who marries a divorced woman commits adultery.',
			},
		],
	},
	{
		question:
			'Lying and cheating are allowed, so long as it is done in the service of the Lord.',
		isAgreeCorrect: true,
		agree:
			"You align with the Bible here. Whatever one's true motivation, anything is permitted so long as Jesus is praised.",
		disagree:
			"Sorry, the Bible disagrees with you. Whatever one's true motivation, anything is permitted so long as Jesus is praised.",
		citations: [
			{
				citation: 'Phillipians 1:18',
				verse:
					'But what does it matter? The important thing is that in every way, whether from false motives or true, Christ is preached. And because of this I rejoice.',
			},
		],
	},
	{
		question: 'Disrespectful children should be put to death.',
		isAgreeCorrect: true,
		agree: 'Congratulations! Your values align with those of Jesus.',
		disagree:
			'Jesus has a difference of opinion with you here. He upholds old Hebrew law in this case.',
		citations: [
			{
				citation: 'Matthew 15:4',
				verse:
					'For God said, "Honor your father and mother," and, "Anyone who curses their father or mother is to be put to death."',
			},
		],
	},
	{
		question:
			'The faithful always win the lottery when they sincerely ask Jesus for this miracle.',
		isAgreeCorrect: true,
		agree: 'Congratulations! The Bible supports this fact.',
		disagree: 'Actually, Jesus does make this promise to his followers.',
		citations: [
			{
				citation: 'Mark 11:23',
				verse:
					'"Truly I tell you, if anyone says to this mountain, \'Go, throw yourself into the sea,\' and does not doubt in their heart but believes that what they say will happen, it will be done for them. Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."',
			},
			{
				citation: 'Matthew 17:20',
				verse:
					'He replied, "Because you have so little faith. Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, \'Move from here to there,\' and it will move. Nothing will be impossible for you."',
			},
		],
	},
	{
		question: 'Man is not saved by good deeds, but by faith in Christ alone.',
		isContradiction: true,
		citations: [
			{
				citation: 'Galatians 2:15',
				verse:
					'"We who are Jews by birth and not sinful Gentiles know that a person is not justified by the works of the law, but by faith in Jesus Christ. So we, too, have put our faith in Christ Jesus that we may be justified by faith in Christ and not by the works of the law, because by the works of the law no one will be justified."',
			},
			{
				citation: 'James 2:24',
				verse:
					'You see that a person is considered righteous by what they do and not by faith alone.',
			},
		],
	},
	{
		question: 'Jesus was a perfect man, and he could never sin.',
		agree:
			'Sorry, but Jesus does sin against his own commandment when he calls teachers of the law "blind fools", thereby placing himself "in danger of the fire of hell", according to his words.',
		disagree:
			'Sadly, you\'re right. Jesus does sin against his own commandment when he calls teachers of the law "blind fools", thereby placing himself "in danger of the fire of hell", according to his words.',
		citations: [
			{
				citation: 'Matthew 5:22',
				verse:
					' But I tell you that anyone who is angry with a brother or sister will be subject to judgment. Again, anyone who says to a brother or sister, "Raca," is answerable to the court. And anyone who says, "You fool!" will be in danger of the fire of hell.',
			},
			{
				citation: 'Matthew 23:17',
				verse:
					'"You blind fools! Which is greater: the gold, or the temple that makes the gold sacred?"',
			},
		],
	},
	{
		question: 'Jesus came to bring peace on Earth.',
		agree: "Sorry, that isn't exactly what He says.",
		disagree: 'You and the Bible agree!',
		citations: [
			{
				citation: 'Matthew 10:34',
				verse:
					'"Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword. For I have come to turn a man against his father, a daughter against her mother, a daughter-in-law against her mother-in-law &ndash; A man\'s enemies will be the members of his own household."',
			},
		],
	},
	{
		question: 'Jesus came to judge the world.',
		isContradiction: true,
		citations: [
			{
				citation: 'John 9:39',
				verse:
					'Jesus said, "For judgment I have come into this world, so that the blind will see and those who see will become blind."',
			},
			{
				citation: 'John 12:47',
				verse:
					'"If anyone hears my words but does not keep them, I do not judge that person. For I did not come to judge the world, but to save the world."',
			},
		],
	},
	// {
	// 	question: 'Bonus: The Lord God is a kind, just, and loving god.',
	// 	isAgreeCorrect: true,
	// 	agree: '',
	// 	disagree: '',
	// 	citations: [
	// 		{
	// 			citation: '',
	// 			verse: '',
	// 		},
	// 	],
	// },
	// {
	// 	question: '',
	// 	agree: '',
	// 	disagree: '',
	// 	isContradiction: true,
	// 	citations: [
	// 		{
	// 			citation: '',
	// 			verse: '',
	// 		},
	// 		{
	// 			citation: '',
	// 			verse: '',
	// 		},
	// 	],
	// },
];
