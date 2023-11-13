import React, { useState } from 'react';
import './App.css';
import { RatingValueType } from './components/Rating/Rating';




function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  const [switchOn, setSwitchOn] = useState(false)

  console.log('App rendering')
  return (
    <div className='App'>

      {/* <PageTitle title={'This is APP component'} />
      <PageTitle title={'Menu'} />
      <Rating value={4} />
      <Accordion titleValue={'Users'} colapsed={false} />
      <Rating value={3} />
      <OnOff />
      <OnOff />
      <UncontrolledAccordion titleValue='UncontrolledAccordion' />
      <UncontrolledRating /> */}
    </div>
  );

  type PageTitlePropsType = {
    title: string
  }

  function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
      <h1>{props.title}</h1>
    )
  }
}





export default App;
