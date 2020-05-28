import React,{Component} from "react";
import{render} from "react-dom"
// import rawFile from "raw-loader"
// import myText from './data.txt';

class About extends Component{
    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
        // let scrollAmt=100;
        let data=50;
        // let pos;
        // let scroll=document.body.scrollTop||document.documentElement.scrollTop;
        //      if(scroll>scrollAmt)
        //      {
        //          scrollAmt=scroll;
        //             if(data)
        //             {
        //                 pos=0;
        //             }
        //      }
        // this.readTextFile("./data.txt");
        // this.getChunk=this.getChunk.bind(this)
        // this.showChunk=this.showChunk.bind(this)
      }
      readTextFile = file => {
        var rawFile = new XMLHttpRequest();
        let scrollAmt=100;
        let count=0;
        
        // getChunk(event)
        // {
        //         let scroll=document.body.scrollTop||document.documentElement.scrollTop;
        //         if(scroll>scrollAmt)
        //         {
        //             scrollAmt=scroll;
        //             rawFile.open("GET",file,true);
        //             rawFile.send(null);
        //             rawFile.onreadystatechange=this.showChunk;
                    
        //         }
        // }
        //     showChunk(event)
        //     {
        //         console.log(rawFile.status)
        //         if(rawFile.readyState==4 && rawFile.status==200)
        //         {
        //             console.log("hello");
        //             document.getElementById("content").innerHTML+=rawFile.responseText;
        //         }           
        //     }
        //     window.onscroll=getChunk;

        // rawFile.send(null);

        }
    render(){
        return(
            <div id="content" ref={this.myRef} >
                 {/* <button onClick={this.getChunk} className="LoadMyFile" name="button" variant="flat">test string</button> */}
                <p onchange={this.p1}>
A diary is a record (originally in handwritten format) with discrete entries arranged by date reporting on what has happened over the course of a day or other period. A personal diary may include a person's experiences, thoughts, and/or feelings, excluding comments on current events outside the writer's direct experience. Someone who keeps a diary is known as a diarist. Diaries undertaken for institutional purposes play a role in many aspects of human civilization, including government records (e.g. Hansard), business ledgers, and military records. In British English, the word may also denote a preprinted journal format. A diary is a collection of notes.Today the term is generally employed for personal diaries, normally intended to remain private or to have a limited circulation amongst friends or relatives. The word "journal" may be sometimes used for "diary," but generally a diary has (or intends to have) daily entries, whereas journal-writing can be less frequent.

Although a diary may provide information for a memoir, autobiography or biography, it is generally written not with the intention of being published as it stands, but for the author's own use. In recent years, however, there is internal evidence in some diaries (e.g. those of Ned Rorem, Alan Clark, Tony Benn or Simon Gray) that they are written with eventual publication in mind, with the intention of self-vindication (pre- or posthumous), or simply for profit.
</p><p>The oldest extant diaries come from Middle Eastern and East Asian cultures, although the even earlier work To Myself (Τὰ εἰς ἑαυτόν), today known as the Meditations, written in Greek by the Roman Emperor Marcus Aurelius in the second half of the 2nd century AD, already displays many characteristics of a diary. Pillowbooks of Japanese court ladies and Asian travel journals offer some aspects of this genre of writing, although they rarely consist exclusively of diurnal records. The scholar Li Ao (9th century AD), for example, kept a diary of his journey through southern China.
In the medieval Near East, Arabic diaries were written from before the 10th century. The earliest surviving diary of this era which most resembles the modern diary was that of Ibn Banna' in the 11th century. His diary is the earliest known to be arranged in order of date (ta'rikh in Arabic), very much like modern diaries.[4]

The precursors of the diary in the modern sense include daily notes of medieval mystics, concerned mostly with inward emotions and outward events perceived as spiritually important (e.g. Elizabeth of Schönau, Agnes Blannbekin, and perhaps also, in the lost vernacular account of her visions, Beatrice of Nazareth).

From the Renaissance on, some individuals wanted not only to record events, as in medieval chronicles and itineraries, but also to put down their own opinions and express their hopes and fears, without any intention to publish these notes. One of the early preserved examples is the anonymous Journal d'un bourgeois de Paris that covers the years 1405–49, giving subjective commentaries on the current events. Famous 14th- to 16th-century Renaissance examples, which appeared much later as books, were the diaries by the Florentines Buonaccorso Pitti and Gregorio Dati and the Venetian Marino Sanuto the Younger. Here we find records of even less important everyday occurrences together with much reflection, emotional experience and personal impressions.As internet access became commonly available, many people adopted it as another medium in which to chronicle their lives with the added dimension of an audience. The first online diary is thought to be Claudio Pinhanez's "Open Diary," published at the MIT Media Lab website from 14 November 1994 until 1996.[9] Other early online diarists include Justin Hall, who began eleven years of personal online diary-writing in 1994, Carolyn Burke, who started publishing "Carolyn's Diary" on 3 January 1995,[11] and Bryon Sutherland, who announced his diary The Semi-Existence of Bryon in a USENET newsgroup on 19 April 1995.[12]
</p>
<p>The internet has also served as a way to bring previously unpublished diaries to the attention of historians and other readers, such as the diary of Michael Shiner, a 19th-century slave who documented his life in Washington, D.C.[13]

Web-based services such as Open Diary (started in October 1998) and LiveJournal (January 1999) soon appeared</p> <p>to streamline and automate online publishing, but growth in personal storytelling came with the emergence of blogs. While the format first focused on external links and topical commentary, widespread blogging tools were quickly used to create web journals. Recent advances have also been made to enable the privacy of internet diary entries. For example, some diary software now stores entries in an encrypted format, such as 256-bit AES (Advanced Encryption Standard) encryption, and others only permit access to the diary after correct PIN entry on a secure USB device.With the popularization of mobile apps, diary or journaling apps have become available for iOS and Android. Proponents cite the following as primary reasons for journaling with digital applications: Ease and speed of typing; mobile portability; search capabilities; entry location, date, and other metadata from mobile phones; and, tags and other organizational features.[14] Digital diaries also seem tailored towards shorter-form, in-the-moment writing, similar to user engagement with Facebook, Twitter, Instagram, and other social media services.Put aside any thought of a little pink diary with Hello Kitty on the cover, secured by a lock that can be jimmied with a toothpick. I’m here to talk about why keeping diary may hold the key to achieving a meaningful adult life.

</p><p>It’s a realization I came to not long ago. I’d never thought much about diaries until I was well into researching my latest book: The Point Is: Making Sense of Birth, Death, and Everything in Between. The book’s about how each of us, beginning a young age, begins collecting memories. And how, as if by magic, we build a story out of them—the story of our life, the narrative we carry in our heads. Just like a written story, it’s got a beginning, a middle, and eventually an end. Some chapters are happy, others we’d delete if we could. There are any number of turning points along the way.One day, grappling with how best to describe this miraculous process, I remembered that once in my life I’d kept a diary. Twenty-five years ago. I started keeping notes when our son was born, continuing on for two years until shortly after our daughter came along. I hadn’t looked at the document since. But when I searched my current hard drive, there it was, tucked away in an ancient folder: an 81-page Word document that had been transferred from desktop to laptop to desktop, accompanying me into and through middle-age. The instant I reopened the file, a clutch of memories sprang back to life: A day in a park on a lonely business trip abroad, when I watched a father with his young son and felt a profound longing to be back home with my own toddler who was about to take his first steps. Didn’t want to miss that. The name and face of a woman long-forgotten, who gently helped in the delivery of our daughter. These and other long-lost memories reminded me, in laser-sharp detail, just how rich and meaningful that chapter of my life story was.

Rediscovering that journal ushered in a fresh phase of research.</p><p>A diary is yet another version of the life story that we carry in our heads. When revisited, it can help us decide whether the story’s been meaningful or not. You’d think, then, that more of us would keep a diary. But most people said no as I continued my book research. Some folks told me that they’ve thought about keeping a journal but don’t have the time. Others said they had nothing much to tell a diary: their day-to-day life was humdrum and besides, there were plenty of other places — Facebook, Instagram, Twitter — where they could offload half-baked thoughts at the drop of a hat. Keeping a journal and posting on social media, however, are two different things, I tried to point out. There’s also plenty of stuff that occurs to us that we’d rather not share with others. And there’s stuff we don’t fully understand and can’t easily put into words, which is reason enough to try and articulate them in the pages of a journal.</p>


</div>

        )}
        };
export default About;