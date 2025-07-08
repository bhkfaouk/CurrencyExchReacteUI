import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConverter from "./services/CurrencyConverter.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {

 const clientQuery=new QueryClient();
  return (
      <QueryClientProvider client={clientQuery} >
   <CurrencyConverter/>
      </QueryClientProvider>
  )
}

export default App
