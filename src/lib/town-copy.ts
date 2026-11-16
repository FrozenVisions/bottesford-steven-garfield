import { placeTitle } from "@/lib/place-meta"
import { placeSlug, townPages } from "@/lib/places"

export type TownArticle = {
  description: string
  paragraphs: string[]
}

/**
 * Unique page copy for each kept town. Facts are only those already published
 * on the site, or straight-line miles and compass bearings stored in places.ts.
 */
export const townCopy: Record<string, TownArticle> = {
  "long-bennington": {
    description:
      "Sell vinyl records in Long Bennington, Lincolnshire. Steven Gee of Pink Moon Records comes from Bottesford to view 1960s and 1970s rock at your own home.",
    paragraphs: [
      "Long Bennington is one of the closer places I will come to. It is in Lincolnshire, about 3.6 miles north-east of Bottesford in a straight line. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir, so this is not a long way for me.",
      "Pink Moon Records is just me. There is no shop, and this is not a business. I buy vinyl for my own shelves. If the records are in Long Bennington, I will come and view them at your home. I would rather do that than have them posted to me.",
      "## A few records are reason enough",
      "Anywhere nearby, a few records are worth an email, and Long Bennington is nearby. A short row on a bookcase, a crate in the spare room, or two boxes that have sat in a loft will do. They may not have been played for years. Email me before they go to the tip. Any situation or quantity is always considered.",
      "The same note is enough if you are clearing a house, moving to somewhere smaller, or sorting records a parent or relative left behind. You do not have to learn the names on the labels. Say there are boxes, and tell me the place. If you are in a village around Long Bennington, name that village. I cover the surrounding villages as well.",
      "## What I hope is in the boxes",
      "Rock from the 1960s and 1970s is the music I have loved longest, and I mean any type of it: psychedelic, blues rock, hard rock, progressive, folk rock, heavy rock, early heavy metal, garage and freakbeat. Albums, singles and box sets, in their sleeves if you still have them. I will look at plain, played, well-loved copies too.",
      "A house being emptied is seldom only rock. Tell me about the whole collection. I collect soul and Motown, country, folk, reggae, and mixed boxes from the loft. A good record is never turned away.",
      "I have written about [[/blog/selling-a-record-collection-near-bottesford|how a visit works]], about [[/blog/clearing-or-inheriting-records-near-bottesford|clearing a house or records you have inherited]], and about [[/blog/a-few-records-or-further-away|a few records, or a longer journey]].",
      "## Email me first",
      "Email is best: [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. I am happy to take a phone call too, on [[tel:+447359456528|07359 456528]]. A rough idea, or a few photos of the shelves or the boxes, is plenty. No full list is needed, as I can come round and look. Tell me you are in Long Bennington. My card is also on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
  barrowby: {
    description:
      "Sell vinyl records in Barrowby, Lincolnshire. Steven Gee visits from Bottesford, and buys 1960s and 1970s rock vinyl and other records from your home.",
    paragraphs: [
      "Barrowby is in Lincolnshire, about 5 miles east of Bottesford in a straight line. Grantham is a little further east. I am Steven Gee, and I have already written that Barrowby is a place I visit, along with Manthorpe, Great Gonerby and Belton.",
      "There is no shop to bring the records to. Pink Moon Records is just me, at home in Bottesford, NG13, in the Vale of Belvoir. This is not a business. I buy vinyl for my own shelves, and I come to your home. I would rather view the records where they are than have them posted to me.",
      "## If the records are in Barrowby",
      "Tell me, and I will come and look. A few boxes that have not been played for years are reason enough. Anywhere nearby, a few records are worth an email. Email me before they go to the tip. The same is true if you are clearing a house, moving to somewhere smaller, or sorting vinyl a parent or relative left behind. You do not have to work out every sleeve first.",
      "If the collection is actually in Manthorpe, Great Gonerby or Belton, say so. Those are places I also visit. There is a page for [[/sell-vinyl-records/grantham|selling vinyl records in Grantham]], and a longer note on [[/blog/sell-my-record-collection-grantham|how to sell a record collection in Grantham]].",
      "## Played copies are welcome",
      "People apologise for the condition. You can leave that out. Original UK pressings and gatefold sleeves make me smile, and so do the old label designs, but I will look at plain, played, well-loved copies too. A record that has been on a turntable for years is still a record I want to hold. Albums, singles and box sets, in their sleeves if you still have them.",
      "Late 1960s and early 1970s rock is what I have loved longest, any type of it. Tell me about the rest as well: soul and Motown, country, folk, reggae, mixed boxes from the loft. A good record is never turned away. Any situation or quantity is always considered.",
      "I have also written about [[/blog/selling-a-record-collection-near-bottesford|how a visit works]] when the records are nearer Bottesford.",
      "## Email me first",
      "Start with an email to [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. A phone call is fine as well, on [[tel:+447359456528|07359 456528]]. Give me a rough idea of what is there, or attach a few photos. No full list is needed, because I can stand in the room and look. Say that you are in Barrowby. My card is on the Post Office notice board in the High Street, Bottesford.",
    ],
  },
  bingham: {
    description:
      "Sell vinyl records in Bingham, Nottinghamshire. Steven Gee of Pink Moon Records buys 1960s and 1970s rock, and other records, and comes to your own home.",
    paragraphs: [
      "Bingham is the town to the west of me. It is in Nottinghamshire, about 6.3 miles from Bottesford in a straight line. Radcliffe-on-Trent and Nottingham are further west again. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir, and Bingham is a place I visit.",
      "If you want to sell vinyl records in Bingham, you do not need to bring them anywhere. There is no shop. Pink Moon Records is just me, and this is not a business. I buy vinyl for my own shelves. I will come and see the records in the comfort of your own home. I would rather view them there than have them posted.",
      "## Nearby is enough for a few records",
      "Anywhere nearby, a few records are worth an email. A shelf in a spare room, boxes in the loft, or a pile in a house you are clearing: I will look at the collection where it is. They may not have been played for years. Email me before they go to the tip. If you are moving to somewhere smaller, or the records belonged to a parent or relative, say so. You do not have to learn the names on the labels. Any situation or quantity is always considered.",
      "If you are in a village between Bottesford and Bingham, tell me the name of the place. I cover the surrounding villages as well.",
      "## Rock first, and the rest of the shelf",
      "The records I hope to find first are late 1960s and early 1970s rock, and I mean any type of it. Original UK pressings, gatefold sleeves and the old label designs make me smile. Island pink label, Vertigo swirl, Harvest, Charisma, Deram, Atlantic plum, Parlophone and Immediate are names I like to see. Plain, played copies are welcome too.",
      "Tell me about the whole collection, not only the rock. I collect all kinds of music for my own shelves. If you are not sure they are my sort, I would rather see them than have you decide for me.",
      "I have written about [[/blog/sell-a-record-collection-in-nottingham|getting a collection ready in Nottingham]], which is further along the same way, and Bingham is named there as a place I visit. There is also [[/blog/selling-a-record-collection-near-bottesford|how a visit works]], and a [[/blog/clearing-or-inheriting-records-near-bottesford|note on house clearances and inherited records]].",
      "## Email me first",
      "Email is the best way to start: [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. Ring if you prefer, on [[tel:+447359456528|07359 456528]]. A rough idea of the collection, or a few photos, is enough. No full list is needed, as I can come round and look. Tell me you are in Bingham. My card is also on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
  grantham: {
    description:
      "Sell vinyl records in Grantham, Lincolnshire. Steven Gee of Pink Moon Records buys 1960s and 1970s rock vinyl and comes to your home to view the collection.",
    paragraphs: [
      "Grantham is in Lincolnshire, about 6.9 miles east of Bottesford in a straight line, near Manthorpe. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir. If the records are in Grantham, tell me and I will come and view them at your home.",
      "There is no record shop to bring them to. Pink Moon Records is just me. This is not a business. I buy vinyl for my own shelves, and I come to you. I would rather view your records where they are than have them posted to me. For a good collection I will travel any distance.",
      "## Grantham, and the places beside it",
      "A few boxes in Grantham that have not been played for years are reason enough to write. Anywhere nearby, a few records are worth an email. Email me before they go to the tip. The same is true if you are clearing a house, moving to somewhere smaller, or sorting records a parent or relative left behind. You do not need a full list. A rough idea, or a few photos attached to the email, is plenty. Any situation or quantity is always considered.",
      "If the vinyl is in Manthorpe, Great Gonerby, [[/sell-vinyl-records/barrowby|Barrowby]] or Belton, say so. Those are places I also visit. Barrowby is a little closer to me, still to the east.",
      "## What I am hoping to find",
      "Rock from the 1960s and 1970s is the music I have loved longest, any type of it: psychedelic, blues rock, hard rock, progressive, folk rock, heavy rock, early heavy metal, garage and freakbeat. Albums, singles and box sets, in their sleeves if you still have them. Original UK pressings, gatefold sleeves and the old label designs make me smile. I will look at plain, played, well-loved copies too.",
      "Do not pull the rock out and leave the rest. I collect soul and Motown, country, folk, reggae, and mixed boxes from the loft. A good record is never turned away. If you are not sure, I would rather see the records than have you decide for me.",
      "There is a longer note on [[/blog/sell-my-record-collection-grantham|selling a record collection in Grantham]]. I have also written about [[/blog/selling-a-record-collection-near-bottesford|how a visit works]], about [[/blog/clearing-or-inheriting-records-near-bottesford|clearing a house or records you have inherited]], and about [[/blog/sell-a-record-collection-in-nottingham|getting a collection ready in Nottingham]].",
      "## Email me first",
      "Email is best: [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. I am happy to take a phone call too, on [[tel:+447359456528|07359 456528]]. Tell me you are in Grantham, or name the village. No full list is needed, as I can come round and look. My card is also on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
  balderton: {
    description:
      "Sell vinyl records in Balderton, Nottinghamshire. Steven Gee visits from Bottesford and buys 1960s and 1970s rock vinyl, and other records, at your home.",
    paragraphs: [
      "Balderton is in Nottinghamshire, about 7.9 miles north of Bottesford in a straight line. Newark-on-Trent is a little further north. I am Steven Gee. In the note I wrote about Newark, Balderton is one of the places I also visit, with Hawton, Farndon and Coddington.",
      "I live in Bottesford, NG13, in the Vale of Belvoir. Pink Moon Records is just me. There is no shop, and this is not a business. I buy vinyl record collections for my own shelves. Tell me the records are in Balderton, and I will come and view them at your home. I would rather do that than have them posted to me.",
      "## Boxes, shelves, or a house being emptied",
      "A few boxes that have not been played for years are reason enough. Anywhere nearby, a few records are worth an email. Email me before they go to the tip. The records may be in the loft, still on the shelves, or piled in a room that is being cleared. They may have come with the house, or with a parent or relative. You do not have to learn the collection before you write. Any situation or quantity is always considered.",
      "If they are in Hawton, [[/sell-vinyl-records/farndon|Farndon]] or Coddington instead, say that. Those are places I also visit, and there is a page for [[/sell-vinyl-records/newark-on-trent|Newark-on-Trent]] if the house is in the town.",
      "## Leave the collection together",
      "Please leave the records together until I have looked. I collect more than the rock. The music I have loved longest is late 1960s and early 1970s rock, any type of it, on album, single or box set. Original UK pressings and gatefold sleeves are a joy, and played copies are welcome too. Soul and Motown, country, folk, reggae, and mixed boxes from the loft are welcome as well. A good record is never turned away.",
      "If you want to keep a few, keep them, and say so. Put them in another room, or name them in the email, and I will look at the rest. Do not make a pile for the tip before I have been.",
      "The longer Newark note is here: [[/blog/sell-vinyl-records-newark|how to sell vinyl records in Newark]]. I have also written about [[/blog/clearing-or-inheriting-records-near-bottesford|clearing a house or a collection you have inherited]].",
      "## Email me first",
      "A short email is enough. Write to [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]] and say the records are in Balderton. I am happy to take a call on [[tel:+447359456528|07359 456528]]. A rough idea, or a photo of the shelves or the boxes, will do. No full list is needed, as I can come round and look. My card is on the Post Office notice board in the High Street, Bottesford.",
    ],
  },
  farndon: {
    description:
      "Sell vinyl records in Farndon, Nottinghamshire. Steven Gee of Pink Moon Records comes from Bottesford to buy 1960s and 1970s rock and other vinyl at home.",
    paragraphs: [
      "Farndon is in Nottinghamshire, about 8.3 miles north of where I live. I am Steven Gee, in Bottesford, NG13, in the Vale of Belvoir. When I wrote about selling records in Newark, I named Farndon with Hawton, Balderton and Coddington as places I also visit.",
      "You do not bring the records to a counter. There is no shop. Pink Moon Records is just me, and this is not a business. I buy vinyl for my own shelves. I will come and see them in the comfort of your own home, and I would rather view them there than have them posted to me.",
      "## You do not have to know the labels",
      "If the records belonged to someone else, you may not know the names, or which years they come from. That is all right. Say it was a relative's, or that it came with the house. Or simply say there are boxes in Farndon and you would like me to see them. A few photos and the name of the place are plenty to start.",
      "Anywhere nearby, a few records are worth an email. A crate in the spare room is an ordinary way for them to turn up. Email me before they go to the tip. If this is a house being cleared, or a move to somewhere smaller, say which it is. Any situation or quantity is always considered.",
      "Hawton, [[/sell-vinyl-records/balderton|Balderton]] and Coddington are the other places I named beside Newark. If the records are in one of those, or in [[/sell-vinyl-records/newark-on-trent|Newark-on-Trent]] itself, tell me that instead.",
      "## What belongs with the rock",
      "I hope to find late 1960s and early 1970s rock: albums, singles and box sets, in their sleeves if you still have them. I will look at plain, played, well-loved copies. Keep inner sleeves, lyric sheets and posters with the record they belong to, if you know which one. If you are not sure, keep the loose paper in the same box. Do not throw it away because it looks like scrap.",
      "Tell me about the whole collection, not only the rock. Soul and Motown, country, folk, reggae, and mixed boxes from the loft are all part of what I collect. A good record is never turned away.",
      "Read [[/blog/sell-vinyl-records-newark|the Newark note]] if you want the longer version, and [[/blog/clearing-or-inheriting-records-near-bottesford|the note on records you have inherited]].",
      "## Email me first",
      "Email first, even if you only have a sentence: [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. You can ring [[tel:+447359456528|07359 456528]] as well. No full list is needed, as I can come round and look. Tell me you are in Farndon. My card is also on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
  "newark-on-trent": {
    description:
      "Sell vinyl records in Newark-on-Trent. Steven Gee of Pink Moon Records buys 1960s and 1970s rock vinyl, and other records, and views them at your home.",
    paragraphs: [
      "Newark-on-Trent is in Nottinghamshire, about 9.3 miles north of Bottesford in a straight line, near Hawton. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir. Tell me the records are in Newark, and I will come and view them at your home.",
      "I would rather view your vinyl where it is than have it posted to me. There is no shop. Pink Moon Records is just me. This is not a business. I buy record collections for my own shelves. Newark is one of the places I will come to. For a good collection I will travel any distance, and anywhere nearby a few records are worth an email.",
      "## A clearance in Newark",
      "A few boxes that have sat unplayed are reason enough. Email me before they go to the tip. The records may be in the loft, still on the shelves, or piled in a room you are emptying. Leave them together until I have looked. If you want to keep some, keep them and say so. Any situation or quantity is always considered. You do not need a full list. A photo of the shelves, the boxes, or one sleeve on top will do.",
      "If the house is in Hawton, [[/sell-vinyl-records/balderton|Balderton]], [[/sell-vinyl-records/farndon|Farndon]] or Coddington, say so. Those are places I also visit. The home page also names [[/sell-vinyl-records/grantham|Grantham]], [[/sell-vinyl-records/bingham|Bingham]], and the villages back towards [[/|Bottesford]].",
      "## The records themselves",
      "Rock from the 1960s and 1970s is what I have loved longest, any type of it. Albums, singles and box sets. Original UK pressings, gatefold sleeves and labels such as Island pink label, Vertigo swirl, Harvest, Charisma, Deram, Atlantic plum, Parlophone and Immediate make me smile. I will look at plain, played copies too.",
      "I may be interested in more than that rock. Soul and Motown, country, folk, reggae, and mixed boxes from the loft are welcome. If you are not sure they are my sort, I would rather see them than have you decide for me. A good record is never turned away.",
      "The longer page about this town is [[/blog/sell-vinyl-records-newark|how to sell vinyl records in Newark]]. I have also written about [[/blog/sell-my-record-collection-grantham|selling a collection in Grantham]], about [[/blog/clearing-or-inheriting-records-near-bottesford|records you have inherited]], and about [[/blog/a-few-records-or-further-away|a few records, or a longer journey]].",
      "## Email me first",
      "You can simply write that you want to sell vinyl records in Newark. Email [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. A call is fine too, on [[tel:+447359456528|07359 456528]]. Newark is enough, or Newark-on-Trent, or the village if that is where the house is. No full list is needed, as I can come round and look. My card is on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
  lowdham: {
    description:
      "Sell vinyl records in Lowdham, Nottinghamshire. Steven Gee of Pink Moon Records buys 1960s and 1970s rock vinyl and other records, and comes to your home.",
    paragraphs: [
      "Lowdham is in Nottinghamshire, about 9.7 miles north-west of Bottesford in a straight line. Southwell is further north-west. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir, and the round from here takes in parts of Nottinghamshire as well as Leicestershire and Lincolnshire.",
      "Pink Moon Records is just me. There is no shop, and this is not a business. I buy vinyl for my own shelves. If the records are in Lowdham, I will come and view them at your home. I would rather see them in the room than have them posted to me.",
      "## Write even if there are only a few",
      "People wait because there might be only a few boxes, or the sleeves are scuffed. Anywhere nearby, a few records are worth an email. A short row on a bookcase is a perfectly ordinary collection for me to come and see. For a good collection I will travel any distance. Any situation or quantity is always considered.",
      "Say if this is a house being cleared, a move to somewhere smaller, or records a parent or relative left behind. You do not have to sort the rock from everything else, and you do not have to clean them. I would rather see the records as they have been kept. Email me before they go to the tip.",
      "If you are in a village around Lowdham, tell me the name. I cover the surrounding villages as well. [[/sell-vinyl-records/southwell|Southwell]] is the town further north-west, if that is where the house actually is.",
      "## Sixties and seventies, and whatever sits with them",
      "What I want first is rock from the 1960s and 1970s, any type of it, including the singles as well as the albums. Gatefold sleeves and original UK pressings make me smile. Played, well-loved copies are not a reason to leave them out. Keep a tatty sleeve with the disc. A split corner is still part of the record.",
      "I collect other music for the same shelves: soul and Motown, country, folk, reggae, and mixed boxes from the loft. Tell me about the whole collection. A good record is never turned away.",
      "Two notes that cover this are [[/blog/selling-a-record-collection-near-bottesford|how a visit works]] and [[/blog/a-few-records-or-further-away|a few records, or a longer journey]].",
      "## Email me first",
      "Email is best: [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. Ring on [[tel:+447359456528|07359 456528]] if that is easier. Tell me you are in Lowdham, and give me a rough idea or a few photos. No full list is needed, as I can come round and look. My card is also on the Post Office notice board in the High Street, Bottesford.",
    ],
  },
  "radcliffe-on-trent": {
    description:
      "Sell vinyl records in Radcliffe-on-Trent. Steven Gee buys 1960s and 1970s rock on the way from Bottesford towards Nottingham, and views the records at home.",
    paragraphs: [
      "Radcliffe-on-Trent is in Nottinghamshire, about 9.9 miles west of Bottesford in a straight line. I have written that it is on the way towards Nottingham. Bingham is closer to me, on the same side of Bottesford. I am Steven Gee, and I live in Bottesford, NG13, in the Vale of Belvoir.",
      "If your records are in Radcliffe-on-Trent, say so. I will come and view them at your home. There is no shop to take them to. Pink Moon Records is just me, this is not a business, and I buy vinyl for my own shelves. I would rather view the records where they are than have them posted to me.",
      "## On the way towards Nottingham",
      "Anywhere nearby, a few records are worth an email. Two boxes from a loft, or a shelf that has not been played for years, is enough to write. For a good collection I will travel any distance, and that includes a collection further on in Nottingham. Any situation or quantity is always considered.",
      "Tell me if you are clearing a house, moving somewhere smaller, or sorting records you inherited. You do not have to learn the names on the labels. A rough count helps. A phone photo of the shelves helps too. If they are already in boxes from a move, leave them in the boxes. I can look through a box where it sits.",
      "[[/sell-vinyl-records/bingham|Bingham]] is a place I visit as well. [[/sell-vinyl-records/nottingham|Nottingham]] is further west, if the house is in the city rather than in Radcliffe.",
      "## Condition is not something to apologise for",
      "Dust is nothing to apologise for. Please do not deep-clean a record with household products before I come. Leave a gatefold closed. Original UK pressings matter to me, and the sleeve is part of that, even when the spine has gone soft. I will look at plain, played copies. The music I have loved longest is late 1960s and early 1970s rock, any type of it: albums, singles and box sets.",
      "I also collect soul and Motown, country, folk, reggae, and mixed boxes from the loft. Do not split the collection, unless you want to keep some. If you do, say so. A good record is never turned away.",
      "The Nottingham note, which names Radcliffe-on-Trent, is [[/blog/sell-a-record-collection-in-nottingham|how to get a collection ready]]. There is also [[/blog/a-few-records-or-further-away|a few records, or a longer journey]].",
      "## Email me first",
      "Write to [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]] and tell me the place. Radcliffe-on-Trent is enough. I will take a call on [[tel:+447359456528|07359 456528]] as well. No full list is needed, as I can come round and look. My card is on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
  cotgrave: {
    description:
      "Sell vinyl records in Cotgrave, Nottinghamshire. Steven Gee of Pink Moon Records buys 1960s and 1970s rock vinyl, and other records, and comes to your home.",
    paragraphs: [
      "Cotgrave is in Nottinghamshire, about 11.1 miles west of Bottesford in a straight line. Radcliffe-on-Trent is closer to me, and also to the west. Nottingham is further west. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir.",
      "Pink Moon Records is just me. There is no shop, and this is not a business. I buy vinyl for my own shelves. Tell me the records are in Cotgrave and I will come and view them at your home. I would rather stand in the room and look than have the boxes posted.",
      "## A few records, or a collection worth the journey",
      "Anywhere nearby, a few records are worth an email. For a good collection I will travel any distance. If you have been waiting because Cotgrave feels a step further out than Bingham, write anyway and tell me what you have. Any situation or quantity is always considered. Email me before the records go to the tip.",
      "A clearance, a move to somewhere smaller, or a collection you inherited: say which it is, if you know. If you do not know the story, say there are boxes and you would like me to see them. You do not need to pull the famous names out first. Mixed boxes from the loft are welcome.",
      "If the house is in [[/sell-vinyl-records/radcliffe-on-trent|Radcliffe-on-Trent]] or in [[/sell-vinyl-records/nottingham|Nottingham]], say that. Those pages are there, and the villages around Cotgrave are covered too. Tell me the name of the place.",
      "## What I would like to see",
      "Late 1960s and early 1970s rock is the music I have loved longest, and I mean any type of it, not only the well-known albums. Singles from those years interest me as much as a shelf of LPs. Box sets too, in the box if you still have it. Original UK pressings and gatefold sleeves make me smile. Played copies are welcome. I will not ask you to make them shine.",
      "The rest of the shelf matters. I collect soul and Motown, country, folk and reggae for myself. Tell me about the whole collection, not only the rock. A good record is never turned away.",
      "I have written about [[/blog/sell-a-record-collection-in-nottingham|selling a collection in Nottingham]] and about [[/blog/a-few-records-or-further-away|a few records, or further away]].",
      "## Email me first",
      "Email is the way to start: [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. A phone call on [[tel:+447359456528|07359 456528]] is fine if you would rather talk. Give me a rough idea, or attach a few photos. No full list is needed, as I can come round and look. Tell me you are in Cotgrave. My card is also on the Post Office notice board in the High Street, Bottesford.",
    ],
  },
  southwell: {
    description:
      "Sell vinyl records in Southwell, Nottinghamshire. Steven Gee of Pink Moon Records buys 1960s and 1970s rock and other vinyl, and he views them at your home.",
    paragraphs: [
      "Southwell is in Nottinghamshire, about 11.2 miles north-west of Bottesford in a straight line. Lowdham is also north-west, and a little closer to me. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir. The places I cover run into Nottinghamshire, Leicestershire and Lincolnshire.",
      "If you want to sell records in Southwell, I come to the house. There is no shop. Pink Moon Records is just me, and this is not a business. I buy vinyl for my own shelves. I would rather view your records where they are than have them posted to me. For a good collection I will travel any distance.",
      "## Do not wait on a perfect list",
      "A rough idea is enough. A few photos of the shelves, the boxes, or one sleeve on top are enough. No full list is needed, because I can come round and look. Anywhere nearby, a few records are worth an email. If the journey feels longer than a village next to Bottesford, write anyway and say what is there. Any situation or quantity is always considered.",
      "Records from a house being cleared often look untidy. They may be in the loft, or still on the shelves, or piled in a room that is being emptied. They may not have been played for years. That is a common way for a collection to turn up. Email me before they go to the tip. If you inherited them, you do not have to learn the labels first.",
      "[[/sell-vinyl-records/lowdham|Lowdham]] is the closer page if that is the place. Villages around Southwell are welcome too. Tell me the name.",
      "## The music",
      "I have loved rock from the 1960s and 1970s longest, any type of it: psychedelic, blues rock, hard rock, progressive, folk rock, heavy rock, early heavy metal, garage and freakbeat. Albums, singles and box sets. I will look at plain, played, well-loved copies, not only clean original UK pressings and gatefold sleeves.",
      "Bring the whole collection into the email, not a shortlist of the rock. Soul and Motown, country, folk, reggae, and mixed boxes from the loft all belong in the note. A good record is never turned away. If you want to keep a few for yourself, keep them and tell me.",
      "[[/blog/a-few-records-or-further-away|A few records, or a longer journey]] is the note for a house that feels further off. [[/blog/selling-a-record-collection-near-bottesford|How a visit works]] is the one for the call itself. [[/blog/clearing-or-inheriting-records-near-bottesford|Clearing a house]] covers records you have inherited.",
      "## Email me first",
      "Email [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]] and say Southwell. I am happy to take a phone call on [[tel:+447359456528|07359 456528]]. My card is also on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
  "melton-mowbray": {
    description:
      "Sell vinyl records in Melton Mowbray, Leicestershire. Steven Gee will travel from Bottesford for a good collection of 1960s and 1970s rock and other records.",
    paragraphs: [
      "Melton Mowbray is in Leicestershire, about 12.7 miles south of Bottesford in a straight line. People sometimes wait before they write, because it feels awkward to ask someone in Bottesford to make the journey. Write anyway. I am Steven Gee. For a good collection I will travel any distance, and I have said so about Melton Mowbray in particular.",
      "I live in Bottesford, NG13, in the Vale of Belvoir. Pink Moon Records is just me. There is no shop, and this is not a business. I buy vinyl for my own shelves. I will come and see the records in the comfort of your own home. I would rather view them there than have them posted to me.",
      "## Long Clawson is on the way, and Melton is the town",
      "Long Clawson is out towards Melton Mowbray. If your records are there, or in a village close by, say so. I cover the surrounding villages as well. Name the place in the email and I will say if I can come. A good collection in Melton itself is a journey I will make.",
      "A few boxes are still worth a note. Say how many, roughly, and whether this is a house being cleared, a move to somewhere smaller, or records a parent or relative left behind. You do not have to learn the names on the labels. Any situation or quantity is always considered.",
      "## What I am hoping to find south of the Vale",
      "The same music I look for at home. Late 1960s and early 1970s rock, any type of it: psychedelic, blues rock, hard rock, progressive, folk rock, heavy rock, early heavy metal, garage and freakbeat. Albums, singles and box sets, in their sleeves if you still have them. Original UK pressings and gatefold sleeves make me smile. Plain, played, well-loved copies are welcome too.",
      "A house being emptied is seldom only rock. Tell me about soul and Motown, country, folk, reggae, and mixed boxes from the loft. A good record is never turned away. If you are not sure they are my sort, send the rough idea anyway.",
      "The piece that names Melton Mowbray is [[/blog/a-few-records-or-further-away|a few records, or a longer journey]]. There is also [[/blog/clearing-or-inheriting-records-near-bottesford|clearing a house or records you have inherited]], and [[/blog/selling-a-record-collection-near-bottesford|how a visit from Bottesford works]].",
      "## Email me first",
      "Email is best: [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. I am happy to take a phone call on [[tel:+447359456528|07359 456528]]. Tell me the records are in Melton Mowbray, or name the village. A rough idea or a few photos is enough. No full list is needed, as I can come round and look. My card is on the Post Office notice board in the High Street, Bottesford.",
    ],
  },
  nottingham: {
    description:
      "Sell vinyl records in Nottingham. Steven Gee of Pink Moon Records comes from Bottesford to view 1960s and 1970s rock, and other records, at your home.",
    paragraphs: [
      "Nottingham is about 14.9 miles west of Bottesford in a straight line, in Nottinghamshire. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir. If you want to sell a record collection in Nottingham, you do not need a long clear-out first, and you do not bring the records to a counter.",
      "There is no shop. Pink Moon Records is just me. This is not a business. I buy vinyl for my own shelves. I will come and see the records in the comfort of your own home. I would rather view them where they are than have them posted to me. For a good collection I will travel any distance, and that includes a collection in Nottingham. Anywhere nearby, a few records are worth an email.",
      "## Radcliffe and Bingham are on the way",
      "[[/sell-vinyl-records/radcliffe-on-trent|Radcliffe-on-Trent]] is on the way towards Nottingham. [[/sell-vinyl-records/bingham|Bingham]] is a place I visit as well. If the records are in either of those, or in the city, say so. A shelf in a spare room is a normal way for records to turn up. So is a run of boxes in the loft, or a pile in a house you are clearing.",
      "You do not have to sort the collection, and you do not have to clean very much. I would rather see the records as they have been kept. Any situation or quantity is always considered. Do not split the collection before I have seen it, unless you want to keep some. If you do, put those aside and say so.",
      "Rock from the 1960s and 1970s is the music I have loved longest, any type of it. The records wanted first are late 1960s and early 1970s rock: albums, singles and box sets. Original UK pressings, gatefold sleeves and labels such as Island pink label, Vertigo swirl, Harvest, Charisma, Deram, Atlantic plum, Parlophone and Immediate make me smile. Played copies are welcome. I also collect soul and Motown, country, folk, reggae, and mixed boxes from the loft. A good record is never turned away.",
      "The long note on getting a collection ready is [[/blog/sell-a-record-collection-in-nottingham|selling a record collection in Nottingham]]. I have also written about [[/blog/a-few-records-or-further-away|a few records, or a longer journey]], and about [[/blog/selling-a-record-collection-near-bottesford|how a visit works]].",
      "## Email me first",
      "A useful email can be short. Write that you want to sell vinyl records in Nottingham, with a rough count and a phone photo. Send it to [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]]. You can ring [[tel:+447359456528|07359 456528]]. No full list is needed, as I can come round and look. My card is also on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
  oakham: {
    description:
      "Sell vinyl records in Oakham, Leicestershire. Steven Gee of Pink Moon Records will travel from Bottesford for a good collection of 1960s and 1970s rock vinyl.",
    paragraphs: [
      "Oakham is the furthest town I have given its own page. It is listed here as Leicestershire, about 18.9 miles south of Bottesford in a straight line. Melton Mowbray is also south, and closer. I am Steven Gee. I live in Bottesford, NG13, in the Vale of Belvoir. For a good collection I will travel any distance. Write from Oakham, or from wherever the house is, and name the town.",
      "Pink Moon Records is just me. There is no shop, and this is not a business. I buy vinyl for my own shelves. I will come and see the records in the comfort of your own home. I would rather view them there than have them posted to me.",
      "## If the journey is the thing that has stopped you writing",
      "People often wait when the house is in Nottingham or Melton Mowbray, because the journey from Bottesford feels awkward. Oakham is further still. It is still worth the email. Tell me what you have, and that it is in Oakham. A good collection is a journey I will make.",
      "[[/sell-vinyl-records/melton-mowbray|Melton Mowbray]] has its own page if that is the nearer town. Villages between here and Oakham are covered too. Say the name of the place. Any situation or quantity is always considered.",
      "## The same records I look for at home",
      "Late 1960s and early 1970s rock, any type of it, is still what I have loved longest. Albums, singles and box sets, in their sleeves if you still have them. Original UK pressings and gatefold sleeves make me smile. Played, well-loved copies are welcome.",
      "Tell me about the whole collection. I collect soul and Motown, country, folk, reggae, and mixed boxes from the loft. A good record is never turned away.",
      "The note that covers a longer journey is [[/blog/a-few-records-or-further-away|a few records, or further away]]. [[/blog/selling-a-record-collection-near-bottesford|How a visit works]] is the same whether I am in Bottesford or further south. [[/blog/clearing-or-inheriting-records-near-bottesford|Clearing a house, or records you have inherited]] is the one to read if the collection was never really yours.",
      "## Email me first",
      "Email [[mailto:diotima2003@yahoo.co.uk|diotima2003@yahoo.co.uk]] and tell me the records are in Oakham. I am happy to take a phone call on [[tel:+447359456528|07359 456528]]. A rough idea, or a few photos, is plenty. No full list is needed, as I can come round and look. My card is also on the notice board at the Post Office in the High Street, Bottesford.",
    ],
  },
}

function wordCount(paragraphs: string[]) {
  const text = paragraphs
    .join(" ")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/#/g, "")
  return text.split(/\s+/).filter(Boolean).length
}

const problems: string[] = []
for (const place of townPages()) {
  const slug = placeSlug(place)
  const article = townCopy[slug]
  if (!article) {
    problems.push(`missing copy for ${slug}`)
    continue
  }
  const count = wordCount(article.paragraphs)
  if (count < 300 || count > 450) problems.push(`${slug} is ${count} words`)
  const length = article.description.length
  if (length < 150 || length > 160) {
    problems.push(`${slug} description is ${length}: ${article.description}`)
  }
  placeTitle(place.name)
}
const known = new Set(townPages().map((place) => placeSlug(place)))
for (const slug of Object.keys(townCopy)) {
  if (!known.has(slug)) problems.push(`copy for unknown town ${slug}`)
}
if (problems.length) {
  throw new Error(`Town copy\n${problems.join("\n")}`)
}
