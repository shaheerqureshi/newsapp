import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =[
    {
        "source": {
            "id": "espn",
            "name": "ESPN"
        },
        "author": "Jeff Borzello",
        "title": "Bryce James, youngest son of LeBron James, visits Ohio State - ESPN",
        "description": "Bryce James, the youngest son of LeBron James, took an unofficial visit to Ohio State on Saturday, attending a football game between the Buckeyes and Maryland Terrapins.",
        "url": "https://www.espn.com/mens-college-basketball/story/_/id/38594820/bryce-james-youngest-son-lebron-james-visits-ohio-state",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0518%2Fr1174923_1296x729_16%2D9.jpg",
        "publishedAt": "2023-10-07T20:29:00Z",
        "content": "Bryce James, the youngest son of Los Angeles Lakers star LeBron James, took an unofficial visit to Ohio State on Saturday.\r\nJames was in attendance for fourth-ranked Ohio State's 37-17 win over Maryl… [+1229 chars]"
    },
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Adam Sella",
        "title": "Buzzing Tel Aviv’s streets empty, as Israel-Hamas conflict escalates",
        "description": "Cafes shut, streets empty, football games cancelled: The Hamas attacks have brought the Israeli city to a standstill.",
        "url": "http://www.aljazeera.com/features/2023/10/7/buzzing-tel-avivs-streets-empty-as-conflict-escalates",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/10/Empty-beach-in-Tel-Aviv-Saturday-October-7-2023-1696698422.jpg?resize=1920%2C1440",
        "publishedAt": "2023-10-07T17:45:36Z",
        "content": "Tel Aviv, Israel  The partys on hold in a city that prides itself on its vibrant culture and nightlife.\r\nAs Israel and Palestinian group Hamas trade blows in the latest chapter of their rapidly escal… [+2647 chars]"
    },
    {
        "source": {
            "id": "talksport",
            "name": "TalkSport"
        },
        "author": "Natasha Everitt",
        "title": "Man United fans praise ‘perfect’ Lady Cathy Ferguson tribute after Fergie time drama from Scotsman Scott Mc...",
        "description": "Manchester United fans think their team’s last gasp win over Brentford ‘was written in the stars’. The club and the rest of the footballing world were saddened by the news that Ma…",
        "url": "https://talksport.com/football/1592951/man-united-lady-cathy-ferguson-tribute-scott-mctominay/",
        "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/10/RAS-TALKSPORT-LADY-CATHY-FERGUSON.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
        "publishedAt": "2023-10-07T17:15:00Z",
        "content": "Manchester United fans think their team's last gasp win over Brentford 'was written in the stars'.\r\nThe club and the rest of the footballing world were saddened by the news that Man United's legendar… [+2061 chars]"
    },
    {
        "source": {
            "id": "fox-sports",
            "name": "Fox Sports"
        },
        "author": null,
        "title": "College football Week 6 live updates: Oklahoma-Texas, LSU-Mizzou, more",
        "description": "The Red River Showdown between Oklahoma and Texas kicks off Week 6 of college football. Here are Saturday's top moments!",
        "url": "http://www.foxsports.com/stories/college-football/college-football-week-6-live-updates",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/10/1408/814/10.07.23_CFB-Top-Plays_16x9.jpg?ve=1&tl=1",
        "publishedAt": "2023-10-07T15:37:25Z",
        "content": "Week 6 of the college football\r\n season is upon us, and football fans are in for a treat Saturday!\r\nKicking things off, No. 4 Ohio State\r\n is hosting Maryland\r\n on FOX's \"Big Noon Kickoff\r\n.\" Follow … [+1051 chars]"
    },
    {
        "source": {
            "id": "bleacher-report",
            "name": "Bleacher Report"
        },
        "author": "Maurice Moton",
        "title": "Fantasy Football Week 5: Biggest Sleepers at Every Position",
        "description": "In Week 5, fantasy football managers must deal with a little more difficulty because of the first wave of byes, which means you need replacements for notable…",
        "url": "https://bleacherreport.com/articles/10092062-fantasy-football-week-5-biggest-sleepers-at-every-position",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1696391833/mvvrkhqprwqx3tarjyeu.jpg",
        "publishedAt": "2023-10-06T11:00:00Z",
        "content": "Michael Owens/Getty Images\r\nDraftKings DFS Price: $5,200\r\nBefore we discuss Matt Breida, we have to acknowledge that running back Saquon Barkley could return from a high ankle sprain this week. He's … [+1171 chars]"
    },
    {
        "source": {
            "id": "bleacher-report",
            "name": "Bleacher Report"
        },
        "author": "Adam Kramer",
        "title": "B/R College Football 2023 Betting Locks with Adam Kramer: Week 6",
        "description": "When October hits and the temperatures fall, the money starts to flow. At the very least, we have no excuses now. A full month of college football has…",
        "url": "https://bleacherreport.com/articles/10092110-br-college-football-2023-betting-locks-with-adam-kramer-week-6",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1696452051/quh34csxd0vyuifarltl.jpg",
        "publishedAt": "2023-10-05T15:16:26Z",
        "content": "G Fiume/Getty Images\r\nWhen October hits and the temperatures fall, the money starts to flow.\r\nAt the very least, we have no excuses now. A full month of college football has provided us with ample ti… [+952 chars]"
    },
    {
        "source": {
            "id": "bleacher-report",
            "name": "Bleacher Report"
        },
        "author": "David Kenyon",
        "title": "College Football 2023: Week 6 Predictions for Every Game",
        "description": "What the Week 6 schedule in college football lacks in volume is atoned for through a variety of key matchups. As many programs enter an idle weekend, we're…",
        "url": "https://bleacherreport.com/articles/10092095-college-football-2023-week-6-predictions-for-every-game",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1696429643/ofjk4a8ut0altrpslexi.jpg",
        "publishedAt": "2023-10-05T11:00:00Z",
        "content": "TCU QB Chandler MorrisRon Jenkins/Getty Images\r\nWake Forest (3-1) at Clemson (3-2), 3:30 p.m. ETPrediction: Clemson 35, Wake Forest 24\r\nPurdue (2-3) at Iowa (4-1), 3:30 p.m. ETPrediction: Iowa 17, Pu… [+2985 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
        "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
        "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
        "publishedAt": "2020-04-27T07:20:43Z",
        "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
]
  constructor(){
    super();
    console.log('i am a constructor');
    this.state = {
        articles: this.articles,
        loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>CanNews - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
             <NewsItem title="This is a title" description="Here is the description of the news" 
             imageUrl="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0518%2Fr1174923_1296x729_16%2D9.jpg" newsUrl="TODO"/>
          </div>
          <div className="col-md-4">
             <NewsItem title="This is a title" description="Here is the description of the news"/>
          </div>
          <div className="col-md-4">
             <NewsItem title="This is a title" description="Here is the description of the news"/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default News
