import React, { useState } from 'react';
// import the context hooks 
import { SettingsContext } from './context/settings.js';
// import { ThemeContext } from './context/theme.js';

// import Main from './main.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import ToDo from './components/todo/todo.js';

function App() {

  // const [ toggleMode, setMode ] = useState();

  const [ settings, setSettings ] = useState({
    theme: 'dark',
    displayComplete: false,
    displayMax: 5,
    list: [],
    // sort: 
    // DONE: hide completed items
    // DONE: number items to display on screen
    // TODO: sort items
    // DONE: hard code settings for context provider's state.
  })

  return (
    <>  
    {/* use provider to distribute the hook down to components */}
      {/* <ThemeContext> */}
        <SettingsContext.Provider value={ settings, setSettings } >

          <Header title={"Honey-Do List"}/>
          <ToDo />
          <Footer />

        </SettingsContext.Provider>
      {/* </ThemeContext> */}

    </>
  )
} 

export default App;