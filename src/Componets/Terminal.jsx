import React from 'react'
import { ReactTerminal } from "react-terminal";
const Terminal = () => {
    const commands = {
        whoami: "jackharper",
        cd: (directory) => `changed path to ${directory}`
      };
  return (
    <section className='h-72'>
    <ReactTerminal
    commands={commands} showControlButtons={false} enableInput={true}
    welcomeMessage="Navigate the website through Terminal"
    themes={{
      "my-custom-theme": {
        "themeBGColor": "#1D1D1D",
        "themeToolbarColor": "#0072b1",
        "themePromptColor": "white"
      }
    }}
    theme="my-custom-theme"
  />
          </section>
    
  )
}

export default Terminal