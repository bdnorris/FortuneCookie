/*var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
//xhr.responseType = 'json';

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://localhost:3000/js/proverbs.json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "67638480-5a7f-5ff2-821f-ca3a98a18388");
xhr.setRequestHeader("responseType", "json");

xhr.send(data);
*/

var apiURL = 'http://localhost:3000/js/proverbs.json';

var demoList = new Vue({

  el: '#demoList',

  data: {
    //currentBranch: 'dev',
    items: [
      {
        "message": "A friend's frown is better than a fool's smile."
      },
      {
        "message": "A friend in need is a friend indeed."
      },
      {
        "message": "A friend is easier lost than found."
      },
      {
        "message": "A friend to everybody is a friend to nobody."
      },
      {
        "message": "A problem shared is a problem halved."
      },
      {
        "message": "A true friend is someone who reaches for your hand, but touches your heart."
      },
      {
        "message": "False friends are worse than open enemies."
      },
      {
        "message": "Flattery is all right so long as you don't inhale."
      },
      {
        "message": "Give credit where credit is due."
      },
      {
        "message": "Grief divided is made lighter."
      },
      {
        "message": "Memory is the treasure of the mind."
      },
      {
        "message": "Nothing dries sooner than a tear."
      },
      {
        "message": "Old friends and old wine are best."
      },
      {
        "message": "The best of friends must part."
      },
      {
        "message": "The best things are not bought and sold."
      },
      {
        "message": "There is no better looking-glass than an old friend."
      },
      {
        "message": "To err is human (To forgive divine)."
      },
      {
        "message": "Two cannot fall out if one does not choose."
      },
      {
        "message": "A loveless life is a living death."
      },
      {
        "message": "Absence makes the heart grow fonder."
      },
      {
        "message": "All's fair in love and war."
      },
      {
        "message": "Beauty is in the eye of the beholder."
      },
      {
        "message": "Before you meet the handsome prince you have to kiss a lot of toads."
      },
      {
        "message": "Better to have loved and lost, than to have never loved at all."
      },
      {
        "message": "Cold hands, warm heart."
      },
      {
        "message": "Distance makes the heart grow fonder."
      },
      {
        "message": "Faint heart never won fair lady."
      },
      {
        "message": "First impressions are the most lasting."
      },
      {
        "message": "Hatred is as blind as love."
      },
      {
        "message": "Love and a cough cannot be hid."
      },
      {
        "message": "Love does much but money does all."
      },
      {
        "message": "Love levels all inequalities."
      },
      {
        "message": "Love makes a good eye squint."
      },
      {
        "message": "Love sees no faults."
      },
      {
        "message": "Love sought is good, but given unsought is better."
      },
      {
        "message": "Love to live and live to love."
      },
      {
        "message": "Love with life is heaven; and life unloving, hell."
      },
      {
        "message": "Man is the head but woman turns it."
      },
      {
        "message": "Marry in haste, repent at leisure."
      },
      {
        "message": "The course of love never did run smooth."
      },
      {
        "message": "The Lord loveth a cheerful liar."
      },
      {
        "message": "There is a thin line between love and hate."
      },
      {
        "message": "To eat one's heart out."
      },
      {
        "message": "True beauty lies within."
      },
      {
        "message": "You can't live on bread alone."
      },
      {
        "message": "A good friend is one's nearest relation."
      },
      {
        "message": "A man is known by the company he keeps."
      },
      {
        "message": "A man of straw needs a woman of gold."
      },
      {
        "message": "A wink is as good as a nod, to a blind man."
      },
      {
        "message": "An injury is forgiven better than an injury revenged."
      },
      {
        "message": "Anger and hate hinder good counsel."
      },
      {
        "message": "Appearances are deceptive."
      },
      {
        "message": "At a round table there's no dispute about the place."
      },
      {
        "message": "Attack is the best form of defense"
      },
      {
        "message": "Be slow in choosing, but slower in changing."
      },
      {
        "message": "Behind every great man stands a strong woman."
      },
      {
        "message": "Blood is thicker than water."
      },
      {
        "message": "Cheerfulness smooths the road of life."
      },
      {
        "message": "Confess and be hanged."
      },
      {
        "message": "Conscience makes cowards of us all."
      },
      {
        "message": "Don't blow your own trumpet."
      },
      {
        "message": "Do as you would be done by."
      },
      {
        "message": "Do unto others as you would have them do to you."
      },
      {
        "message": "Grow angry slowly; there's plenty of time."
      },
      {
        "message": "He bears misery best that hides it most."
      },
      {
        "message": "He that hurts another, hurts himself."
      },
      {
        "message": "He who wronged you will hate you."
      },
      {
        "message": "Heavy givers are light complainers."
      },
      {
        "message": "I am rubber and you are glue. Your words bounce off me and stick to you."
      },
      {
        "message": "If you lose your temper, don't look for it."
      },
      {
        "message": "It's not over till it's over."
      },
      {
        "message": "Joy shared is double joy; grief shared is (only) half grief."
      },
      {
        "message": "Laugh and the world laughs with you. Cry and you cry alone."
      },
      {
        "message": "Never let the sun set on angry heart."
      },
      {
        "message": "Never let the sun go down on your anger."
      },
      {
        "message": "Never let the sun set on thy wrath."
      },
      {
        "message": "Never quarrel with one's bread and butter."
      },
      {
        "message": "No man or woman is worth your tears, and the one who is, won't make you cry."
      },
      {
        "message": "Open confession is good for the soul."
      },
      {
        "message": "Out of sight, out of mind."
      },
      {
        "message": "Patience is a virtue."
      },
      {
        "message": "Persuasion is better than force."
      },
      {
        "message": "Spare the rod and spoil the child."
      },
      {
        "message": "Temper is so good a thing that we should never lose it."
      },
      {
        "message": "To the world you may be one person, but to one person, you may be the world."
      },
      {
        "message": "Wondrous is the strength of cheerfulness."
      },
      {
        "message": "You made your bed, now you must lie in it."
      },
      {
        "message": "A bully is always a coward."
      },
      {
        "message": "A handsome shoe often pinches the foot."
      },
      {
        "message": "A good thing is all the sweeter when won with pain."
      },
      {
        "message": "A man too careful of danger lives in continual torment."
      },
      {
        "message": "A miss is as good as a mile."
      },
      {
        "message": "Adversity flatters no man"
      },
      {
        "message": "Adversity and loss make a man wise"
      },
      {
        "message": "All promises are either broken or kept."
      },
      {
        "message": "All things come to those that wait."
      },
      {
        "message": "An eye for an eye and a tooth for a tooth."
      },
      {
        "message": "An open door may tempt a saint."
      },
      {
        "message": "As one door closes, another always opens."
      },
      {
        "message": "As you go through life, make this your goal, watch the doughnut and not the hole."
      },
      {
        "message": "Brevity is the soul of wit."
      },
      {
        "message": "Cut your coat according to the cloth."
      },
      {
        "message": "Discretion is the better part of valour."
      },
      {
        "message": "Do right and fear no man."
      },
      {
        "message": "Easy come, easy go."
      },
      {
        "message": "Experience is the hardest teacher. She gives the test first and the lesson afterwards."
      },
      {
        "message": "Familiarity breeds contempt."
      },
      {
        "message": "Fortune favours the brave."
      },
      {
        "message": "Hall binks are oft sliddery."
      },
      {
        "message": "He who laughs last, laughs longest."
      },
      {
        "message": "Home is where the heart is."
      },
      {
        "message": "Hope for the best and prepare for the worst."
      },
      {
        "message": "If wishes were horses, beggars would ride."
      },
      {
        "message": "In the country of the blind, the one-eyed man is king."
      },
      {
        "message": "It never rains but it pours."
      },
      {
        "message": "Leave tomorrow till tomorrow."
      },
      {
        "message": "Life begins at forty."
      },
      {
        "message": "Lifes trials may be hard to bear, but patience can outlive them."
      },
      {
        "message": "Live and learn."
      },
      {
        "message": "Manners maketh the man."
      },
      {
        "message": "No man is worse for knowing the worst of himself."
      },
      {
        "message": "Only the good die young."
      },
      {
        "message": "Procrastination is the thief of time."
      },
      {
        "message": "The best things in life are free."
      },
      {
        "message": "The family that prays together, stays together."
      },
      {
        "message": "The longer you live the more you see."
      },
      {
        "message": "The meek shall inherit the earth."
      },
      {
        "message": "The receiver is as bad as the thief."
      },
      {
        "message": "To wait and be patient soothes many a pang."
      },
      {
        "message": "Up and down like a fiddler's elbow."
      },
      {
        "message": "We cannot erase the sad records from our past."
      },
      {
        "message": "What the eye doesn't see, the heart doesn't grieve over."
      },
      {
        "message": "While there's life there's hope."
      },
      {
        "message": "After dinner rest a while, after supper walk a mile."
      },
      {
        "message": "An apple a day keeps the doctor away."
      },
      {
        "message": "A drowning man will clutch at a straw."
      },
      {
        "message": "An onion a day keeps everyone away."
      },
      {
        "message": "Another pot ! Try the teapot."
      },
      {
        "message": "As fit as a fiddle."
      },
      {
        "message": "As hard as nails."
      },
      {
        "message": "As sick as a dog."
      },
      {
        "message": "As you go through life, make this your goal, watch the doughnut and not the hole."
      },
      {
        "message": "Be not a baker if your head is made of butter."
      },
      {
        "message": "Beauty is but skin deep."
      },
      {
        "message": "Better late thrive than never do well."
      },
      {
        "message": "Better to be poor and healthy rather than rich and sick."
      },
      {
        "message": "Better to wear out than rust out."
      },
      {
        "message": "Bread never falls but on its buttered side."
      },
      {
        "message": "Cleanliness is next to Godliness."
      },
      {
        "message": "Content is health to the sick and riches to the poor."
      },
      {
        "message": "Don't bite the hand that feeds you."
      },
      {
        "message": "Drink like a fish, water only."
      },
      {
        "message": "Early to bed, early to rise, makes you healthy, wealthy & wise."
      },
      {
        "message": "Fair words butter no cabbage."
      },
      {
        "message": "Good wine ruins the purse, and bad wine ruins the stomach."
      },
      {
        "message": "Greediness burst the bag."
      },
      {
        "message": "Grumbling makes the loaf no larger."
      },
      {
        "message": "Half a loaf is better than none."
      },
      {
        "message": "He who drinks a little too much drinks much too much."
      },
      {
        "message": "He who rises late must trot all day."
      },
      {
        "message": "His eyes are bigger than his belly."
      },
      {
        "message": "Hunger is the best sauce."
      },
      {
        "message": "It is no use crying over spilt milk."
      },
      {
        "message": "Old friends and old wine are best."
      },
      {
        "message": "One man's meat is another man's poison."
      },
      {
        "message": "Ready money is ready medicine."
      },
      {
        "message": "Sound as a bell."
      },
      {
        "message": "The nearer the bone the sweeter the meat."
      },
      {
        "message": "The proof of the pudding is in the eating."
      },
      {
        "message": "There's many a slip, twixt cup and the lip."
      },
      {
        "message": "To add insult to injury."
      },
      {
        "message": "To look as if butter will not melt in his mouth."
      },
      {
        "message": "Too many cooks spoil the broth."
      },
      {
        "message": "What can't be cured must be endured."
      },
      {
        "message": "What you eat today walks and talks tomorrow."
      },
      {
        "message": "You are what you eat."
      },
      {
        "message": "You can't have your cake and eat it too."
      },
      {
        "message": "You can eat an elephant if you do it one mouthful at a time."
      },
      {
        "message": "You can't unscramble a scrambled egg."
      },
      {
        "message": "Wondrous is the strength of cheerfulness."
      },
      {
        "message": "A fool uttereth all his mind."
      },
      {
        "message": "A bad excuse is better then none."
      },
      {
        "message": "Actions speak louder than words."
      },
      {
        "message": "Angry words fan the fire like wind."
      },
      {
        "message": "Bad news travels fast."
      },
      {
        "message": "Call a spade a spade."
      },
      {
        "message": "Do as I say not as I do."
      },
      {
        "message": "Don't advertise: Tell it to a gossip."
      },
      {
        "message": "Don't go off half-cocked."
      },
      {
        "message": "Few words and many deeds."
      },
      {
        "message": "For donkeys' ages."
      },
      {
        "message": "Gossips are frogs, they drink and talk."
      },
      {
        "message": "He who sings drives away sorrow."
      },
      {
        "message": "If you don't say it you will not have to unsay it."
      },
      {
        "message": "It takes two to have an argument."
      },
      {
        "message": "Keep your mouth shut and your eyes open."
      },
      {
        "message": "Listen to the pot calling the kettle black."
      },
      {
        "message": "Many a true word spoken in jest."
      },
      {
        "message": "No news is good news."
      },
      {
        "message": "Nothing is ill said if it is not ill taken."
      },
      {
        "message": "One picture is worth a thousand words."
      },
      {
        "message": "Say what you mean and mean what you say."
      },
      {
        "message": "Self praise is no recomendation."
      },
      {
        "message": "Silence is an excellent remedy against slander."
      },
      {
        "message": "Silence is golden."
      },
      {
        "message": "Silence is less injurious than a bad reply."
      },
      {
        "message": "Since before cocky was an egg."
      },
      {
        "message": "Speak clearly, if you speak at all."
      },
      {
        "message": "Sticks and stones may break my bones but words will never hurt me."
      },
      {
        "message": "Stop beating around the bush."
      },
      {
        "message": "Take your wife's first advice."
      },
      {
        "message": "Talking comes by nature, silence by wisdom."
      },
      {
        "message": "A change is as good as a rest."
      },
      {
        "message": "A stitch in time saves nine."
      },
      {
        "message": "A throne is only a bench covered in purple velvet."
      },
      {
        "message": "A wise man shall hold his tongue till he sees his opportunity."
      },
      {
        "message": "Accidents will happen."
      },
      {
        "message": "All's well that ends well."
      },
      {
        "message": "Attack is the best means of defence."
      },
      {
        "message": "Charity begins at home."
      },
      {
        "message": "Different strokes for different folks."
      },
      {
        "message": "Do not in an instant what an age cannot recompense."
      },
      {
        "message": "Don't knock on death's door, ring the doorbell and run."
      },
      {
        "message": "Don't try to teach your grand-mother to suck eggs."
      },
      {
        "message": "Empty vessels make the most sound."
      },
      {
        "message": "Empty barrels make the most noise."
      },
      {
        "message": "Four eyes are better than two."
      },
      {
        "message": "He who fights and runs away, lives to fight another day."
      },
      {
        "message": "Innocent as a new born babe."
      },
      {
        "message": "It's an ill wind that blows no-one some good."
      },
      {
        "message": "It is better to stay silent and be thought a fool, than to open one's mouth and remove all doubt."
      },
      {
        "message": "Necessity is the mother of invention."
      },
      {
        "message": "No one can be caught in places he does not visit."
      },
      {
        "message": "No wise man ever wishes to be younger."
      },
      {
        "message": "Not in a month of Sundays."
      },
      {
        "message": "One mans junk is another man's treasure."
      },
      {
        "message": "Out of the frying pan into the fire."
      },
      {
        "message": "Show a clean pair of heels."
      },
      {
        "message": "Still waters run deep."
      },
      {
        "message": "The darkest hour is before the dawn."
      },
      {
        "message": "The wise shall understand."
      },
      {
        "message": "Those who don't learn from history are doomed to repeat it."
      },
      {
        "message": "Tomorrow is a new day."
      },
      {
        "message": "Two heads are better than one."
      },
      {
        "message": "You can't tell a book by its cover."
      },
      {
        "message": "Where observation is concerned, chance favours only the prepared mind."
      },
      {
        "message": "Where there's smoke there's fire."
      },
      {
        "message": "Wisdom is better than strength."
      },
      {
        "message": "Wisdom is neither inheritance nor a legacy."
      },
      {
        "message": "Wisdom is the wealth of the wise."
      },
      {
        "message": "Wise it is to comprehend the whole."
      },
      {
        "message": "You can't put an old head on young shoulders."
      },
      {
        "message": "You never know what you can do till you try."
      },
      {
        "message": "Once a task has first begun, never quit until it's done,"
      },
      {
        "message": "be the labour great or small, do it well or not at all."
      },
      {
        "message": "A bad workman blames his tools"
      },
      {
        "message": "A good reputation is a fair estate."
      },
      {
        "message": "All work and no play makes Jack a dull boy."
      },
      {
        "message": "An idle man is the devil's playfellow."
      },
      {
        "message": "Diligence is the mother of good luck."
      },
      {
        "message": "Don't try kicking against the wind."
      },
      {
        "message": "Everybody must row with the oars he has."
      },
      {
        "message": "Hard work never did anyone any harm."
      },
      {
        "message": "If a job is worth doing it is worth doing well."
      },
      {
        "message": "If at first you don't succeed, try, try again."
      },
      {
        "message": "If you can't help, don't hinder."
      },
      {
        "message": "If you see something you like, take it and make it better."
      },
      {
        "message": "It's all in a days work."
      },
      {
        "message": "Laziness travels so slowly that poverty soon overtakes it."
      },
      {
        "message": "Least talk most work."
      },
      {
        "message": "Many hands make light work."
      },
      {
        "message": "More haste less speed."
      },
      {
        "message": "Needs must when the devil drives."
      },
      {
        "message": "Never put off 'til tomorrow what you can do today."
      },
      {
        "message": "No life can be dreary when work is a delight."
      },
      {
        "message": "Not to break is better than to mend."
      },
      {
        "message": "The devil finds work for idle hands."
      },
      {
        "message": "The harder you work, the luckier you are."
      },
      {
        "message": "The hardest work is to do nothing."
      },
      {
        "message": "A bird in the hand is worth two in the bush."
      },
      {
        "message": "A bird makes his nest little by little."
      },
      {
        "message": "A cat has nine lives."
      },
      {
        "message": "All cats are grey in the dark."
      },
      {
        "message": "An elephant never forgets."
      },
      {
        "message": "An old fox need learn no craft."
      },
      {
        "message": "Birds of a feather flock together."
      },
      {
        "message": "Curiosity killed the cat; Satisfaction brought it back."
      },
      {
        "message": "Curses, like chickens come home to roost."
      },
      {
        "message": "Don't count your chickens before they hatch."
      },
      {
        "message": "Every dog has its day."
      },
      {
        "message": "His bark is louder than his bite."
      },
      {
        "message": "If you lie down with dogs, you'll get up with fleas."
      },
      {
        "message": "It's an ill bird that fouls its own nest."
      },
      {
        "message": "It's an old dog for a hard road."
      },
      {
        "message": "It's no use closing the stable door, after the horse has bolted."
      },
      {
        "message": "Kill two birds with the one stone."
      },
      {
        "message": "Let sleeping dogs lie."
      },
      {
        "message": "Like a fish out of water."
      },
      {
        "message": "Never look a gift horse in the mouth."
      },
      {
        "message": "No sense closing the barn door after the horse has bolted."
      },
      {
        "message": "Nothing falls into the mouth of a sleeping fox."
      },
      {
        "message": "Putting the cart before the horse."
      },
      {
        "message": "Sauce for the goose is sauce for the gander."
      },
      {
        "message": "The early bird catches the worm."
      },
      {
        "message": "The leopard does not change his spots."
      },
      {
        "message": "The sleepy fox catches no chickens."
      },
      {
        "message": "There's no use in flogging a dead horse."
      },
      {
        "message": "To scare a bird is not the way to catch it."
      },
      {
        "message": "What do you expect from a pig, but a grunt?"
      },
      {
        "message": "When a fox hears a rabbit screaming it comes running, but not to help."
      },
      {
        "message": "While the cats away the mice play."
      },
      {
        "message": "You can lead a horse to water, but you can't make him drink."
      },
      {
        "message": "You can't make a silk purse out of a sow's ear."
      },
      {
        "message": "A chain is no stronger than its weakest link."
      },
      {
        "message": "A rolling stone gathers no moss."
      },
      {
        "message": "After the storm comes the calm."
      },
      {
        "message": "All aren't hunters that blow the horn."
      },
      {
        "message": "As green as grass."
      },
      {
        "message": "As is the gardener so is the garden."
      },
      {
        "message": "As you sow, so shall you reap."
      },
      {
        "message": "Best to bend it while it's a twig."
      },
      {
        "message": "Better to go back than go wrong."
      },
      {
        "message": "By hook or by crook."
      },
      {
        "message": "Deeds are fruits, words are but leaves."
      },
      {
        "message": "Distance lends enhancement to the view."
      },
      {
        "message": "Don't count your chickens before they are hatched."
      },
      {
        "message": "Don't cross your bridges until you come to them."
      },
      {
        "message": "Empty bags cannot stand upright."
      },
      {
        "message": "Every cloud has a silver lining."
      },
      {
        "message": "Every path has its puddle."
      },
      {
        "message": "Fresh as a daisy."
      },
      {
        "message": "Good company on the road is the shortest cut."
      },
      {
        "message": "It is better to be green and growing than ripe and rotten."
      },
      {
        "message": "Leave no stone unturned."
      },
      {
        "message": "Like looking for a needle in a haystack."
      },
      {
        "message": "Make hay while the sun shines."
      },
      {
        "message": "Milk the cow but don't pull off the udder."
      },
      {
        "message": "Never cackle unless you lay."
      },
      {
        "message": "Oaks may fall when reeds take the storm."
      },
      {
        "message": "Shake the hand before you plough the field."
      },
      {
        "message": "Strike while the iron's hot."
      },
      {
        "message": "The beaten path is safest."
      },
      {
        "message": "The best ground bears weeds as well as flowers."
      },
      {
        "message": "The grass is always greener on the other side of the fence."
      },
      {
        "message": "The longest journey begins with the first step."
      },
      {
        "message": "The longest way round is the sweetest way home."
      },
      {
        "message": "The more you stir, the more it stinks."
      },
      {
        "message": "The sun shines on both sides of the hedge."
      },
      {
        "message": "The worst wheel always creaks most."
      },
      {
        "message": "Too many irons in the fire."
      },
      {
        "message": "Useless as a screen door on a dunny."
      },
      {
        "message": "You can't get blood out of a stone."
      },
      {
        "message": "A little body doth often harbour a great soul."
      },
      {
        "message": "A point is the beginning of magnitude."
      },
      {
        "message": "A spark can start a great fire."
      },
      {
        "message": "A short cut is often a wrong cut."
      },
      {
        "message": "Big fish eat little fish."
      },
      {
        "message": "Everything has an end."
      },
      {
        "message": "Fall seven times. Stand up eight."
      },
      {
        "message": "First in best dressed."
      },
      {
        "message": "From trivial things, great contests often arise."
      },
      {
        "message": "Give them an inch and they'll take a mile."
      },
      {
        "message": "Grow angry slowly, there's plenty of time."
      },
      {
        "message": "He who hesitates is lost."
      },
      {
        "message": "It's either all or nothing."
      },
      {
        "message": "It is easier to destroy than to build."
      },
      {
        "message": "It is the first step that is difficult."
      },
      {
        "message": "Little strokes fell great oaks."
      },
      {
        "message": "Lost time is never found again."
      },
      {
        "message": "Many drops make a shower."
      },
      {
        "message": "Mighty oaks from tiny acorns grow."
      },
      {
        "message": "Necessity is a hard nurse, but she raises strong children."
      },
      {
        "message": "Rome wasn't built in a day."
      },
      {
        "message": "Seize the day"
      },
      {
        "message": "Small faults indulged let in greater."
      },
      {
        "message": "Some of the best gifts come in small packages."
      },
      {
        "message": "Step by step one goes far."
      },
      {
        "message": "You have to crawl before you walk."
      },
      {
        "message": "Find a coin pick it up, All the day you'll have good luck. Drop a penny leave it lay, Bring someone a lucky day."
      },
      {
        "message": "A bad penny always comes back."
      },
      {
        "message": "A light purse makes a heavy heart."
      },
      {
        "message": "A little each day is much in a year."
      },
      {
        "message": "A man's intentions seldom add to his income."
      },
      {
        "message": "A penny saved is a penny earned."
      },
      {
        "message": "A poor man is better than a liar."
      },
      {
        "message": "A single penny fairly got is worth a thousand that are not."
      },
      {
        "message": "Always you are to be rich next year."
      },
      {
        "message": "Beggars can't be choosers."
      },
      {
        "message": "Better to have than to wish."
      },
      {
        "message": "Diamonds are forever."
      },
      {
        "message": "Every man has his price."
      },
      {
        "message": "Every man is the architect of his destiny."
      },
      {
        "message": "Experience is the father of wisdom."
      },
      {
        "message": "Fair exchange is no robbery."
      },
      {
        "message": "He has enough who is content."
      },
      {
        "message": "He that pays last never pays twice."
      },
      {
        "message": "He is rich that is satisfied."
      },
      {
        "message": "In for a penny, in for a pound."
      },
      {
        "message": "It is better to be born lucky than rich."
      },
      {
        "message": "Little and often fill the purse."
      },
      {
        "message": "Little thieves are hanged, but great ones escape."
      },
      {
        "message": "Money burns a hole in your pocket."
      },
      {
        "message": "Never spend your money before you have it."
      },
      {
        "message": "One today is worth two tomorrows."
      },
      {
        "message": "Penny wise, pound foolish."
      },
      {
        "message": "Take care of the pence and the pounds will take care of themselves."
      },
      {
        "message": "The best cast at dice is not to play."
      },
      {
        "message": "The love of money is the root of all evil."
      },
      {
        "message": "There is no honour among thieves."
      },
      {
        "message": "Waste not, want not."
      },
      {
        "message": "A good conscience is a soft pillow."
      },
      {
        "message": "A good thing is soon snatched up."
      },
      {
        "message": "A little knowledge is a dangerous thing."
      },
      {
        "message": "Better safe than sorry."
      },
      {
        "message": "Better late than never."
      },
      {
        "message": "Business before pleasure."
      },
      {
        "message": "Credit won by lying is quick in dying."
      },
      {
        "message": "Damage suffered makes you knowing, but seldom rich."
      },
      {
        "message": "Desperate diseases must have desperate remedies."
      },
      {
        "message": "Divide and conquer."
      },
      {
        "message": "Don't rely on the label on the bag."
      },
      {
        "message": "Don't throw the baby out with the bath-water."
      },
      {
        "message": "Don't put all your eggs in one basket."
      },
      {
        "message": "Experience is the best teacher."
      },
      {
        "message": "First come, first served."
      },
      {
        "message": "Fore-warned is fore-armed."
      },
      {
        "message": "Hasty climbers have sudden falls."
      },
      {
        "message": "Hasty judgements are generally faulty."
      },
      {
        "message": "Honesty is the best policy."
      },
      {
        "message": "If anything can go wrong, it will."
      },
      {
        "message": "If you don't know where you're going, then the journey is never ending."
      },
      {
        "message": "It's a poor job that can't carry one boss."
      },
      {
        "message": "Keep It Simple (The KISS principal)."
      },
      {
        "message": "Let the buyer beware."
      },
      {
        "message": "Look before you leap."
      },
      {
        "message": "Nobody can serve two masters."
      },
      {
        "message": "One false move may lose the game."
      },
      {
        "message": "One man's loss, is another man's gain."
      },
      {
        "message": "Peace begins just where ambition ends."
      },
      {
        "message": "Possession is nine tenths of the law."
      },
      {
        "message": "Rules are made to be broken."
      },
      {
        "message": "The customer is always right."
      },
      {
        "message": "The gods help them that help themselves."
      },
      {
        "message": "The golden age never was the present one."
      },
      {
        "message": "To each his own."
      },
      {
        "message": "We do not always gain by changing."
      },
      {
        "message": "Where there's a will there's a way."
      },
      {
        "message": "A fool and his money are soon parted."
      },
      {
        "message": "A fool in a gown is none the wiser."
      },
      {
        "message": "A wise man doesn't need advice, and a fool won't take it."
      },
      {
        "message": "Advice when most needed is least heeded."
      },
      {
        "message": "Always in a hurry, always behind."
      },
      {
        "message": "Cheap is dear in the long run."
      },
      {
        "message": "Confess and be hanged."
      },
      {
        "message": "Cut off one's nose to spite one's face."
      },
      {
        "message": "Empty vessels make the most noise."
      },
      {
        "message": "Facts do not cease to exist because they are ignored."
      },
      {
        "message": "Fools rush in where angels fear to tread."
      },
      {
        "message": "He who won't be advised, can't be helped."
      },
      {
        "message": "If the cap fits, wear it."
      },
      {
        "message": "In one ear and out the other."
      },
      {
        "message": "It can't happen here is number one on the list of famous last words."
      },
      {
        "message": "It is better to stay silent and be thought a fool, than to open one's mouth and remove all doubt."
      },
      {
        "message": "One of these days is none of these days."
      },
      {
        "message": "Pride cometh before a fall."
      },
      {
        "message": "Pride feels no pain."
      },
      {
        "message": "See nothing, say nothing, know nothing."
      },
      {
        "message": "The bigger they are the harder they fall."
      },
      {
        "message": "The fool wanders, the wise man travels."
      },
      {
        "message": "The hood does not make the monk."
      },
      {
        "message": "The wise man is deceived once but the fool twice."
      },
      {
        "message": "There is no fool like an old fool."
      },
      {
        "message": "Use not today what tomorrow will need."
      },
      {
        "message": "What's the good of home, if you are never in it?"
      },
      {
        "message": "You cannot lose what you never had."
      },
      {
        "message": "The pen is mightier than the sword."
      },
      {
        "message": "Actions speak louder than words."
      },
      {
        "message": "Many hands make light work."
      },
      {
        "message": "Too many cooks spoil the broth."
      },
      {
        "message": "You're never too old to learn."
      },
      {
        "message": "You can't teach an old dog new tricks."
      },
      {
        "message": "Ask no questions and hear no lies."
      },
      {
        "message": "Ask and you shall receive."
      },
      {
        "message": "Variety is the spice of life."
      },
      {
        "message": "Don't change horses in midstream."
      },
      {
        "message": "Don't cross the bridge till you come to it."
      },
      {
        "message": "Forewarned is forearmed."
      },
      {
        "message": "Silence is golden."
      },
      {
        "message": "The squeaky wheel gets the grease."
      },
      {
        "message": "Clothes make the man."
      },
      {
        "message": "Never judge a book by its cover"
      },
      {
        "message": "The best things come in small packages."
      },
      {
        "message": "The bigger, the better."
      },
      {
        "message": "A miss is as good as a mile."
      },
      {
        "message": "Half a loaf is better than none."
      },
      {
        "message": "Look before you leap."
      },
      {
        "message": "He who hesitates is lost."
      },
      {
        "message": "If at first you don't succeed, try, try again."
      },
      {
        "message": "Don't beat a dead horse."
      },
      {
        "message": "The early bird gets the worm."
      },
      {
        "message": "The second mouse gets the cheese."
      },
      {
        "message": "Absence makes the fond heart wander."
      },
      {
        "message": "Change is inevitable, except from vending machines."
      },
      {
        "message": "Eagles may soar, but weasels don't get sucked into jet engines."
      },
      {
        "message": "Everyone has a photographic memory, some just don't have film."
      },
      {
        "message": "If it's not broken, don't fix it."
      },
      {
        "message": "If it's not broke, mess with it till it is."
      },
      {
        "message": "It is lonesome in the saddle since the horse died."
      },
      {
        "message": "The lights on, but nobodies home."
      },
      {
        "message": "The strongest memory is weaker than the palest ink."
      },
      {
        "message": "A burden in the bush is worth two in the hand."
      },
      {
        "message": "A journey of a thousand sites begins with a single click."
      },
      {
        "message": "C:\\ is the root of all directories."
      },
      {
        "message": "Don't byte off more than you can view."
      },
      {
        "message": "Don`t format the drive before you backup the files."
      },
      {
        "message": "Fax is stranger than fiction."
      },
      {
        "message": "Give a man a fish and you feed him for a day; Teach him to use the Net and he won't bother you for weeks."
      },
      {
        "message": "Great groups from little icons grow."
      },
      {
        "message": "Home is where you hang your @."
      },
      {
        "message": "Modulation in all things."
      },
      {
        "message": "Oh, what a tangled web site we weave when first we practice."
      },
      {
        "message": "Pentium wise, pen and paper foolish."
      },
      {
        "message": "Speak softly and carry a cellular phone."
      },
      {
        "message": "The e-mail of the species is more deadly than the mail."
      },
      {
        "message": "The geek shall inherit the earth."
      },
      {
        "message": "The modem is the message."
      },
      {
        "message": "There's many a slip 'twixt the dock and the ship."
      },
      {
        "message": "Too many clicks spoil the browse."
      },
      {
        "message": "Virtual reality is its own reward."
      },
      {
        "message": "What boots up must come down."
      },
      {
        "message": "Windows will never cease."
      },
      {
        "message": "You can't teach a new mouse old clicks."
      },
      {
        "message": "If at first you don't succeed, skydiving is not for you."
      },
      {
        "message": "Winners never quit, quitters never win."
      },
      {
        "message": "You snooze, you lose."
      },
      {
        "message": "Never test the depth of the water with both feet."
      },
      {
        "message": "If you tell the truth, you don't have to remember anything."
      },
      {
        "message": "A closed mouth gathers no foot."
      },
      {
        "message": "You aren't learning much when your lips are moving."
      },
      {
        "message": "Experience is something you don't get until just after you need it."
      },
      {
        "message": "A hair on the head is worth two in the brush"
      },
      {
        "message": "An ear that doesn't heed to advice is chopped off together with the head."
      },
      {
        "message": "The death of a cow marks celebration to even a dying dog."
      },
      {
        "message": "You learn by looking and listening as opposed to talking. That's why you have two ears, two eyes, and only one mouth."
      }
       ]

  },


});
