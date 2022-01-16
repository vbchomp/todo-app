import { useState } from 'react';

export const ThemeContext = createContext({});

function Theme() {

  const [ toggleMode, setMode ] = useState('dark');

  const mode = () => setMode( toggleMode === 'dark' ? 'light' : 'dark' );

  const modeValues = {
    mode,
    toggleMode
  };

  return (
    <>
      <ThemeContext.Provider value={ modeValues } >

      </ThemeContext.Provider>
    </>
  )

}

export default Theme;