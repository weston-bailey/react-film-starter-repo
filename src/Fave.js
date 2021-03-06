import React, { useState, useEffect } from 'react';

export default function Fave(props) {
    // this.state = {
    //   isFave: false
    // }
  // const [isFave, setFave] = useState(false);
  const [icon, setIcon] = useState('add_to_queue')

  useEffect(() => {
    console.log('effect')
    setIcon(props.isFave ? 'remove_from_queue' : 'add_to_queue');
    }, [props.isFave] 
  )

  const handleClick = (e) => {
    e.stopPropagation()
    props.onFaveToggle();
    console.log('handling a Fave!');
  }

  return (
    <div  onClick={ handleClick }  
          className={ `film-row-fave ${icon}` }
    >
      <p className="material-icons">add_to_queue</p>
    </div>
  );

}
