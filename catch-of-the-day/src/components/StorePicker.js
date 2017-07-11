import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore() {
    event.preventDefault();
    console.log('You Changed the URL');
    // First grab the text from the box
    console.log(this.storeInput.value);
    // Second we are going to transition from / to /store/:storeId
  }
  
  render() {
    // Any Where Else
    return (
      <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>   
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder='Store Name' defaultValue={
          getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type='submit'>Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
  
  
  
  