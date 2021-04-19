import { useState } from "react";
import "./styles.css";

const movieDB = {
  Netflix: [
    {
      name: "Lucifer",
      rating: "8.5",
      overview:
        "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape."
    },
    {
      name: "Who Killed Sara?",
      rating: "7.9",
      overview:
        "Hell-bent on exacting revenge and proving he was framed for his sister's murder, Álex sets out to unearth much more than the crime's real culprit."
    },
    {
      name: "Transformers: War for Cybertron: Siege",
      rating: "7.6",
      overview:
        "On their dying planet, the Autobots and Decepticons battle fiercely for control of the AllSpark in the Transformers universe's origin story."
    },
    {
      name: "Cobra Kai",
      rating: "8.1",
      overview:
        "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi."
    },
    {
      name: "Elite",
      rating: "8.2",
      overview:
        "When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy."
    },
    {
      name: "Sky Rojo",
      rating: "7.8",
      overview:
        "On the run from their pimp and his henchmen, three women embark on a wild and crazy journey in search of freedom."
    },
    {
      name: "Tribes of Europa",
      rating: "7.1",
      overview:
        "2074. In the wake of a mysterious global disaster, war rages between the Tribes that have emerged from the wreckage of Europe. Three siblings from the peaceful Origine tribe are separated and forced to forge their own paths in an action-packed fight for the future of this new Europa."
    }
  ],

  Documentries: [
    {
      name: "Why Did You Kill Me?",
      rating: "6.5",
      overview:
        "The line between justice and revenge blurs when a devastated family uses social media to track down the people who killed 24-year-old Crystal Theobald."
    },
    {
      name: "More Than Miyagi: The Pat Morita Story",
      rating: "6.3",
      overview:
        "The Oscar nominated actor best known for his role of Mr. Miyagi, left behind a painfully revealing autobiographical record of his much-too-brief time here on earth. Tracing his journey from being bed bound as a boy to the bright lights and discrimination in Hollywood. Deep inside that sweet, generous, multi-talented performer seethed an army of demons, that even alcohol and drugs couldn't mask."
    },
    {
      name: "Mortal Kombat 20th Anniversary Retrospective",
      rating: "7.5",
      overview:
        "GameSpot stops by NetherRealm Studios and Chicago Wushu to interview the team members about the genesis of the original Mortal Kombat. Over the twenty minutes they sit down and interview the games sole programmer Ed Boon, character and animation artist John Tobias, background artist John Vogel, audio engineer &amp; composer Dan Forden, Carlos Pesina who played Raiden, Daniel Pesina who played Johnny Cage and the ninjas, and Ho Sung Pak who played Liu Kang and Shang Tsung."
    },
    {
      name: "Money Heist: The Phenomenon",
      rating: "7.7",
      overview:
        "A documentary on why and how Money Heist sparked a wave of enthusiasm around the world for a lovable group of thieves and their professor."
    },
    {
      name: "The Day Sports Stood Still",
      rating: "6.5",
      overview:
        "The story of the unprecedented sports shutdown in March of 2020 and the remarkable turn of events that followed. This sports documentary is a chronicle of the abrupt stoppage, athletes’ prominent role in the cultural reckoning on racial injustices that escalated during the pandemic, and the complex return to competition in the summer and fall."
    },
    {
      name: "Marvel's Behind the Mask",
      rating: "7.9",
      overview:
        "A documentary special that explores the power of identity behind the iconic superheroes we know and love today. These legendary Marvel creations and stories have not only reflected the world outside our window – they have become a reflection of our own identities and who we truly are."
    },
    {
      name: "Strip Down, Rise Up",
      rating: "7.3",
      overview:
        "The feature documentary follows women of all walks of life, all ages and ethnic backgrounds, as they shed trauma, body image shame, sexual abuse and other issues locked in their bodies, and embark on a journey to reclaim themselves. The film also gives a rare window into the world of Pole artistry and expression."
    }
  ],
  Comedy: [
    {
      name: "Thunder Force",
      rating: "5.8",
      overview:
        "In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city."
    },
    {
      name: "Tom & Jerry",
      rating: "7.3",
      overview:
        "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse."
    },
    {
      name: "Secret Magic Control Agency",
      rating: "7.1",
      overview:
        "The Secret Magic Control Agency sends its two best agents, Hansel and Gretel, to fight against the witch of the Gingerbread House."
    },
    {
      name: "Just Say Yes",
      rating: "5.9",
      overview:
        "Incurable romantic Lotte finds her life upended when her plans for a picture-perfect wedding unravel -- just as her self-absorbed sister gets engaged."
    },
    {
      name: "The Croods: A New Age",
      rating: "7.5",
      overview:
        "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together."
    },
    {
      name: "Soul",
      rating: "8.3",
      overview:
        "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth."
    }
  ],
  Horror: [
    {
      name: "Red Dot",
      rating: "5.9",
      overview:
        "On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter."
    },
    {
      name: "Black Water: Abyss",
      rating: "4.9",
      overview:
        "An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles."
    },
    {
      name: "The Unholy",
      rating: "5.9",
      overview:
        "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister."
    },
    {
      name: "Wrong Turn",
      rating: "6.2",
      overview:
        "Jen and a group of friends set out to hike the Appalachian Trail. Despite warnings to stick to the trail, the hikers stray off course—and cross into land inhabited by The Foundation, a hidden community of mountain dwellers who use deadly means to protect their way of life."
    },
    {
      name: "Aquaslash",
      rating: "4.1",
      overview:
        "To celebrate their graduation, the teenagers from Valley Hills High School have organized an ’80s-themed party at the old Wet Valley water park. Things turn gruesome when it's revealed that a mysterious maniac has inserted giant razor blades into one of the water slides. The water park thus becomes the backdrop for a bloodbath (literally), and everyone is a suspect..."
    },
    {
      name: "Fear of Rain",
      rating: "7.3",
      overview:
        "A teenage girl living with schizophrenia begins to suspect her neighbor has kidnapped a child. Her parents try desperately to help her live a normal life, without exposing their own tragic secrets, and the only person who believes her is Caleb – a boy she isn’t even sure exists."
    },
    {
      name: "The Unfamiliar",
      rating: "6.3",
      overview:
        "A British Army doctor comes back from a war, thinking that she has PTSD only to discover that there is a more daunting malevolence at work making the life that she knew unfamiliar."
    }
  ]
};

export default function App() {
  const [selectedMovie, setMovie] = useState("Netflix");
  function movieClickHandler(movie) {
    setMovie(movie);
  }
  return (
    <div className="App">
      <h1> Movie Recommendations </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are my recommendations of Movies.{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((movie) => (
          <button className="Btn" onClick={() => movieClickHandler(movie)}>
            {movie}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedMovie].map((movie) => (
            <li className="movie" key={movie.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
              <div style={{ fontSize: "smaller" }}> {movie.overview} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
