 import Header from "./Header"
 import Search from "./search"
 import BookLIst from "./BookLIst"

 function boimela (){
   return(
    <div className="p-4 border-4 rounded-2xl  box-border mx-6">
       <>
       <Header/>
       <Search/>
       <BookLIst/>
       </> 
    </div>
   ) 
}

export default boimela