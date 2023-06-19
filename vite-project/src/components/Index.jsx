import CharacterCountDisplay from './Text';
import TextInput from './Input';
import { useState } from 'react';

const InputWithCharacterCount = () =>{
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
      setInputValue(event.target.value);
    }
   return(
    <div>
      <TextInput value={inputValue} onChange={handleInputChange} />
      <CharacterCountDisplay count={inputValue.length} />
    </div>
   );
}   

export default InputWithCharacterCount;