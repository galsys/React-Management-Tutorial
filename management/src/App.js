import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

/*
class App extends Component {
  render() {
    return (
      <Customer/>
    );
  }
}
*/

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name': '이충호',
  'birthday':'961220',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/1',
  'name': '김성태',
  'birthday':'800713',
  'gender':'남자',
  'job':'시각화개발자'
},{
  'id':3,
  'image':'https://placeimg.com/64/64/2',
  'name': '이지선',
  'birthday':'771120',
  'gender':'여자',
  'job':'주부'
}]


function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  )
}

export default App;
