import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import Menu from './components/Menu/index.jsx'

function App() {
  /**
   * Challenge: Refactor the Menu components to use the logic 
   * from Toggle instead of doing any logic of its own.
   * 
   * 1. Remove all context and state logic from the menu components
   * 2. Using Toggle and its "sub-components", add a menu to this
   *    App component below the Star. Make sure to use a separate
   *    <Toggle> wrapper so the state isn't tied to the Star's 
   *    Toggle state
   */
  
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Menu>
            <Toggle.Off>
              <Menu.Button>Sports (closed)</Menu.Button>
            </Toggle.Off>
            <Toggle.On>
              <Menu.Button>Sports (open)</Menu.Button>
              <Menu.Dropdown>
                <Menu.Item>
                  Tenis
                </Menu.Item>
                <Menu.Item>
                  Hocky
                </Menu.Item>
              </Menu.Dropdown>
            </Toggle.On>
          </Menu>
        </Toggle.Button>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
