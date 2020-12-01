// import React, { PureComponent } from 'react';
// import {
//   Radar, RadarChart, PolarGrid, Legend,
//   PolarAngleAxis, PolarRadiusAxis,
// } from 'recharts';


// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';
//
//
//   render() {
//     return (
//       <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
//         <PolarGrid />
//         <PolarAngleAxis dataKey="subject" />
//         <PolarRadiusAxis angle={30} domain={[0, 10]} />
//         <Radar name="Game" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//         <Radar name="User" daey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
//         <Legend />
//       </RadarChart>
//     );
//   }
// }

import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

// const data = [
//   {
//     subject: 'Math', A: 120, B: 110, fullMark: 150,
//   },
//   {
//     subject: 'Chinese', A: 98, B: 130, fullMark: 150,
//   },
//   {
//     subject: 'English', A: 86, B: 130, fullMark: 150,
//   },
//   {
//     subject: 'Geography', A: 99, B: 100, fullMark: 150,
//   },
//   {
//     subject: 'Physics', A: 85, B: 90, fullMark: 150,
//   },
//   {
//     subject: 'History', A: 65, B: 85, fullMark: 150,
//   },
// ];




const data = (game) => {
  console.log("PROPS", game.board_score)
  return (
    [
      {
        subject: 'Board Game', A: game.board_score, B: 5, fullMark: 10,
      },
      {
        subject: 'Party Game', A: game.party_score, B: 4, fullMark: 10,
      },
      {
        subject: 'Economic', A: game.economic_score, B: 6, fullMark: 10,
      },
      {
        subject: 'Sci-Fi/Fantasy', A: game.fantasy_score, B: 7, fullMark: 10,
      },
      {
        subject: 'Territory Building', A: game.territory_score, B: 7, fullMark: 10,
      },
      {
        subject: 'No. Players', A: game.players_score, B: 3, fullMark: 10,
      },
      {
        subject: 'Card Game', A: game.card_score, B: 9, fullMark: 10,
      },
    ]
  )
}


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';


  render() {
    console.log("DATA", data)
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data(this.props.game)}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar name="Game" dataKey="A" stroke="blue" fill="blue" fillOpacity={0.6} />
        <Radar name="User" dataKey="B" stroke="#ff6a00" fill="#ff6a00" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    );
  }
}
