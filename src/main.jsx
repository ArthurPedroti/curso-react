import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Wrapper } from './Wrapper.jsx'

createRoot(document.getElementById('arthur')).render(
  <StrictMode>
<Wrapper />
    {/* {App("Arthur")} */}
  </StrictMode>,
)
