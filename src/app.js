import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) =>  (
	 <header>
		<h1> {props.title} </h1>
		<SearhForm />
	 </header>
 )
 //{ ไว้ในจาวาสคริปเข้าไป}

 
 const AppWithoutDescription = () =>(
	<Header  title2="No description here"/>
  
 )
 
 const Items = (props)=>{
	 console.log(props.items)
	 return (
		<ul>
			{
				props.items.map(items =>(
					<li>{items}</li>
				
				))
			}
		</ul>
		)
}

 const SearhForm = () => {
        return (

            <form>
                <input type="text" />
                <button type="submit">search</button>
            </form>
        )
  }

const Content = (props) => (
		<section>
			<p> {props.contentTxt}</p>
			 <Items items={props.items}/>
		</section>
)


const App = () => {	
	const appTitle ="Frontteachs :React"
	const contentTxt  = "This is a simple react application"
	const items =[
		"Oliver", "Tobey" ,"Charlie" , "Lucky"
	]
	
	return (
		<section className="app-container">
			<Header  title={appTitle}/>
			<Content contentTxt = {contentTxt} items={items}/>
		</section>
	 )
} 

const element = document.getElementById('app')
ReactDOM.render(<App/ >,element)
//ReactDOM.render(<AppWithoutDescription / >,element)