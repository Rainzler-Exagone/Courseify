import { Command } from "cmdk"
import CommandSearch from "./Filters/SearchBar"
import { useEffect, useState } from "react"
import axios from "axios"
import { options } from "@/lib/fetchData"
import SearchInput from "./Filters/SearchBar"

const SearchBar = () => { 
    
    const [commands, setCommands] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = (query:any) => {
      setSearchQuery(query);
      console.log("Search Query:", query);
    };
  
  useEffect(() => {
    axios.request(options).then((res) => {
        setCommands(res.data)
    }).catch((error) => {
        console.error("Error fetching data:", error);
      })
  }, []);
    return ( < SearchInput onSearch={handleSearch}/>)

}